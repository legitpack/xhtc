const xhtc = require('./Storage/xhtc-config.json');
const Discord = require('discord.js');
const client = new Discord.Client({
    disableEveryone: true,
})
const xstatus = [
    "Najlepszy serwer",
    "Megadrop",
    "IP: xHTC.PL"
];

function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!\nAvalible on ${client.guilds.size} servers`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (xstatus.length - 1) + 1);
        client.user.setActivity(xstatus[index]);
    }, 5000);
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(xhtc.prefix) !== 0) return;
    const args = message.content.slice(xhtc.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "banana") {
        var banan = Math.floor(getRandomInt(1, 40));
        if (message.author.username === "wertos") {
            banan = 0;
        }
        message.channel.send('Tfuj bananek na `' + banan + ' cm`', {files: ["https://preview.ibb.co/mCJX0e/bsd.png"]});
    }
});

client.login(process.env.BOT_TOKEN)
