const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const rankine = document.getElementById("rankine");

const inputs = document.getElementsByClassName("input");

for (let cont=0;cont<inputs.length;cont++) {let input = inputs[cont];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        switch (e.target.name) {
            case "celcius":
                fahrenheit.value = (value * 1.8) + 32;
                kelvin.value = value + 273;
                rankine.value = (value * 1.8) + 491.67
                break;
            case "fahrenheit":
                celcius.value = (value - 32) / 1.8;
                kelvin.value = ((value - 32) / 1.8) + 273;
                rankine.value = (value - 32) + 491.67;
                break;
            case "kelvin":
                celcius.value = value - 273;
                fahrenheit.value = ((value - 273) * 1.8) + 32;
                rankine.value = ((value - 273) * 1.8) + 491.67;
                break;
            case "rankine":
                celcius.value=(value - 491.67) / 1.8;
                fahrenheit.value=(value - 491.67) + 32;
                kelvin.value=((value-491.67)/1.8)+273;
                break;
        }
    });
}