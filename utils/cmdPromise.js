const { spawn } = require("child_process");

const cmdPromise = function (command, args) {
    return new Promise(function (resolve, reject) {
        const spawnedCommand = spawn(command, args)

        spawnedCommand.stderr.on('data', (data) => {
            console.log(data.toString());
            throw new Error('TODO command failed');
        });
        spawnedCommand.stdout.on('data', (data) => resolve(data));

        spawnedCommand.on('close', () => resolve())
    })
}

module.exports = cmdPromise;
