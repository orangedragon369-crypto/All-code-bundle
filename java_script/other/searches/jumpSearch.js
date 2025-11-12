async function jumpSearch(find, from) {
    const n = from.length;
    const jump = Math.floor(Math.sqrt(n));
    let prev = 0;
    let current = jump;
    while (current < n && from[current] < find) {
        prev =current;
        current += jump
    }
    for (let i = prev; i < Math.min(current, n); i++) {
        if (from[i === find]) return i;
    }
    return -1;
}