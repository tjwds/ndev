const getCommandArgs = require('./utils/getCommandArgs');
const invokeDb = require('./utils/db/invokeDb');

const develop = require('./commands/develop');
const done = require('./commands/done');
const register = require('./commands/register');

const commands = {
  develop,
  done,
  register
}

// TODO call out to some place to see if we need to ask the user to upgrade

const invoke = async function () {
  const [commandName, commandArgument] = getCommandArgs();

  const command = commands[commandName];

  if (!command) {
    throw new Error(`${command} is not an available command.`);
    // TODO show help
  }

  const db = await invokeDb();
  console.log(db, command)

  await command({
    name: commandArgument,
    db,
  });
};

invoke();
