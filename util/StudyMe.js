import {readFileSync} from "fs";

import {getLicenseFile, validateLicenseContent, saveLicense, getLicenseLink} from "./licenseHelper.js"

// A Class to hold all our data and functions
class StudyMe {
    // Init
    constructor(readmeData) {
        // Grab the fullname to put as the author
        readmeData.author = readmeData.fullName;

        // If we got GitHub info, add license and last-commit badges
        if (readmeData.gh_username && readmeData.gh_repo_name) {
            readmeData.badges = `![License Badge](https://img.shields.io/github/license/${readmeData.gh_username}/${readmeData.gh_repo_name}) `
            readmeData.badges += `![License Badge](https://img.shields.io/github/last-commit/${readmeData.gh_username}/${readmeData.gh_repo_name})`
        }

        this.content = ""; // Set the content to blank so we can append
        this.readmeData = readmeData;

        return this; // Returning this each time lets us do .chain() notation
    }

    // Add a title header
    addTitle() {
        this.content += `# ${this.readmeData.title}\n`;

        return this;
    }

    // Add latest-commit and license badges to the project
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
        let content = readFileSync(getLicenseFile(this.readmeData.license)).toString();
        
        // Validate; if it requires year and fullname, populate those and save the file
        saveLicense(validateLicenseContent(content, this.readmeData));

        // Add info about the license to the README
        return this.addSection("License", getLicenseLink(this.readmeData.license));
    }
}

// Generate a readme from the data gotten from Inquirer
function generateReadme(readmeData) {
    return new StudyMe(readmeData)
        .addTitle()
        .addBadges()
        .addSection("Description")
        .addSection("Author")
        .addSection("Link")
        .addSection("Installation")
        .addSection("Usage")
        .addSection("Contribute")
        .addSection("Credits")
        .addSection("Features")
        .addSection("Tests")
        .addLicense()
        .content;
}

export default generateReadme;
