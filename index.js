import { writeFileSync } from "fs";
import inquirer from "inquirer";
import dotenv from "dotenv"

import ReadMe from "./util/ReadMe.js";
import questions from "./util/questions.js";

// We need this to correctly access our process.env variables
dotenv.config();

// We're using inquirer to grab our data
inquirer
	.prompt(questions) // Ask the questions
	.then((answers) => { // Get the answers
		let readme = new ReadMe(answers).generateContent(); // Generate the readme content and save it out
		readme.save();
	})	
	.catch((error) => {
		if (error.isTtyError) {
			console.errorlog("Prompt couldn't be rendered in the current environment");
		} else {
			console.error(error);
		}
	});
