const logFunc = () => {
  console.log("working")
}
// get the value to create the number of fields
const No_of_inputs = document.querySelector("#inputmaker");
// make an area to play with
const calculationArea = document.querySelector(".calculationArea");
// make a place to get the answer btn and result
const resultArea = document.querySelector(".resultArea");
// get the btn to calculate
const equalsTo = document.querySelector("#equalsTo");
// show your result
const calResult = document.querySelector(".calResult");

// create a function to make input fields and operatos
const makeInputFields = () => {
  // get the value of the input field
  let input_number = No_of_inputs.value;
  //Create array of operators to be added
  const operators = ["+", "-", "*", "/"];

  // make input fields
  if (input_number > 06 || input_number <= 0) {
    alert("Unavailable");
  } else {
    // this will create multiple input fields
    if (document.getElementById("input_1")) {
      calculationArea.innerHTML = "";
      resultArea.classList.remove("active");
      resultArea.classList.add("inActive");
    } else {
      resultArea.classList.remove("inActive");
      resultArea.classList.add("active");
      for (let i = 0; i < input_number; i++) {
        let inputField = document.createElement("input");
        inputField.setAttribute("type", "text");
        inputField.setAttribute(`placeHolder`, `text area ${i + 1}`);
        inputField.setAttribute(`id`, `input_${i + 1}`);
        inputField.setAttribute(`class`, `input_Fields`);

        calculationArea.appendChild(inputField);
        if (i <= input_number - 2) {
          // Create and append select list
          var selectList = document.createElement("select");
          // selectList.id = "mySelect";
          selectList.setAttribute('class', 'input_Ops mySelect')
          calculationArea.appendChild(selectList);

          // Create and append the options
          for (let j = 0; j < operators.length; j++) {
            let option = document.createElement("option");
            option.value = operators[j];
            option.text = operators[j];
            selectList.appendChild(option);
          }
        }
      }
    }
  }
};
// this will get the values from the input fields that are created 
const getInputFields = () => {
  let question = '';
  const dataCollection = calculationArea.children
  for (let i = 0; i < dataCollection.length; i++) {
    question += dataCollection[i].value;
  }
  // calculate the values
  const result = Function("return " + question)()
  if(isNaN(result)){
    calResult.innerHTML = "You have to enter some numbers to see your Answer"
  }else
  if (result > 1000000) {
    calResult.innerHTML = result.toExponential(4);
  } else {
    calResult.innerHTML = Math.round((result + Number.EPSILON) * 100) / 100;

  }

}
// use the btn to bring your values
equalsTo.addEventListener("click", getInputFields)

