/**
 * Tum Dum - Owner Information
 * Owner: Eram
 */

const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "Kamrul",
    description: "Show Owner Information",
    commandCategory: "Info",
    usages: "admin",
    cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

    const time = moment()
        .tz("Asia/Sylhet")
        .format("11/06/2004 hh:mm:ss A");

    const message = `
╭━━━━━━━━━━━━━━━━━━━━╮
┃
┃       👑 𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎
┃
╰━━━━━━━━━━━━━━━━━━━━╯

╭──────── 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋 ────────╮
│
│ 👤 Name       : Kamrul
│ 🚹 Gender     : Male
│ 🎂 Age        : 21+
│ 🎓 Education  : Honurs 3rd
│
╰───────────────────────────╯

╭──────── 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 ─────────╮
│
│ 💬 WhatsApp  : 01888606080
│
╰───────────────────────────╯

╭───────── 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 ────────╮
│
│ 🤖 Bot       : Lörd Zäne
│ 👑 Owner     : KAMRUL
│ 🟢 Status    : Online
│
╰───────────────────────────╯

╭──────── 𝐔𝐏𝐃𝐀𝐓𝐄 ─────────╮
│
│ 🕒 ${time}
│
╰───────────────────────────╯

        ✦ Lörd Zäne ✦
`;

    return api.sendMessage(
        message.trim(),
        event.threadID,
        event.messageID
    );
};