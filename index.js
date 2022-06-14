
var selectedfood=null;


document.getElementById("submit").onclick = function(){
    var portion = document.getElementById("portion").value
    var calories = document.getElementById("calories")
    var fat = document.getElementById("fat")
    var protein = document.getElementById("protein")
    var carbs = document.getElementById("carbs")
    var sodium = document.getElementById("sodium")
    var nutrition = document.getElementsByClassName("nutrition")

    calories.textContent = ''
    fat.textContent = ''
    protein.textContent = ''
    carbs.textContent = ''
    sodium.textContent = ''
    if (selectedfood == null){
        calories.insertAdjacentText('beforeend',"Please Select A Food")
        nutrition.style.borderColor = "red";
    }
    else if(selectedfood == 0){
        calories.insertAdjacentText('beforeend',"Calories = "+Math.round(portion*3.05)+"cal\n")
        fat.insertAdjacentText('beforeend',"Fat = "+Math.round(portion*0.14)+"gr\n")
        protein.insertAdjacentText('beforeend',"Protein = "+Math.round(portion*0.17)+"gr\n")
        carbs.insertAdjacentText('beforeend',"Carbohydrate = "+Math.round(portion*0.24)+"gr\n")
        sodium.insertAdjacentText('beforeend',"Sodium = "+Math.round(portion*4.14)+"mg\n")

        
    }
    if(selectedfood == 1){
        calories.insertAdjacentText('beforeend',"Calories ="+Math.round(portion*2.55)+"cal\n")
        fat.insertAdjacentText('beforeend',"Fat ="+Math.round(portion*0.1)+"gr\n")
        protein.insertAdjacentText('beforeend',"Protein ="+Math.round(portion*0.11)+"gr\n")
        carbs.insertAdjacentText('beforeend',"Carbohydrate ="+Math.round(portion*0.33)+"gr\n")
        sodium.insertAdjacentText('beforeend',"Sodium = "+Math.round(portion*5.98)+"mg\n")

    }
    if(selectedfood == 2){
        calories.insertAdjacentText('beforeend',"Calories ="+Math.round(portion*1.31)+"cal\n")
        fat.insertAdjacentText('beforeend',"Fat ="+Math.round(portion*0.011)+"gr\n")
        protein.insertAdjacentText('beforeend',"Protein ="+Math.round(portion*0.05)+"gr\n")
        carbs.insertAdjacentText('beforeend',"Carbohydrate ="+Math.round(portion*0.25)+"gr\n")
        sodium.insertAdjacentText('beforeend',"Sodium = "+Math.round(portion*0.06)+"mg\n")

    }
    if(selectedfood == 3){
      calories.insertAdjacentText('beforeend',"Calories ="+Math.round(portion*2.05)+"cal\n")
      fat.insertAdjacentText('beforeend',"Fat ="+Math.round(portion*0.12)+"gr\n")
      protein.insertAdjacentText('beforeend',"Protein ="+Math.round(portion*0.22)+"gr\n")
      carbs.insertAdjacentText('beforeend',"Carbohydrate ="+Math.round(portion*0)+"gr\n")
      sodium.insertAdjacentText('beforeend',"Sodium = "+Math.round(portion*0.61)+"mg\n")

  }
}
document.getElementById("button1").onclick = function(){
    
    selectedfood=0
    document.getElementById("dropbtn").textContent = "Burger"
}
document.getElementById("button2").onclick = function(){
    selectedfood=1
    document.getElementById("dropbtn").textContent = "Pizza"
}
document.getElementById("button3").onclick = function(){
    selectedfood=2
    document.getElementById("dropbtn").textContent = "Pasta"
}
document.getElementById("button4").onclick = function(){
  selectedfood=3
  document.getElementById("dropbtn").textContent = "Fish"
}







































function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }









  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }