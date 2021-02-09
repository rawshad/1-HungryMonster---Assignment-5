const searchFood = () => {
    const searchText = document.getElementById("search-food").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
}

const displayFood = foodItem => {
    foodItem.forEach(items => {
        // console.log(items);
        //Show data with list items
        // const foodContainer = document.getElementById("food-container");
        // const li = document.createElement("li");
        // li.innerText = items.strMeal;
        // foodContainer.appendChild(li);
        // console.log(items.strMeal);
        const foodContainer = document.getElementById("food-container");
        const foodDiv = document.createElement('div');
        foodDiv.className = 'col-md-3';
        foodDiv.innerHTML = `
            <figure class="figure">
                <img src="${items.strMealThumb}" class="figure-img img-fluid rounded" alt="...">
                <figcaption class="figure-caption text-center food-caption">${items.strMeal}</figcaption>
            </figure>
        `
        foodContainer.appendChild(foodDiv);
    })
}