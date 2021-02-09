function foodSearch(){
    const inputFoodName = document.getElementById('search-field').value;
    const url = `https:www.themealdb.com/api/json/v1/1/search.php?s=${inputFoodName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        getFoodResult(data.meals);
    })
}


const getFoodResult = foods =>{
    const foodMainSection = document.getElementById('food-list');
    foodMainSection.innerHTML ='';
    foods.forEach(food=>{
        const foodInnerSection = document.createElement('div');
        foodInnerSection.className = 'row justify-content-center m-2 p-3';
        foodInnerSection.innerHTML = `
        <div class = "food" onclick ="foodDetails('${food.idMeal}')">
            <img src = "${food.strMealThumb}" alt = "food" class = "img-fluid">
            <h3 class = "mt-3">${food.strMeal}</h3>
            </div>
        </div>`;
        foodMainSection.appendChild(foodInnerSection);
    });
};

const foodDetails =(foodName) =>{
    const url = `https:www.themealdb.com/api/json/v1/1/lookup.php?i=${foodName}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
        foodDetailsSection(data.meals);
    })
}


function foodDetailsSection(foodNameCatch){
    const allDetails = document.getElementById('food-details');
    allDetails.innerHTML ='';
    foodNameCatch.forEach(detailInside=>{
       const detailsInnerSection = document.createElement('div');
       detailsInnerSection.className = 'col-md-6 mx-auto';
       detailsInnerSection.innerHTML = `
       <img src="${detailInside.strMealThumb}" class= "img-fluid">
       <h3 class = " mt-3">${detailInside.strMeal}</h3>
       <ol>
       <li>${detailInside.strIngredient1}</li>
       <li>${detailInside.strIngredient2}</li>
       <li>${detailInside.strIngredient3}</li>
       </ol>
    
       `;
       allDetails.appendChild(detailsInnerSection);
    })
}