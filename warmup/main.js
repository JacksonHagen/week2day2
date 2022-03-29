let waterCooler = {
    color: "black",
    brand: "Treasure Valley Coffee",
    temps: 3,
    isEmpty: false,
    usesUntilEmpty: 10,
    
    refill: function() {
        this.usesUntilEmpty = 10;
        draw();
    },

    use: function(){
        this.usesUntilEmpty--;
        draw();
    }
};

let empty = "";

if(!waterCooler.isEmpty){
    empty = "not";
}

function draw() {
    document.getElementById("uses-until-empty").innerText = waterCooler.usesUntilEmpty;
}

let coolerThanYou = `The water cooler is ${waterCooler.color}. It is a service provided by ${waterCooler.brand}. It has ${waterCooler.temps} different options for the temperature of the water being dispensed. The water cooler is ${empty} empty.`;
console.log(coolerThanYou);