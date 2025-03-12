document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("color-box");
    const guessBtn = document.getElementById("guess-btn");
    const resultDiv = document.getElementById("result");
    let randomColor;

    function fetchRandomColor() {
        fetch("/random-color")
            .then(response => response.json())
            .then(data => {
                randomColor = data;
                colorBox.style.backgroundColor = `rgb(${randomColor.r}, ${randomColor.g}, ${randomColor.b})`;
            })
            .catch(error => console.error("Error fetching color:", error));
    }

    guessBtn.addEventListener("click", function() {
        const r = parseInt(document.getElementById("red-value").value);
        const g = parseInt(document.getElementById("green-value").value);
        const b = parseInt(document.getElementById("blue-value").value);

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            resultDiv.textContent = "Please enter valid numbers for RGB.";
            return;
        }

        const diff = Math.abs(randomColor.r - r) + Math.abs(randomColor.g - g) + Math.abs(randomColor.b - b);
        
        if (diff === 0) {
            resultDiv.textContent = "Correct! You guessed the color!";
        } else {
            resultDiv.textContent = `Close! Total difference is ${diff}.`;
        }
    });

    fetchRandomColor();
});