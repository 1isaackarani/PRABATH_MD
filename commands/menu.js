const { fbdl,cmd } = require('../lib')
cmd({
        pattern: "logo",
        desc: "download instagram post.",
        category: "other",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('    👨‍💻 *LOGO COMMAND LIST* 👨‍💻\n\n\n\n*Type in front of the word you want to create*\n\n\n⦿.Logo1\n\n⦿.Logo2\\n⦿.nLogo3\n\n⦿.Logo4\n\n⦿.Logo5\n\n⦿.\n⦿.Logo6\n\n⦿.Logo7\n\n⦿.Logo8\n\n⦿.Logo9\n\n⦿.Logo10\n\n⦿.Logo11\n\n⦿.Logo12\n\n⦿.Logo13\n\n⦿.Logo14\n\n⦿.Logo15\n\n⦿.Logo16\n\n⦿.Logo17\n\n⦿.Logo18\n\n⦿.Logo19\n\n⦿.Logo20\n\n⦿.Logo21\n\n⦿.Logo22\n\n⦿.Logo23\n\n⦿.Logo24\n\n⦿.Logo25\n\n⦿.Logo26\n\n⦿.Logo27\n\n⦿.Logo28\n\n⦿.Logo29\n\n⦿.Logo30')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "downloadcmd",
        desc: "download instagram post.",
        category: "Auto Reply",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply(' 👨‍💻 *𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 👨‍💻\n\n\n\n\n📟 *Command:-* .song\nℹ️ *Description:-* Song Download From Youtube\n🔥 *Help:-* .song ලෙලෙනා\n\n\n📟 *Command:-* .video\nℹ️ *Description:-* Video Download From Youtube\n🔥 *Help:-* .video නේනා\n\n\n📟 *Command:-* .tgs\nℹ️ *Description:-* Download Telegram Stickers\n🔥 *help:-* .tga Enter Telegram Sticker Url \n\n\n📟 *Command:-* .ytmp4\nℹ️ *Description:-* Download Video Youtube Link\n🔥 *Help:-* .ytmp4 Enter Youtube Video Url\n\n\n📟 *Command:-* .ytmp3\nℹ️ *Description:-* Download Songs Youtube Link\n🔥 *Help:-* .ytmp3 Enter Youtube Video Url\n\n\n📟 *Command:-* .ytdoc\nℹ️ *Description:-* Song Download Form Youtube (Document)\n🔥 *Help:-* ytdoc Enter Youtube Video Url\n\n\n📟 *Command:-* .mediafire\nℹ️ *Description:-* Download Content From Mediafire Link\n🔥 *Help:-* .mediafire Enter Mediafire Url\n\n\n📟 *Command:-* .yts\nℹ️ *Description:-* Search Youtube Videos\n🔥 *Help:-* .yts ලෙලෙනා')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });

cmd({
        pattern: "groupcmd",
        desc: "download instagram post.",
        category: "other",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply(' 👨‍💻 *𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 👨‍💻\n\n\n\n\n📟 *Command:-* .sticker\nℹ️ *Description:-* Photo To Sticker Made\n🔥 *Help:-* .sticker Mention Any Photo or Video\n\n\n📟 *Command:-* .promote\nℹ️ *Description:-* promote Admin\n🔥 *Help:-* .promote Tag Any User \n\n\n📟 *Command:-* .demote\nℹ️ *Description:-* Demote Admin\n🔥 *help:-* .promote tag Any User \n\n\n📟 *Command:-* .ban\nℹ️ *Description:-* Cmd Block Use \n🔥 *Help:-* .ban tag Any User\n\n\n📟 *Command:-* .unban\nℹ️ *Description:-* Loked User Unblock\n🔥 *Help:-* .unban Tag Any User\n\n\n📟 *Command:-* .kick\nℹ️ *Description:-* Remove Participants On Group\n🔥 *Help:-* .kick Tag Any User\n\n\n📟 *Command:-* .add\nℹ️ *Description:-* Add Participants On Group\n🔥 *Help:-* .add Mobile number\n\n\n📟 *Command:-* .poll\nℹ️ *Description:-* Create poll For Group\n🔥 *Help:-* .poll question option1 option2 option3\n\n\n📟 *Command:-* .profile\nℹ️ *Description:-* Profile Imfomation Get\n🔥 *Help:-* .profile Tag Any user\n\n\n📟 *Command:-* .group\nℹ️ *Description:-* Group Mute or Unmute\n🔥 *Help:-* .group\n\n\n📟 *Command:-* .gdp\nℹ️ *Description:-* Group Profile Photo Change\n🔥 *Help:-* .gdp Tag Any photo\n\n\n📟 *Command:-* .del\nℹ️ *Description:-* Delete message\n🔥 *Help:-* .del tag message\n\n\n📟 *Command:-* .antilink\nℹ️ *Description:-* Link Remover\n🔥 *Help:-* .antilink Active or Deactive\n\n\n📟 *Command:-* .tag\nℹ️ *Description:-* Tag All Group Users\n🔥 *Help:-* .tag\n\n\n📟 *Command:-* .getjids\nℹ️ *Description:-* Get Jid\n🔥 *Help:-* .getjids\n\n\n📟 *Command:-* .rank\nℹ️ *Description:-* Check Rank\n🔥 *Help:-* .rank Tag Any User')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });
