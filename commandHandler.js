const fs = require('fs');
const path = require('path');

const commands = new Map();
const commandCategories = new Map();

const commandDirectories = fs.readdirSync(path.join(__dirname, 'commands'));

for (const category of commandDirectories) {
  const categoryPath = path.join(__dirname, 'commands', category);
  if (!fs.lstatSync(categoryPath).isDirectory()) continue;

  const categoryCommands = fs.readdirSync(categoryPath).filter(file => file.endsWith('.js'));
  for (const file of categoryCommands) {
    const command = require(path.join(categoryPath, file));
    commands.set(command.name, command);
    commandCategories.set(command.name, category);
  }
}

module.exports = {
  executeCommand: (commandName, message, args, client) => {
    const command = commands.get(commandName);
    if (!command) return;
    command.run(client, message, args);
  },
  getCommandCategory: commandName => {
    return commandCategories.get(commandName);
  }
};
