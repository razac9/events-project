let aquaButton = document.getElementById("aqua");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let purpleButton = document.getElementById("purple");
let colorlessButton = document.getElementById("colorless");

let colorDisplay = document.querySelector("div");

aquaButton.addEventListener("click", function(){
    colorDisplay.style.backgroundColor = aquaButton.innerHTML;
    colorDisplay.innerHTML = aquaButton.innerHTML;
})

tealButton.addEventListener("click", function(){
    colorDisplay.style.backgroundColor = tealButton.innerHTML;
    colorDisplay.innerHTML = tealButton.innerHTML;
})

pinkButton.addEventListener("click", function(){
    colorDisplay.style.backgroundColor = pinkButton.innerHTML;
    colorDisplay.innerHTML = pinkButton.innerHTML;
})

purpleButton.addEventListener("click", function(){
    colorDisplay.style.backgroundColor = purpleButton.innerHTML;
    colorDisplay.innerHTML = purpleButton.innerHTML;
})

colorlessButton.addEventListener("click", function(){
    colorDisplay.style.backgroundColor = "white";
    colorDisplay.innerHTML = colorlessButton.innerHTML;
})

let visibleButton = document.getElementById("visibility");

visibleButton.addEventListener("click", function(){
    if (colorDisplay.style.display != "none"){
        colorDisplay.style.display = "none";
        visibleButton.innerHTML = "show";
    }
    else{
        colorDisplay.style.display = "flex";
        visibleButton.innerHTML = "hide"
    }

})