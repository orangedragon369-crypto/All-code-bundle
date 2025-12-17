/**
 * @jest-environment jsdom
 */

import { loadMonsterInfo } from "./game.js";

beforeEach(() => {
  document.body.innerHTML = `<div id="info"></div>`;
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        size: {
          base: 4623.598,
          mini: 4161.2383,
          gold: 5687.026
        },
        species: "construct",
        baseHealth: 9000
      })
  })
);

test("sets monster info into the DOM", async () => {
  const info = document.getElementById("info");

  await loadMonsterInfo(info);

  const hint = info.querySelector(".hint");
  expect(hint).not.toBeNull();

  expect(hint.textContent).toContain("construct");
  expect(hint.textContent).toContain("9000");
  expect(hint.textContent).toContain("4161.2383m-5687.026m");
  expect(hint.textContent).toContain("4623.598m");
});
