// The questions we're asking the user to define the readme
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
        default: "TODO: Add a title."
    },
    {
        name: "fullName",
        type: "input",
        message: "Enter your full name:",
        default: "TODO: Put in your name."
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
        default: "TODO: Add a description."
    },
    {
        name: "deployment",
        type: "input",
        message: "Enter your deployment link:",
        default: "TODO: Add a deployment link."
    },
    {
        name: "dependencies",
        type: "input",
        message: "List your dependencies:",
        default: "TODO: Add dependencies list."
    },
    {
        name: "installation",
        type: "input",
        message: "Describe your installation process:",
        default: "TODO: Add installation instructions."
    },
    {
        name: "usage",
        type: "input",
        message: "Describe how to use your project:",
        default: "TODO: Add usage instructions."
    },
    {
        name: "contribute",
        editor: "input",
        message: "How can users contribute to your project?",
        default: "TODO: Add contribution instructions."
    },
    {
        name: "features",
        type: "input",
        message: "List the features of your project:",
        default: "TODO: Add a list of features."
    },
    {
        name: "tests",
        type: "input",
        message: "List the tests users can run with your project.",
        default: "TODO: Add a list of tests users can run."
    },
    {
        name: "credits",
        type: "input",
        message: "List what helped you make this project:",
        default: "TODO: Add project credits."
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
