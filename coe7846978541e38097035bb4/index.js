/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/  
let convertBtn = document.getElementById("convert-btn")




convertBtn.addEventListener("click",function(){
    let units = {
        metric: ["meters","kilograms","liters"],
        imperial:["feet","pounds","gallons"],
    }
    let baseValue = document.getElementById("base-value").value
   let convertValue = ""
   let length = document.getElementById("length")
let mass = document.getElementById("mass")
let volume = document.getElementById("volume")
let result = 
    
    length.innerHTML = baseValue + " meters = " +(baseValue * 3.281).toFixed(3) + " feet | "+ baseValue + " feet = "+(baseValue * .3281).toFixed(3) + " meters"
    mass.innerHTML = baseValue + " kilograms = " + (baseValue * 2.204).toFixed(3) + " pounds | "+ baseValue + " pounds = " + (baseValue * .454).toFixed(3) + " kilograms"
    volume.innerHTML = baseValue + " liters = " + (baseValue * 0.264).toFixed(3) + " gallons | " + baseValue + " gallons = " + (baseValue * 2.64).toFixed(3) +" liters"
   
    
})