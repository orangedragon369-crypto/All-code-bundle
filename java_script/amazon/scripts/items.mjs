const items = document.getElementById("items");

async function apiFetch () {
    try {
        const api = await fetch("https://fakestoreapi.com/products");
        if (!api.ok) {
            throw new Error(`Response status: ${api.status}`);
        }

        const data = await api.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

async function placeItems(){
    const data = await apiFetch();
    data.forEach( item => {
        items.innerHTML += `
        `;
    });
}

placeItems();