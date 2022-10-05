import {writeFileSync} from "fs";

// Figure out which license path we should load from the user's choice
function getLicense(license) {
        let templateLocation = "./licenses/"
    
        switch (license) {
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

// If the license requires a year and full name, add those in
function validateLicenseContent(content, readmeData) {
    if (content.includes("[year]")) {
        const year = new Date().getFullYear();
        const fullname = readmeData.fullName;
        
        content = content.replace("[year]", year).replace("[fullname]", fullname)
    }
    
    return content;
}

// Save the license to the directory
function saveLicense(content) {
    let fileName = process.env.STUDYME_ENVIRONMENT ? "./test/LICENSE.txt" : "./LICENSE.txt"

    writeFileSync(fileName, content, function (error) {
        if (error) {
            console.log(error);
            return;
        }
        console.log("License successfully generated!");
    });
}

// TODO: Fix this nonsense
const _getLicense = getLicense;
export { _getLicense as getLicense };
const _validateLicenseContent = validateLicenseContent;
export { _validateLicenseContent as validateLicenseContent };
const _saveLicense = saveLicense;
export { _saveLicense as saveLicense };
