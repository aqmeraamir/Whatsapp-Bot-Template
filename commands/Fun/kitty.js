const { MessageMedia } = require('whatsapp-web.js');
const fetch = require('node-fetch');

module.exports = {
    name: "kitty",
    category: "Fun",
    description: "Fun",
    aliases: [''],
    usage: "kitty",
    usable: "Everyone",
    run:  (client, message, args) => {
       
            const response = fetch('https://www.reddit.com/r/kitty/random/.json');
            const data = response.json();
            let memeImage = content[0].data.children[0].data.url;
            const permalink = data[0].data.children[0].data.permalink;
            const memeUrl = `https://reddit.com${permalink}`;
            const memeTitle = data[0].data.children[0].data.title;
            const memeUpvotes = data[0].data.children[0].data.ups;
            const memeDownvotes = data[0].data.children[0].data.downs;
            const memeNumComments = data[0].data.children[0].data.num_comments;

            console.log(memeImage)
            const media = new MessageMedia('image/jpeg', memeImage);

          message.reply(media);

    }
};
