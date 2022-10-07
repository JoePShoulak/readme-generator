import {writeFileSync} from "fs";

import License from "./License.js"

// A Class to hold all our data and functions
class ReadMe {
    // Init
    constructor(readmeData) {
        // Grab the fullname to put as the author
        readmeData.author = readmeData.fullName;

        // If we got GitHub info, add license and last-commit badges
        if (readmeData.gh_username && readmeData.gh_repo_name) {
            readmeData.badges = `![License Badge](https://img.shields.io/github/license/${readmeData.gh_username}/${readmeData.gh_repo_name}) `
            readmeData.badges += `![License Badge](https://img.shields.io/github/last-commit/${readmeData.gh_username}/${readmeData.gh_repo_name})`
        }

        this.content = ""

        this.readmeData = readmeData;

        this.sections = ["Description", "Author", "Deployment", "Dependencies", "Installation", "Usage", "Contribute", "Credits", "Features", "Tests"];
        this.tableOfContents = this.generateTableOfContents();

        this.generateContent();

        return this; // Returning this each time lets us do .chain() notation
    }

    /* == CONSTRUCTOR HELPERS == */
    // Generate the table of contents
    generateTableOfContents() {
        let content = ""

        for (let section of this.sections) {
            content += `- [${section}](#${section.toLowerCase()})\n`
        }

        // There's one extra new line if we don't slice here
        return content.slice(0,-1);
    }
    
    // Generate the readme
    generateContent() {
        this
            .addTitle()
            .addBadges()
            .addSection("Table of Contents", this.tableOfContents)

        for (let section of this.sections) {
            this.addSection(section);
        }

        this.addLicense()

        return this
    }

    /* == MAIN FUNCTIONS == */
    // Add a title header
    addTitle() {
        this.content += `# ${this.readmeData.title}\n`;

        return this;
    }

    // Add latest-commit and license badges to the project
    // TODO: This should eventually be optional and customizable
    addBadges() {
        // If we have badge data, append that to the content; otherwise add a TODO for it
        this.content += this.readmeData.badges ? this.readmeData.badges + "\n" : "TODO: Add some nice badges!\n";

        return this;
    }

    // Add content without a header
    addContent(text) {
        this.content += `${text}\n`;

        return this;
    }

    // Add a section header with an optional body
    addSection(text, body=null) {
        this.content += `\n## ${text}\n`;

        // If a body was passed, use it; otherwise greab it from the readmeData object
        body = body ? body : this.readmeData[text.toLowerCase()];
        this.addContent(body);

        return this;
    }

    // Add the license file to our project
    addLicense() {
        // Grab the relevant license content
        let license = new License(this.readmeData)
        license.save()

        // Add info about the license to the README
        return this.addSection("License", license.link);
    }

    // Save out the file
    save() {
        let fileName = process.env.STUDYME_ENVIRONMENT ? "./tests/mock/README.md" : "./README.md"

        writeFileSync(fileName, this.content, error => {
            if (error) {
                console.error(error);
                return;
            }
    
            console.log("Readme successfully generated!")
        })
    }
}

export default ReadMe;
