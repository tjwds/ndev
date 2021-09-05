const dbPromise = function (type, db, statement, ...statementArgs) {
    return new Promise(function (resolve) {
        db.serialize(function() {
            db[type](statement, ...statementArgs, function (error, row) {
                if (error) {
                    console.log(error);
                    throw new Error("whoops TODO")
                }
                console.log('done', statement)
                resolve(row);
            })
        });
    });
}

const dbGetPromise = function (db, statement, ...statementArgs) {
    return dbPromise('get', db, statement, ...statementArgs);
};

const dbRunPromise = function (db, statement, ...statementArgs) {
    return dbPromise('run', db, statement, ...statementArgs);
};

module.exports = { dbGetPromise, dbRunPromise };
