const { existsSync, readFileSync } = require('fs');

const getPackage = function (packageLocation) {
    if (!existsSync(packageLocation)) {
        throw new Error(`Sorry, there's no package.json here.`);
    }

    console.log(packageLocation)
    const packageText = readFileSync(packageLocation).toString();
    let packageObject;

    try {
        packageObject = JSON.parse(packageText);
    } catch (err) {
        console.log("Sorry, the package.json file isn't valid.")
    }

    return packageObject;
};

module.exports = getPackage;
