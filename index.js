import { writeFileSync } from "fs";
import inquirer from "inquirer";
import dotenv from "dotenv"

import generateReadme from "./util/StudyMe.js";
import questions from "./util/questions.js";

// We need this to correctly access our process.env variables
dotenv.config();

// Write out the generated readme to a test file for dev
function saveReadme(readme) {
	// Saves to ./test/ in dev/test and to ./ in production
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
	.prompt(questions) // Ask the questions
	.then((answers) => { // Get the answers
		saveReadme(generateReadme(answers)); // Generate the readme content and save it out
	})	
	.catch((error) => {
		if (error.isTtyError) {
			console.errorlog("Prompt couldn't be rendered in the current environment");
		} else {
			console.error(error);
		}
	});
