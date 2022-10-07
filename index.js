import inquirer from "inquirer";
import dotenv from "dotenv"

import ReadMe from "./lib/ReadMe.js";
import questions from "./lib/questions.js";

// We need this to correctly access our process.env variables
dotenv.config();

// Our main function
async function init() {
	// By default we choose MIT License
	let response = {license: "MIT"};

	// TODO: Improve CLI arg support
	if (process.argv.length == 2) {
		response = await inquirer.prompt(questions);
	}

	// Generate and save the readme
	const readme = new ReadMe(response);
	readme.save();
}

// Make it all happen
init()