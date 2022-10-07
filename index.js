import inquirer from "inquirer";
import dotenv from "dotenv"

import ReadMe from "./lib/ReadMe.js";
import questions from "./lib/questions.js";

// We need this to correctly access our process.env variables
dotenv.config();

async function getAnswers(questions) {
	return await inquirer.prompt(questions);
}

async function init() {
	let response = {license: "MIT"};

	// TODO: Improve CLI arg support
	if (process.argv.length == 2) {
		response = await getAnswers(questions);
	}

	const readme = new ReadMe(response);
	readme.save();
}

init()