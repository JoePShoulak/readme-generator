import {readFileSync} from "fs";
import {getLicense, validateLicenseContent, saveLicense} from "./licenseHelper.js"

// A Class to hold all our data and functions
// TODO: Add deployed link and screenshot
class StudyMe {
    // Init
    constructor(readmeData) {
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
    addSection(text) {
        this.content += `## ${text}\n`;
        this.addContent(this.readmeData[text.toLowerCase()]);
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
        // TODO: be more descriptive about the license
        return this.addSection("License");
    }

    // TODO: Make this function
    addBadge(badge) {
        // this.content += 
        return this;
    }
}

// Generate a readme from the data gotten from Inquirer
function generateReadme(readmeData) {
    return new StudyMe(readmeData)
        // TODO: Double check the formatting and styling of this for polish
        .addTitle()

        .addSection("Description")
        .addSection("Link")
        .addSection("Installation")
        .addSection("Usage")
        .addSection("Contribute")
        .addSection("Credits")
        .addSection("Features")
        .addSection("Tests")

        .addLicense()

        // TODO: Add badges (https://shields.io/)
        .addBadge()
        .content;
}

export default generateReadme;
