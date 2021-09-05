const { existsSync, mkdirSync } = require('fs');
const os = require('os');
const { join } = require('path');
const sqlite3 = require('sqlite3').verbose();

const createDB = require('./migrations/createDB');

const homedir = os.homedir();
const ndevDir = join(homedir, '.ndev');
const dbPath = join(ndevDir, 'db.sqlite');

const checkAndReturnDb = async function () {
    // do we have an .ndev directory?
    if (!existsSync(ndevDir)) {
        mkdirSync(ndevDir);
    }
    // do we have a db?
    if (!existsSync(dbPath)) {
        // if not, just run the first migration.
        await createDB(dbPath);
    }

    // open db and return it
    const db = new sqlite3.Database(dbPath);
    return db;
}

const invokeDb = function () {
    return checkAndReturnDb();
}

module.exports = invokeDb;
