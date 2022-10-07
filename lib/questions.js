// The questions we're asking the user to define the readme
const todo = "TODO: Fill in this content";

const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
        default: todo
    },
    {
        name: "fullName",
        type: "input",
        message: "Enter your full name:",
        default: todo
    },
    {
        name: "gh_username",
        type: "input",
        message: "Enter your GitHub username:",
    },
    {
        name: "gh_repo_name",
        type: "input",
        message: "Enter your GitHub Repo name:",
    },
    {
        name: "description",
        type: "input",
        message: "Describe your project:",
        default: todo
    },
    {
        name: "deployment",
        type: "input",
        message: "Enter your deployment link:",
        default: todo
    },
    {
        name: "dependencies",
        type: "input",
        message: "List your dependencies:",
        default: todo
    },
    {
        name: "installation",
        type: "input",
        message: "Describe your installation process:",
        default: todo
    },
    {
        name: "usage",
        type: "input",
        message: "Describe how to use your project:",
        default: todo
    },
    {
        name: "contribute",
        editor: "input",
        message: "How can users contribute to your project?",
        default: todo
    },
    {
        name: "features",
        type: "input",
        message: "List the features of your project:",
        default: todo
    },
    {
        name: "tests",
        type: "input",
        message: "List the tests users can run with your project.",
        default: todo
    },
    {
        name: "credits",
        type: "input",
        message: "List what helped you make this project:",
        default: todo
    },
    {
        name: "license",
        type: "list",
        message: "Choose a license:",
        choices: [
            "MIT",
            "Apache License 2.0",
            "GNU GPLv3",
            "ISC",
        ]
    },  
  ]

  export default questions;
