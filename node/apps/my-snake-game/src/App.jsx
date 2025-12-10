import React, { useEffect, useRef, useState } from "react";
import './index.css';

// Single-file Snake game component (drop into src/App.jsx)
// Requirements: React + Tailwind is set up (index.css includes Tailwind directives).

const COLS = 20;
const ROWS = 20;
const INITIAL_SPEED = 120; // ms per move

const DIRS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
};

function randomPosition(exclude = []) {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  } while (exclude.some(e => e.x === pos.x && e.y === pos.y));
  return pos;
}

function equal(a, b) {
  return a.x === b.x && a.y === b.y;
}

export default function App() {
  const [snake, setSnake] = useState([
    { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
    { x: Math.floor(COLS / 2) - 1, y: Math.floor(ROWS / 2) },
  ]);
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const dirRef = useRef(dir);
  dirRef.current = dir;

  const [food, setFood] = useState(() => randomPosition([]));
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Move snake on interval
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSnake(prev => {
        const head = prev[0];
        const newHead = { x: head.x + dirRef.current.x, y: head.y + dirRef.current.y };

        // wrap-around (classic snake can also end on wall if you prefer)
        if (newHead.x < 0) newHead.x = COLS - 1;
        if (newHead.x >= COLS) newHead.x = 0;
        if (newHead.y < 0) newHead.y = ROWS - 1;
        if (newHead.y >= ROWS) newHead.y = 0;

        // collision with body?
        if (prev.some(seg => equal(seg, newHead))) {
          setRunning(false);
          setGameOver(true);
          return prev;
        }

        const ateFood = equal(newHead, food);
        const newSnake = [newHead, ...prev];
        if (!ateFood) newSnake.pop();
        else {
          setScore(s => s + 1);
          // place new food not on the snake
          setFood(randomPosition(newSnake));
          // speed up slightly
          setSpeed(s => Math.max(40, s - 3));
        }
        return newSnake;
      });
    }, speed);

    return () => clearInterval(id);
  }, [running, speed, food]);

  // Keyboard controls
  useEffect(() => {
    function handleKey(e) {
      const key = e.key;
      if (key === ' ' ) {
        // space toggles pause
        setRunning(r => !r);
        if (gameOver) setGameOver(false);
        return;
      }
      const newDir = DIRS[key];
      if (!newDir) return;
      // prevent reversing
      if (newDir.x === -dirRef.current.x && newDir.y === -dirRef.current.y) return;
      setDir(newDir);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gameOver]);

  // Touch / on-screen controls for mobile
  function handleDirection(d) {
    if (d.x === -dirRef.current.x && d.y === -dirRef.current.y) return;
    setDir(d);
  }

  function startNew() {
    setSnake([
      { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
      { x: Math.floor(COLS / 2) - 1, y: Math.floor(ROWS / 2) },
    ]);
    setDir({ x: 1, y: 0 });
    dirRef.current = { x: 1, y: 0 };
    setFood(randomPosition([]));
    setRunning(true);
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setGameOver(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-indigo-900 to-black p-6">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white">
            <h1 className="text-2xl font-bold">React + Tailwind Snake</h1>
            <p className="text-sm opacity-80">Score: <span className="font-mono">{score}</span></p>
          </div>

          <div className="flex gap-2">
            <button
              className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
              onClick={() => { if (gameOver) startNew(); else setRunning(r => !r); }}
            >
              {gameOver ? 'Restart' : running ? 'Pause' : 'Start'}
            </button>
            <button
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded"
              onClick={() => { setSnake(s => s.slice(0, 1)); setScore(0); setFood(randomPosition([])); setSpeed(INITIAL_SPEED); }}
            >Reset</button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 shadow-xl">
          <div
            className="aspect-square bg-black rounded-md overflow-hidden mx-auto"
            style={{
              maxWidth: 640,
            }}
          >
            <div
              className="w-full h-full grid"
              style={{
                gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: ROWS * COLS }).map((_, idx) => {
                const x = idx % COLS;
                const y = Math.floor(idx / COLS);
                const isHead = equal(snake[0], { x, y });
                const isBody = snake.some((s, i) => i > 0 && equal(s, { x, y }));
                const isFood = equal(food, { x, y });
                return (
                  <div
                    key={idx}
                    className={`border-[0.5px] border-gray-800 ` +
                      (isHead
                        ? 'bg-emerald-400/90 scale-110 transform' : isBody ? 'bg-emerald-600/90' : isFood ? 'bg-rose-500/90 pulse' : '')}
                  />
                );
              })}
            </div>
          </div>

          {gameOver && (
            <div className="mt-4 text-center text-red-400 font-bold">Game Over — your score: {score}</div>
          )}

          <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
            <div>Controls: Arrow keys or WASD — Space to pause</div>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2">
                <span>Speed</span>
                <input
                  type="range"
                  min="40"
                  max="300"
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                />
              </label>
            </div>
          </div>

          {/* Simple on-screen controls for touch */}
          <div className="mt-4 flex justify-center gap-3">
            <div className="grid grid-cols-3 gap-2">
              <button onClick={() => handleDirection(DIRS.ArrowUp)} className="p-2 bg-gray-800 rounded text-white">▲</button>
              <div />
              <button onClick={() => handleDirection(DIRS.ArrowRight)} className="p-2 bg-gray-800 rounded text-white">►</button>
              <button onClick={() => handleDirection(DIRS.ArrowLeft)} className="p-2 bg-gray-800 rounded text-white">◄</button>
              <div />
              <button onClick={() => handleDirection(DIRS.ArrowDown)} className="p-2 bg-gray-800 rounded text-white">▼</button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-400">
          Tip: The board wraps around edges. Want walls instead? I can change it.
        </div>
      </div>
    </div>
  );
}