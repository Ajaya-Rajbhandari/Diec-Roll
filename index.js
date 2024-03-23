function addOption() {
  const optionForm = document.getElementById("option-form");
  const newOption = document.createElement("div");

  const existingOptions = optionForm.querySelectorAll('input[name="option[]"]');
  const optionNumber = existingOptions.length + 1;

  const label = document.createElement("label");
  label.setAttribute("for", `label${optionNumber}`);
  label.textContent = `Option ${optionNumber}: `;

  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.name = "option[]";
  inputField.id = `label${optionNumber}`;
  inputField.required = true;
  inputField.className = "option-created";

  label.appendChild(inputField);
  newOption.appendChild(label);

  const removeButton = createRemoveButton(`remove${optionNumber}`);
  removeButton.addEventListener("click", () => {
    optionForm.removeChild(newOption);
  });

  label.appendChild(removeButton);
  optionForm.insertBefore(newOption, optionForm.lastElementChild.nextSibling);
}

const createRemoveButton = (buttonId) => {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-danger");
  btn.type = "button";
  btn.textContent = "✕";
  btn.value = buttonId;
  return btn;
};

function rollDice() {
  const options = document.querySelectorAll('input[name="option[]"]');

  if (options.length === 0) {
    alert("Please add options before rolling the dice.");
    return;
  }

  const randomNumber = Math.floor(Math.random() * options.length) + 1;
  const chosenOption = options[randomNumber - 1].value;
  document.getElementById("result").textContent = `You chose: ${chosenOption}`;
}
// function addOption() {
//   const optionForm = document.getElementById("option-form");
//   const newOption = document.createElement("div");

//   const existingOptions = optionForm.querySelectorAll('input[name="option[]"]');
//   let optionNumber = existingOptions.length + 1;
//   // Create label for the input field and set its id to "label" plus the  number of options
//   const label = document.createElement("label");
//   label.setAttribute("for", "label" + optionNumber);
//   label.innerHTML = "Option " + optionNumber + " :";

//   //Create an <input> element, set its type to "text" and name to "option[]". The value is predefined to "New Option", and its id is
//   const inputField = document.createElement("input");
//   inputField.type = "text";
//   inputField.name = "option[]";
//   inputField.id = "label" + optionNumber;
//   inputField.required = true;
//   inputField.className = "option-created";
//   label.appendChild(inputField);
//   newOption.appendChild(label);

//   const removeButton = createRemoveButton("remove" + optionNumber);
//   removeButton.addEventListener("click", function () {
//     optionForm.removeChild(newOption);
//   });
//   label.appendChild(removeButton);

//   // Append the newly created label to the form.
//   optionForm.insertBefore(newOption, optionForm.lastElementChild.nextSibling);
// }

// /**
//  * Creates a button used to delete an item from a list.
//  */
// const createRemoveButton = (buttonId) => {
//   const btn = document.createElement("button");
//   btn.classList.add("btn", "btn-danger");
//   btn.type = "button";
//   btn.innerText = "\u274C";
//   btn.value = buttonId;
//   return btn;
// };

// function rollDice() {
//   const option = document.querySelectorAll('input[name="option[]"]');
//   const randomNumber = Math.floor(Math.random() * option.length) + 1;
//   const choseOption = option[randomNumber - 1].value;
//   document.getElementById("result").textContent = `You choose: ${choseOption}`;
// }
