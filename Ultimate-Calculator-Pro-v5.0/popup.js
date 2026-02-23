document.addEventListener("DOMContentLoaded", () => {

    // TAB SWITCH
    document.querySelectorAll(".tabBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tabContent").forEach(tab => {
                tab.style.display = "none";
            });
            document.getElementById(btn.dataset.tab).style.display = "block";
        });
    });

    // SCIENTIFIC BUTTONS
    const input = document.getElementById("searchBox");
    document.querySelectorAll("#scientific button[data-val]").forEach(btn => {
        btn.addEventListener("click", () => {
            input.value += btn.dataset.val;
        });
    });

    document.getElementById("equalBtn").addEventListener("click", () => {
        try {
            let expression = input.value
                .replace(/÷/g, "/")
                .replace(/×/g, "*");

            let result = math.evaluate(expression);
            document.getElementById("sciResult").innerText = "Result: " + result;
        } catch {
            document.getElementById("sciResult").innerText = "Error";
        }
    });

    document.getElementById("clearBtn").addEventListener("click", () => {
        input.value = "";
        document.getElementById("sciResult").innerText = "";
    });

    // AGE
    document.getElementById("calcAge").addEventListener("click", () => {
        let birth = new Date(document.getElementById("birthDate").value);
        let today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        document.getElementById("ageResult").innerText = age + " years old";
    });

    // LENGTH
    document.getElementById("convertLength").addEventListener("click", () => {
        let v = parseFloat(lengthInput.value);
        let meters = lengthFrom.value === "km" ? v*1000 :
                     lengthFrom.value === "cm" ? v/100 : v;
        let result = lengthTo.value === "km" ? meters/1000 :
                     lengthTo.value === "cm" ? meters*100 : meters;
        lengthResult.innerText = "Result: " + result;
    });

    // WEIGHT
    document.getElementById("convertWeight").addEventListener("click", () => {
        let v = parseFloat(weightInput.value);
        let kg = weightFrom.value === "g" ? v/1000 :
                 weightFrom.value === "lb" ? v*0.453592 : v;
        let result = weightTo.value === "g" ? kg*1000 :
                     weightTo.value === "lb" ? kg/0.453592 : kg;
        weightResult.innerText = "Result: " + result;
    });

    // SPEED
    document.getElementById("calcSpeed").addEventListener("click", () => {
        let speed = distance.value / time.value;
        speedResult.innerText = "Speed: " + speed + " km/h";
    });

    // BATTERY
    document.getElementById("calcBattery").addEventListener("click", () => {
        let hours = batteryWh.value / powerW.value;
        batteryResult.innerText = "Battery Life: " + hours.toFixed(2) + " hours";
    });

    // WAVE
    document.getElementById("calcWave").addEventListener("click", () => {
        let speed = frequency.value * wavelength.value;
        waveResult.innerText = "Wave Speed: " + speed + " m/s";
    });

});
