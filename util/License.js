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

    getTemplate() {
        let templateLocation = "./licenses/"
    
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
    
    generateContent() {
        this.content = this.template;
        
        if (this.content.includes("[year]")) {
            const year = new Date().getFullYear();
            const fullname = this.readmeData.fullName;
            
            this.content = this.content.replace("[year]", year).replace("[fullname]", fullname)
        }
    }

    save() {
        // Saves to ./test/ in dev/test and to ./ in production
        let fileName = process.env.STUDYME_ENVIRONMENT ? "./test/LICENSE.txt" : "./LICENSE.txt"
    
        writeFileSync(fileName, this.content, function (error) {
            if (error) {
                console.error(error);
                return;
            }
            
            console.log("License successfully generated!");
        });
    }

    getLink() {
        const lincenseLinks = {
            "MIT": "https://choosealicense.com/licenses/mit/",
            "Apache License 2.0": "https://choosealicense.com/licenses/apache-2.0/",
            "GNU GPLv3": "https://choosealicense.com/licenses/gpl-3.0/",
            "ISC": "https://choosealicense.com/licenses/isc/",
        };
    
        this.link = `This project uses the [${this.choice} license](${lincenseLinks[this.choice]})`;
    }
}

export default License;
