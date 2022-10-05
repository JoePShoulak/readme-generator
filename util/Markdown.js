import inquirer from "inquirer";

import {writeFileSync, readFileSync} from "fs";

// A Class to hold all our data and functions
class Markdown {
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

    getLicense(license) {
        let templateLocation = ""
        
        switch (license) {
            case "MIT":
                templateLocation = "./licenses/mit.txt"
                break;
            case "ISC":
                templateLocation = "./licenses/isc.txt"
                break;
            case "Apache License 2.0":
                templateLocation = "./licenses/apache2.txt"
                break;
            case "GNU GPLv3":
                templateLocation = "./licenses/gnu3.txt"
                break;
        }

        return templateLocation;
    }

    saveLicense(content) {
        writeFileSync('./TEST_LICENSE.txt', content, function (err,data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
            });
    }

    validateLicenseContent(content) {
        if (content.includes("[year]")) {
            const year = new Date().getFullYear();
            const fullname = this.readmeData.fullName;
            
            content = content.replace("[year]", year).replace("[fullname]", fullname)
        }

        return content;
    }

    addLicense() {
        let content = readFileSync(this.getLicense(this.readmeData.license)).toString();
        
        content = this.validateLicenseContent(content);

        this.saveLicense(content);

        return this;
    }

    // TODO: Make this function
    addBadge(badge) {
        // this.content += 
        return this;
    }
}

// Generate a readme from the data gotten from Inquirer
function generateReadme(readmeData) {
    return new Markdown(readmeData)
        // TODO: Double check the formatting and styling of this for polish
        .addTitle()

        .addSection("Description")
        .addSection("Installation")
        .addSection("Usage")
        .addSection("Contribute")
        .addSection("Features")
        .addSection("Tests")
        .addSection("License")

        .addLicense()
        // TODO: Add badges (https://shields.io/)
        .addBadge()
        .content;
}

export default generateReadme;
