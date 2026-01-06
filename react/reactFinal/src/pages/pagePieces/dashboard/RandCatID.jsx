export default function RandCatId({width, height = width, id}) {
    if (!id) {
        return (
            <img src={`https://cataas.com/cat?width=${width}&height=${height}`} id="catImage" alt="Random Cat" width={`${width}px`} height={`${height}px`}/>
        );
    }

    const catCount = 1986;

    async function getCat(){
        let cat = Math.floor(Math.random() * catCount);
        console.log(cat);
        const response = await fetch(`https://cataas.com/api/cats?limit=1&skip=${cat}`);
        if (response.ok) {
            catsViewed.push(cat);
            const data = await response.json();
            console.log(data );
            document.getElementById("catImage").src = `https://cataas.com/cat/${data[0].id}`;
        }
    }

    getCat()
    return (
        <img src={null} id="catImage" alt="Random Cat" width={`${width}px`} height={`${height}px`}/>
    );
};