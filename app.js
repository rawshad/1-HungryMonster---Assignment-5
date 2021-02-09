const searchFood = () => {
    const searchText = document.getElementById("search-food").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    //load data
    fetch(url)
    .then(res => res.json())
    .then(data => displayFood(data.meals))
    .catch(error => errorHandler('OOps! No Food Found.'))
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
            <figure onclick="foodDetails('${items.strMealThumb}','${items.strMeal}', '${items.strIngredient1}', '${items.strIngredient2}', '${items.strIngredient3}', '${items.strIngredient4}', '${items.strIngredient5}', '${items.strIngredient6}')" class="figure">
                <img src="${items.strMealThumb}" class="figure-img img-fluid rounded" alt="...">
                <figcaption class="figure-caption text-center food-caption">${items.strMeal}</figcaption>
            </figure>
        `
        foodContainer.appendChild(foodDiv);
    })
}

const foodDetails = (thumbnail, foodName, ing1, ing2, ing3, ing4, ing5, ing6) => {
    // console.log(foodName, ing1, ing2, ing3, ing4, ing5, ing6);
    const ingredientCard = document.getElementById("ingredients-card");
    ingredientCard.innerHTML =`
            <img src="${thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${foodName}</h5>
                <p class="card-text fw-bold">Ingredients</p>
                <ul class="list-group">
                <li class="list-group-item">${ing1}</li>
                <li class="list-group-item">${ing2}</li>
                <li class="list-group-item">${ing3}</li>
                <li class="list-group-item">${ing4}</li>
                <li class="list-group-item">${ing5}</li>
                <li class="list-group-item">${ing6}</li>
                </ul>
            </div>
    `
}

const errorHandler = (error) => {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerText = error;
}