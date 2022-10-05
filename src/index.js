import inquirer from "inquirer";
import questions from "./questions.js";

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn"t be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });