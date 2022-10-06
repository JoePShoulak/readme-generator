import {readFileSync, writeFileSync} from "fs";

class License {
    constructor(readmeData) {
        this.readmeData = readmeData
        this.choice = this.readmeData.license;
        this.templateContent = readFileSync(this.getTemplateLocation()).toString();
        this.licenseContent = this.validate();
        this.link = this.getLink();
    }

    getTemplateLocation() {
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

        return templateLocation;
    }
    
    validate() {
        let content = this.templateContent;
        
        if (content.includes("[year]")) {
            const year = new Date().getFullYear();
            const fullname = this.readmeData.fullName;
            
            content = content.replace("[year]", year).replace("[fullname]", fullname)
        }
        
        return content;
    }

    save() {
        // Saves to ./test/ in dev/test and to ./ in production
        let fileName = process.env.STUDYME_ENVIRONMENT ? "./test/LICENSE.txt" : "./LICENSE.txt"
    
        writeFileSync(fileName, this.licenseContent, function (error) {
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
    
        return `This project uses the [${this.choice} license](${lincenseLinks[this.choice]})`;
    }
}

// Get a link to be able to inform the users of our license terms
// Figure out which license path we should load from the user's choice
// function getLicenseFile(license) {
//         let templateLocation = "./licenses/"
    
//         switch (license) {
//             case "MIT":
//                 templateLocation += "mit.txt"
//                 break;
//             case "ISC":
//                 templateLocation += "isc.txt"
//                 break;
//             case "Apache License 2.0":
//                 templateLocation += "apache2.txt"
//                 break;
//             case "GNU GPLv3":
//                 templateLocation += "gnu3.txt"
//                 break;
//         }

//         return templateLocation;
//     }

// If the license requires a year and full name, add those in

// Save the license to the directory

export default License;
