function handler(m) {
gt = global.gt
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Elyas Gantwng;;;FN:Elyas Ganteng\nORG:Elyas Ganteng;\nTEL;type=CELL;type=VOICE;waid=6285643354073:+62 856-4335-4073\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '14509544207', 'Gata Dios', m) 
conn.sendContact(m.chat, '593993684821', 'Oficial GataBot', m)
m.reply(` ${gt} ` "🧡 Eso son los contactos para ti\nThat's the contacts for you")
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(contacto|owner|creator|creador|propietario|dueño|dueña|propietaria|dueño)$/i

module.exports = handler
