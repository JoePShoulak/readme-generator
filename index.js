import inquirer from "inquirer";
import { writeFileSync } from "fs";

import questions from "./util/questions.js";
import generateReadme from "./util/Markdown.js";

// Write out the generated readme to a test file for dev
// TODO: have a way to switch this for production
function saveReadme(readme) {
	writeFileSync("./TEST_README.md", readme, err => {
		if (err) {
			// TODO: implement some more polished error handling
			console.error(err)
			return;
		}
		console.log("Readme successfully generated!")
	})
}

// We're using inquirer to grab our data
inquirer
	.prompt(questions)
	// TODO: Add conditional questions, like name and year for licenses that require them or relevant badges (https://github.com/SBoudrias/Inquirer.js#reactive)
	.then((answers) => { saveReadme(generateReadme(answers)); })	
	.catch((error) => {
		// TODO: implement some more polished error handling
		if (error.isTtyError) {
			console.log("Prompt couldn't be rendered in the current environment");
		} else {
			console.log(error);
		}
	});
