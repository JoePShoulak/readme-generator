import {readFileSync, writeFileSync} from "fs";

// License class
class License {
    constructor(readmeData) {
        this.readmeData = readmeData
        this.choice = this.readmeData.license;

        this.getTemplate();
        this.generateContent();
        this.getLink();
    }

    /* == CONSTRUCTOR HELPERS == */
    // Get the license template we need to populate
    getTemplate() {
        // TODO: This doesn't work in production
        let templateLocation = "./src/licenses/"
    
        switch (this.choice) {
            case "MIT":
                templateLocation += "mit.txt"
                break;
            case "ISC":
                templateLocation += "isc.txt"
                break;
            case "Apache License 2.0":
                templateLocation += "apache2.txt"
                break;
            case "GNU GPLv3":
                templateLocation += "gnu3.txt"
                break;
        }

        this.template = readFileSync(templateLocation).toString();
    }
    
    // Populate that content, if we need to
    generateContent() {
        this.content = this.template;
        
        if (this.content.includes("[year]")) {
            const year = new Date().getFullYear();
            const fullname = this.readmeData.fullName;
            
            this.content = this.content.replace("[year]", year).replace("[fullname]", fullname)
        }
    }
    
    // Create the link content for our license
    getLink() {
        const lincenseLinks = {
            "MIT": "https://choosealicense.com/licenses/mit/",
            "Apache License 2.0": "https://choosealicense.com/licenses/apache-2.0/",
            "GNU GPLv3": "https://choosealicense.com/licenses/gpl-3.0/",
            "ISC": "https://choosealicense.com/licenses/isc/",
        };
    
        this.link = `This project uses the [${this.choice} license](${lincenseLinks[this.choice]})`;
    }

    /* == MAIN FUNCTIONS == */
    // Save the License to a file
    save() {
        // Saves to ./test/ in dev/test and to ./ in production
        const fileName = process.env.STUDYME_ENVIRONMENT ? "./tests/mock/LICENSE.txt" : "./LICENSE.txt"
    
        writeFileSync(fileName, this.content);
    }
}

export default License;
