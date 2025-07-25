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
    // Create a new fieldset element
    let newFieldset = document.createElement("fieldset");
    newFieldset.className = "wurcom-units field-layout"

    // Create new div elements and append to new fieldset
    let newDiv1 = document.createElement("div");
    newFieldset.appendChild(newDiv1);
    let newDiv2 = document.createElement("div");
    newFieldset.appendChild(newDiv2);

    // Get all existing fieldset elements and add one to the count
    let fieldsets = document.querySelectorAll("fieldset");
    let lastFieldset = fieldsets[fieldsets.length - 1];
    let unitCount = fieldsets.length + 1;

    // Create a label and input for the new unit name
    let nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", `wurcom_unit_${unitCount}`);
    nameLabel.textContent = `Wur-Com Name #${unitCount} *: `;
    let nameInput = document.createElement("input");
    nameInput.id = `wurcom_unit_${unitCount}`;
    nameInput.type = "text";
    nameInput.name = `wurcom_unit_${unitCount}`;
    nameInput.required = true;

    // Create a label and input for the new unit serial number
    let serialLabel = document.createElement("label");
    serialLabel.setAttribute("for", `wurcom_serial_${unitCount}`);
    serialLabel.textContent =  ` Wur-Com Serial Number #${unitCount} *: `;
    let serialInput = document.createElement("input");
    serialInput.id = `wurcom_serial_${unitCount}`;
    serialInput.type = "text";
    serialInput.name = `wurcom_serial_${unitCount}`;
    serialInput.minLength = 8;
    serialInput.maxLength = 12;
    serialInput.required = true;

    // Append the label and input to the fieldset
    newDiv1.appendChild(nameLabel);
    newDiv1.appendChild(nameInput);
    newDiv2.appendChild(serialLabel);
    newDiv2.appendChild(serialInput);

    // Append the new fieldset to the form
    lastFieldset.insertAdjacentElement('afterend', newFieldset);
}

// Remove the last wurcom unit fieldset when button is clicked
function removeWurcomUnit() {
    let fieldsets = document.querySelectorAll("fieldset");
    if (fieldsets.length > 1) {
        fieldsets[fieldsets.length - 1].remove();
    }
}