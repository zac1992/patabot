const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "p!";

client.login ('NTg0ODg2NDMxMDU1NjA5ODY3.XPRcDA.eRF2F6Paa2qUqSP2CRA5l9Qb9Wc');

/////////test////////

client.on ('message', message =>{
    if(message.content === "p!cc"){
        message.channel.sendMessage(':wave: Coucou ! Sa va ? :wave:');
        console.log('répond à p!cc')
    }
});
/////////cc//////////
client.on('guildMemberAdd', member =>{
    member.guild.channels.get('585069571069968397').send('**Bienvenue**' + member.user + 'merci de nous avoir rejoind grace a toi nous somme maintenant ' + member.guild.memberCount + ':smiley:');
    console.log('+1')
});
/////bye/////////////
client.on('guildMemberRemove', member =>{
    member.guild.channels.get('585158646720102409').send(':apple:  ***__' + member.user + 'est parti du serveur , nous somme désormais '  + member.guild.memberCount + '__*** :snake:');
    console.log('-1')
});
//////kick///////////
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channels.send("vous n'avez pas le droit d'utiliser cette commande;(")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Merci de présiser un itulisateur valide")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous  ne pouvez pas kick cette perssone")
        if (!member.kickable) return message.channel.send("désolé je peux pas kick cette perssone du serveur.")
        member.kick()
        message.channel.send(":bomb:  ** [" + member.user.username + "] sest fais kick ! ** :bomb:")
    }
});
///////ban/////////
client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channels.send("vous navez pas le droit d'utiliser cette commande;(")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Merci de présiser un itulisateur valide")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("désolé je ne peux pas bann cette perssone du serveur")
        if (!member.bannable) return message.channel.send("je ne peus pas abnn cette perssone du serveur")
        member.ban()
        message.channel.send(":white_check_mark:  [" + member.user + "] à bien été ban  :white_check_mark:" )
    }
});
 /////clear////////
 client.on("message",message =>{
     if (!message.guild) return
     let args = message.content.trim().split(/ +/g)

     if (args[0].toLowerCase() === prefix + "clear") {
         if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas le droit d'utiliser cette commande")
         let count = args[1]
         if (!count) return message.channel.send("Veuillez indiquer un nombre de message a supprimer")
         if (isNaN(count)) return message.channel.send("Veuillez indiquer  un nombre valide")
         if (count < 1 || count > 99) return message.channel.send("Veuillez indiquer un nobre validde entre 1 et 100")
         message.channel.bulkDelete(parseInt(count) + 1)
        }
 });
 ///////mute////////
