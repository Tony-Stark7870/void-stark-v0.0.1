const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.help') {
    msg.reply('I dont want to help you, you help yourself.');
  }else if (msg.content === '.code' ) {
    msg.reply('Stop asking for the code, you douche. Codes are announced at #announcements.')
} else if (msg.content === '.ping' ) {
    msg.reply('Im not replying with pong. Nice try.')
} else if (msg.content === '.kick' ) {
    msg.reply('You dont have the permission to do that lmao.')
} else if (msg.content === '.ban' ) {
    msg.reply('You dont have the permission to do that lmao.')
} else if (msg.content === '.robux' ) {
    msg.reply('Why tf are you asking me? Youre literally at a server based on a website that gives you free robux.')
} else if (msg.content === '.pp' ) {
    msg.reply('8D. Thats short. Im not amazed.')
} else if (msg.content === '.pp' ) {
    msg.reply('8==D.Thats short. Im not amazed.')
} else if (msg.content === '.pp' ) {
    msg.reply('8=D. Thats short. Im not amazed.')
}else if (msg.content === '.hi' ) {
    msg.reply('Seriously. Not even a hello? Just a short hi. Thats basic.')
} else if (msg.content === '.hello' ) {
    msg.reply('Its good that you said hello and not hi, but thats still weak.')
} else if (msg.content === 'hey' ) {
    msg.reply('A man has fallen into the river in discord city!')
}
});

client.login('process.env.BOT_TOKEN');
