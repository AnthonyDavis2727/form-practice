// Get the slider and output elements
let slider = document.getElementById("plan-slider");
let output = document.getElementById("plan-value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}