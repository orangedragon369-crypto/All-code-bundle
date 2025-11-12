async function getApi(api, info) {
    if (api === null) return;
    try{
        const response = await fetch(api)
        if(!response.ok){
            throw new Error("Could not fetch response");
        }
        const data = await response.json()
        return data;
    }
    catch(error) {console.error(error)};
}

async function loadCategories() {
  const info = await getApi("https://opentdb.com/api_category.php");
  const element = document.getElementById("category");
  element.innerHTML = "";

  info.trivia_categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    element.appendChild(option);
  });
}

loadCategories();