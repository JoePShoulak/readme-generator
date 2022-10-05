import {writeFileSync} from "fs";

// Figure out which license path we should load from the user's choice
function getLicense(license) {
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
function validateLicenseContent(content, readmeData) {
    if (content.includes("[year]")) {
        const year = new Date().getFullYear();
        const fullname = readmeData.fullName;
        
        content = content.replace("[year]", year).replace("[fullname]", fullname)
    }
    
    return content;
}

// TODO: have a way to switch this for production
// Save the license to the directory
function saveLicense(content) {
    writeFileSync('./TEST_LICENSE.txt', content, function (error) {
        if (error) {
            return console.log(error);
        }
        console.log("License successfully generated!");
    });
}

const _getLicense = getLicense;
export { _getLicense as getLicense };
const _validateLicenseContent = validateLicenseContent;
export { _validateLicenseContent as validateLicenseContent };
const _saveLicense = saveLicense;
export { _saveLicense as saveLicense };
