const getCommandArgs = function () {
    const argv = process.argv;
    const argvLength = argv.length;
    if (argvLength < 2 || argvLength > 4) {
        throw new Error('Please provide a command name.');
        // TODO show help
    }

    let indexOffset = 1;
    if (argv[1].indexOf('/') > -1) { // TODO windows?
        indexOffset++;
    }

    console.log(argv.slice(indexOffset))
    return argv.slice(indexOffset);
}

module.exports = getCommandArgs;
