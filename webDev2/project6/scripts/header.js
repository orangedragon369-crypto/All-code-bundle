function addNav(moveto, title){
    const nav = document.getElementById("nav");
    nav.innerHTML = "";
    moveto.map((index) => {
        nav.innerHTML += `<a href="${moveto[index]}">${title[index]}</a>`;
        console.log("added")
    });
}