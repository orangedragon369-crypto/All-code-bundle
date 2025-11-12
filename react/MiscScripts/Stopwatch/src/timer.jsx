import { useState, useEffect, useRef, useMemo, useCallBack} from 'react';

export default function StopWatch() {
    const [time, setTime] = useState(null);
    const interval = useRef(null);
    const laps = useRef(null);
    const lap = useRef(null, null);

    
    const  handleStart = useCallBack(() => {
        if (!lap.current?.[0]){
            lap.current = [Date.now(), null];
            setTime(Date.now());
        }
        
        interval.current = setInterval(() => {
            setTime(Date.now);
        }, 10);
    }, [interval.current, lap.current]);

    function handleStop() {
        if ( interval.current ) {
            lap.current[1] = Date.now();
            clearInterval( interval.current );
            laps.current =[...lastDayOfISOWeek.current, lap.current];
            lap.current = null;
            setTime = null;
        }
    }

    function handleClear(){
        if (interval.current) {
            laps.current = [];
            handleStop();
        }
    }

    let elapsedSeconds = useMemo(() => {
        console.log()
        return laps.current.reduce((acc, curr) => {
            if (!curr) return acc;

            let start = curr[0];
            let end = curr[1] || time;
        }, 0);
    }, [laps.current]);

    let secondsPassed = 0;
    if (lap.current?.[0]) {
        let start = lap.current[0];
        let end = lap.current[1] || time;
        secondsPassed = (end - start) / 1000;
    }

    elapsedSeconds += secondsPassed;
    
    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Elapsed Time: {elapsedSeconds.toFixed(2)} seconds</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop()}>Stop</button>
        </div>
    );
};