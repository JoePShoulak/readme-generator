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

    // TODO: Make this function
    addLicense(license) {
        // this.content += 
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
        .addTitle(readmeData.title)
        .addSection("Description", readmeData.description)
        .addSection("Installation", readmeData.installation)
        .addSection("Usage", readmeData.usage)
        .addSection("Contribute", readmeData.contribute)
        .addSection("Features", readmeData.features)
        .addSection("Tests", readmeData.tests)
        .addSection("License", readmeData.license)
        // TODO: Add the license (https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
        .addLicense()
        // TODO: Add badges (https://shields.io/)
        .addBadge()
        .content;
}

export default generateReadme;
