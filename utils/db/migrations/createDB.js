const sqlite3 = require('sqlite3').verbose();
const { dbRunPromise } = require('../dbPromise');

const createDB = async function (dbPath) {
    const db = new sqlite3.Database(dbPath);

    await dbRunPromise(db, "CREATE TABLE modules (name TEXT, path TEXT)");
    await dbRunPromise(db, "CREATE TABLE packagefiles (forModule TEXT, fileText TEXT, originalHome TEXT)");
    await dbRunPromise(db, "CREATE TABLE dbVersion (version INT)");

    db.close();
}

module.exports = createDB;
