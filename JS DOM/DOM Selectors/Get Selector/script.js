let inputFood = document.getElementById('input-food');
let inputBtn = document.getElementById('input-btn');
let response = document.getElementById('response');

inputBtn.addEventListener("click", () =>{
   response.innerText = inputFood.value;
});
