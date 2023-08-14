// Importing node modules
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

// Setting variables
const client = new Client();
const { prefix } = require("./config.json")

// Command Handler
const { executeCommand } = require("./commandHandler")


// Generate QR code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


// When client is ready
client.on('ready', () => {
    console.log('dropzbot is on');
});


// When a message is sent
client.on('message_create', message => {

  // Check prefix
  if(!message.body.startsWith(prefix)) return;

  const args = message.body.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  executeCommand(command, message, args, client)

});
/*
client.on('message', message => {

  // Check prefix
  if(!message.body.startsWith(prefix)) return;
  
  const args = message.body.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  executeCommand(command, message, args, client)

});
*/
client.initialize();
 