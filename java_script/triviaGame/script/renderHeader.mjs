function setHeader(){
    const head = document.getElementById("header");
    head.innerHTML = `
        <div class="cont fill">
            <div><a class="link" href="index.html"><i class="fa-solid fa-house"></i>Home</a></div>
            <div><a class="link" href="stats.html"><i class="fa-solid fa-chart-simple"></i>Stats</a></div>
        </div>`;
    head.classList.add("header")
};

setHeader();