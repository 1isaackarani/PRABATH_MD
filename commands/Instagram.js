const { fbdl,cmd } = require('../lib')
cmd({
        pattern: "hi",
        react: "🙋‍♂️",
        desc: "download instagram post.",
        category: "other",
        filename: __filename
    },
    async(Void, citel,text,{isCreator}) => {
if(!text) return citel.reply('හායි මොකද කරන්නෙ 🙋‍♂️')
let response = await fbdl(text)
for (let i=0;i<response.length;i++) {
await Void.sendFileUrl(citel.chat, response[f], `*Downloaded Media from instagram.*`, citel)
}
    });
