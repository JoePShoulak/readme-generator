import {writeFileSync, readFileSync} from "fs";

// A Class to hold all our data and functions
class Markdown {
    // Init
    constructor() {
        this.content = "";
        return this;
    }

    // Add a title header
    addTitle(text) {
        this.content += `# ${text}\n`;
        return this;
    }

    // Add a section header with an optional body
    addSection(text, body=null) {
        this.content += `## ${text}\n`;
        if (body) {this.addContent(body);}
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
            case "Apache License 2.0":
                templateLocation = "./licenses/apache2.txt"
                break;
            case "GNU GPLv3":
                templateLocation = "./licenses/gnu3.txt"
                break;
            case "ISC":
                templateLocation = "./licenses/isc.txt"
                break;
        }

        return templateLocation;
    }

    saveLicense(content) {
        writeFileSync('./LICENSE.txt', content, function (err,data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
            });
    }

    addLicense(license) {
        let content = readFileSync(this.getLicense(license)).toString();
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
    return new Markdown()
        // TODO: Double check the formatting and styling of this for polish
        .addTitle(readmeData.title)

        .addSection("Description", readmeData.description)
        .addSection("Installation", readmeData.installation)
        .addSection("Usage", readmeData.usage)
        .addSection("Contribute", readmeData.contribute)
        .addSection("Features", readmeData.features)
        .addSection("Tests", readmeData.tests)
        .addSection("License", readmeData.license)

        .addLicense(readmeData.license)
        // TODO: Add badges (https://shields.io/)
        .addBadge()
        .content;
}

export default generateReadme;
