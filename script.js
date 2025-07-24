// Get the slider and output elements
let slider = document.getElementById("plan-slider");
let output = document.getElementById("plan-value");

// Set the initial value of the output element when the page is loaded
output.innerHTML = slider.value;

// Updated the output value whenever the slider value changes
slider.oninput = function() {
    output.innerHTML = this.value;
}

// Add another wurcom unit field set when button is clicked
function addWurcomUnit() {
    // Get the existing fieldset and create a new fieldset element
    let existingFieldset = document.querySelector("fieldset");
    let newFieldset = document.createElement("fieldset");
    
    // Create a label and input for the new unit name
    let nameLabel = document.createElement("label");
    nameLabel.textContent = "Wur-Com Name: ";
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "wurcom-unit";
    nameInput.required = true;

    // Create a label and input for the new unit serial number
    let serialLabel = document.createElement("label");
    serialLabel.textContent = " Wur-Com Serial Number: ";
    let serialInput = document.createElement("input");
    serialInput.type = "text";
    serialInput.name = "wurcom-serial";
    serialInput.minLength = 8;
    serialInput.maxLength = 12;
    serialInput.required = true;

    // Append the label and input to the fieldset
    newFieldset.appendChild(nameLabel);
    newFieldset.appendChild(nameInput);
    newFieldset.appendChild(serialLabel);
    newFieldset.appendChild(serialInput);

    // Append the new fieldset to the form
    existingFieldset.insertAdjacentElement('afterend', newFieldset);
}