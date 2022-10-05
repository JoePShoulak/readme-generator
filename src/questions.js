const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
    },
    {
        name: "description",
        type: "input",
        message: "Describe your project:",
        default: "TODO: Add a description"
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
        type: "editor",
        message: "List the features of your project:",
        default: "TODO: Add a list of features."
    },
    {
        name: "tests",
        type: "editor",
        message: "List the tests users can run with your project.",
        default: "TODO: Add a list of tests users can run."
    },
    {
        name: "license",
        type: "list",
        message: "Choose a license:",
        choices: [
            "MIT",
            "Apache License 2.0",
            "GNU GPLv2",
            "GNU GPLv3",
            "ISC",
        ]
    },
  ]

  export default questions;