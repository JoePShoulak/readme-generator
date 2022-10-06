import ReadMe from "../util/ReadMe.js";

describe("Readme.generate", () => {
    describe("When given all good data", () => {
        const input = {
            "title": "This is a title",
            "fullName": "Joe P Shoulak",
            "gh_username": "joepshoulak",
            "gh_repo_name": "studyme",
            "description": "Generate a README so good, your users will want to study it!",
            "deployment": "Filler deployment data",
            "dependencies": "node, npm",
            "installation": "git clone https://github.com/JoePShoulak/studyme.git && cd studyme && npm i",
            "usage": "node index",
            "contribute": "Filler contribute data",
            "features": "README creation, LICENSE creation",
            "tests": "Filler tests data",
            "credits": "Inquirer",
            "license": "MIT"
        };
        
        let readme = new ReadMe(input).generate();
        const output = readme.content;
        
        // Title
        test("it should contain the title section", () => {
            expect(output).toContain(`# ${input.title}\n`);
        })

        // Badge
        test("it should generate the badges", () => {
            let badgeString = `![License Badge](https://img.shields.io/github/license/${input.gh_username}/${input.gh_repo_name}) `
            badgeString += `![License Badge](https://img.shields.io/github/last-commit/${input.gh_username}/${input.gh_repo_name})`

            expect(output).toContain(badgeString);
        })

        // Sections
        test("it should contain the description section", () => {
            expect(output).toContain(`\n## Description\n${input.description}\n`);
        })
        
        test("it should contain the author section", () => {
            expect(output).toContain(`\n## Author\n${input.fullName}\n`);
        })
        
        test("it should contain the deployment section", () => {
            expect(output).toContain(`\n## Deployment\n${input.deployment}\n`);
        })
        
        test("it should contain the dependencies section", () => {
            expect(output).toContain(`\n## Dependencies\n${input.dependencies}\n`);
        })
        
        test("it should contain the installation section", () => {
            expect(output).toContain(`\n## Installation\n${input.installation}\n`);
        })
        
        test("it should contain the usage section", () => {
            expect(output).toContain(`\n## Usage\n${input.usage}\n`);
        })
        
        test("it should contain the contribute section", () => {
            expect(output).toContain(`\n## Contribute\n${input.contribute}\n`);
        })
        
        test("it should contain the credits section", () => {
            expect(output).toContain(`\n## Credits\n${input.credits}\n`);
        })
        
        test("it should contain the features section", () => {
            expect(output).toContain(`\n## Features\n${input.features}\n`);
        })
        
        test("it should contain the tests section", () => {
            expect(output).toContain(`\n## Tests\n${input.tests}\n`);
        })
    
    })
    
})