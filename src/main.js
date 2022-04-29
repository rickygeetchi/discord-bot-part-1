import discord from 'discord.js';
const token = ""

const client = new discord.Client({
    intents:['GUILDS','GUILD_MESSAGES'],
});



/**
 * 
 * @param {discord.Message} message 
 */
function onMessage(message){
if (message.content.includes("ping")) {
    message.channel.send("pong")};
}

client.on('messageCreate', onMessage);
client.login(token);
