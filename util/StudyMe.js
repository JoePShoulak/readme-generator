import {writeFileSync, readFileSync} from "fs";

// A Class to hold all our data and functions
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

    // Figure out which license path we should load from the user's choice
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

    // If the license requires a year and full name, add those in
    validateLicenseContent(content) {
        if (content.includes("[year]")) {
            const year = new Date().getFullYear();
            const fullname = this.readmeData.fullName;
            
            content = content.replace("[year]", year).replace("[fullname]", fullname)
        }

        return content;
    }

    // TODO: have a way to switch this for production
    // Save the license to the directory
    saveLicense(content) {
        writeFileSync('./TEST_LICENSE.txt', content, function (error) {
            if (error) {
                return console.log(error);
            }
            console.log("License successfully generated!");
            });
    }

    // Add the license file to our project
    addLicense() {
        let content = readFileSync(this.getLicense(this.readmeData.license)).toString();
        
        content = this.validateLicenseContent(content);

        this.saveLicense(content);

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
