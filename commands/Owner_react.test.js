const { fbdl,cmd,tlang } = require('../lib')
cmd({
        pattern: "",
        desc: "download instagram post.",
        category: "other",
        filename: __filename
    },
    async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner);
            if (!text) return citel.react(`🪄`);


    });
