// The questions we're asking the user to define the readme
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
        default: "TODO: Add a title."
    },
    // TODO: We're only using this conditionally, let's find a way to use it by default  
    {
        name: "fullName",
        type: "input",
        message: "Enter your full name:",
        default: "TODO: Put in your name."
    },
    {
        name: "description",
        type: "input",
        message: "Describe your project:",
        default: "TODO: Add a description."
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
