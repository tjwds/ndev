const { join } = require('path');

// BEEEEESSSSSSSSS

const { dbGetPromise } = require('../utils/db/dbPromise');
const cmdPromise = require('../utils/cmdPromise');
const getPackage = require('../utils/getPackage');

const develop = async function ({ db, name }) {
  // TODO does it make sense for this to be a place to start developing?
    // TODO is there a version mismatch between cwd and registered module?
    // TODO check to make sure we're not doing a circular registration 😱

  // is the named module registered?
    const extantRegistration = await dbGetPromise(db, `SELECT * from modules WHERE name = ?`, [name]);
  if (!extantRegistration) {
      throw new Error(`Sorry, ${name} isn't registered.`)
  }

  const modulePath = extantRegistration.path;
  // TODO windows support
  const moduleName = modulePath.split('/').pop();

  // has that named module stopped being valid?
  getPackage(join(modulePath, 'package.json'));

  // symlink module and install it
  await cmdPromise('ln', ['-s', modulePath]);
  await cmdPromise('npm', ['install', join(process.cwd(), moduleName)]);

  // TODO add git precommit hook
}

module.exports = develop;
