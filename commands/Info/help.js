module.exports = {
    name: "help",
    category: "Info",
    description: "Info of all the commands",
    aliases: ["info"],
    usage: "help",
    usable: "Everyone",
    run: (client, message, args) => {   
        message.reply("_*These are my commands:*_ \n\n*Info:*\n- _!help_ \n\n*Fun:*\n- _!black_\n- _!kitty_")
    }
}