import inquirer from "inquirer";
import { writeFileSync } from "fs";

import questions from "./util/questions.js";
import generateReadme from "./util/StudyMe.js";

// Write out the generated readme to a test file for dev
// TODO: have a way to switch this for production
function saveReadme(readme) {
	writeFileSync("./TEST_README.md", readme, error => {
		if (error) {
			console.error(error)
			return;
		}
		console.log("Readme successfully generated!")
	})
}

// We're using inquirer to grab our data
inquirer
	.prompt(questions)
	.then((answers) => {
		saveReadme(generateReadme(answers));
	})	
	.catch((error) => {
		if (error.isTtyError) {
			console.log("Prompt couldn't be rendered in the current environment");
		} else {
			console.log(error);
		}
	});
