import { catsViewed } from "./App";

export default function RandCatId() {
    let catCount = 1986;
    async function checkCatCount() {
        try{
            let catCount = 1986;
            while (await fetch(`https://cataas.com/api/cats?limit=1&skip=${catCount}`)){
                catCount++
            }
        } catch (error){        }
    }

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

    checkCatCount();
    getCat()
    return null
};