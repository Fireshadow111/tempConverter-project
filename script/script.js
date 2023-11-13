function convertTemp() {
    let fahrenheit = document.getElementById("fahrenheit").value;

    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5/9;

        alert(fahrenheit + " Fahrenheit converts to " + celsius.toFixed(2) + " Celsius.");
    } else {
        alert("Please enter a valid unit.");
    }
}