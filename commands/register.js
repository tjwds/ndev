const { join } = require('path');

const getPackage = require('../utils/getPackage');
const { dbGetPromise, dbRunPromise } = require('../utils/db/dbPromise');

const register = async function ({ db, name }) {
  const packageObj = getPackage(join(process.cwd(), 'package.json'));

  const packageName = packageObj.name;

  const extantRegistration = await dbGetPromise(db, `SELECT * from modules WHERE name = ?`, [packageName]);
  // is this name already registered?
  if (extantRegistration) {
      throw new Error(`Sorry, ${packageName} is already registered.`)
      // TODO If so, do you want to overwrite it?
  }

  await dbRunPromise(db, 'INSERT INTO modules (name, path) VALUES(?, ?)', [packageName, process.cwd()]);
  console.log(`Cool, ${packageName} has been registered!`);
};

module.exports = register;