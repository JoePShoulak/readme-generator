import {readFileSync} from "fs";

import {getLicense, validateLicenseContent, saveLicense, getLicenseInfo} from "./licenseHelper.js"

// A Class to hold all our data and functions
class StudyMe {
    // Init
    constructor(readmeData) {
        readmeData.author = readmeData.fullName;

        if (readmeData.gh_username && readmeData.gh_repo_name) {
            readmeData.badges = `![License Badge](https://img.shields.io/github/license/${readmeData.gh_username}/${readmeData.gh_repo_name}) `
            readmeData.badges += `![License Badge](https://img.shields.io/github/last-commit/${readmeData.gh_username}/${readmeData.gh_repo_name})`
        }

        this.content = "";
        this.readmeData = readmeData;
        return this;
    }

    // Add a title header
    addTitle() {
        this.content += `# ${this.readmeData.title}\n`;
        return this;
    }

    // Add a section header with an optional body
    addSection(text, body=null) {
        this.content += `## ${text}\n`;
        body = body ? body : this.readmeData[text.toLowerCase()];
        this.addContent(body);
        return this;
    }

    // Add content without a header
    addContent(text) {
        this.content += `${text}\n`;
        return this;
    }

    // Add the license file to our project
    addLicense() {
        // Grab the relevant license content
        let content = readFileSync(getLicense(this.readmeData.license)).toString();
        
        // Validate that if it requires year and fullname, populate those and save the file
        saveLicense(validateLicenseContent(content, this.readmeData));

        // Add info about the license to the README
        return this.addSection("License", getLicenseInfo(this.readmeData.license));
    }

    // Add latest-commit and license badges to the project
    addBadges() {
        this.content += this.readmeData.badges ? this.readmeData.badges + "\n" : "TODO: Add some nice badges!\n";

        return this;
    }
}

// Generate a readme from the data gotten from Inquirer
function generateReadme(readmeData) {
    return new StudyMe(readmeData)
        // TODO: Double check the formatting and styling of this for polish
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
