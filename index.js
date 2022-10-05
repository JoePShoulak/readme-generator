import inquirer from "inquirer";
import { writeFileSync } from "fs";
import dotenv from "dotenv"

import questions from "./util/questions.js";
import generateReadme from "./util/StudyMe.js";

dotenv.config();

// Write out the generated readme to a test file for dev
function saveReadme(readme) {
	let fileName = process.env.STUDYME_ENVIRONMENT ? "./test/README.md" : "./README.md"

	writeFileSync(fileName, readme, error => {
		if (error) {
			console.error(error);
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
