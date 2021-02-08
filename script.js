const getFood = meals =>{
    const foodMainDiv = document.getElementById('food-list');
    foodMainDiv.innerHTML ='';
    meals.forEach(food=>{
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result row justify-content-center m-2 p-3 margin-padding';
        foodDiv.innerHTML = `
        <div class = "meal" onclick ="all('${food.idMeal}')">
            <img src = "${food.strMealThumb}" alt = "food">
            <h3 class = "mt-3">${food.strMeal}</h3>
            </div>
        </div>`;
        foodMainDiv.appendChild(foodDiv);
    });
};

const all =(foodId) =>{
    const url = `https:www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
        allFoodDetails(data.meals);
    })
}
function searchFood(){
    const searchValue = document.getElementById('input-field').value;
    const url = `https:www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
    
        getFood(data.meals);
    })
}


function allFoodDetails(collection){
    const foodDetails = document.getElementById('food-details');
    foodDetails.innerHTML ='';
    collection.forEach(detail=>{
       const insideDiv = document.createElement('div');
       insideDiv.className = 'col-md-8 mx-auto';
       insideDiv.innerHTML = `
       <img src="${detail.strMealThumb}">
       <h3>${detail.strMeal}</h3>
       
      
       `;
       foodDetails.appendChild(insideDiv);
    })
}