const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94763698137"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94763698137' 
global.devs = '94763698137';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk9vbDdGRjdpNnRwUmNLVVozZnlxVUhWamNpK2RpS1p6MWxiRmJvaU1Gdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmRpMXlPajU2M3hnVFJJSU1GRHhXVmFwVml6azFWelFFaVJmUWtqVzNWVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTFo4Q21iU1ExcmNwWUFGc0pXZE52UnhVaHdSa2EwbDN4bXhWaFIvdFg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIWWp6MXBYR3BOd1gyTFdna3p4RFZYc2VaSUtpR2lwb24vbHI3d1dkZjB3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGaDBmTWNBVllTY09LUWFra2tYMEZkVjV5WG14bk93UGpMa241RXBYVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPeFh5WW5rdzFVYVFOVStDSVZ4VUZzbHlOdElZbkNrdlh1d1ZXZWpJd1E9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnWmMzM3Rxb0hmemdEb3pWdzc0ZlRLYXFIVEJPYW80dnFvVjRnM1VEeUVIdDZWVjNqdXB1TW1UaEpaV3A0ZWZlOUNhbmIwRVBEd3k0Q3NjbzRqdkVqUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0MywiYWR2U2VjcmV0S2V5IjoieVRZWXd1TEExZkZoRHJZdWlnOEthQkl4Uk1GbU15bGxQSUxucUNwVUxzMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNDBmdzNVU0FUNWFWR2dJTGJDQmFHZyIsInBob25lSWQiOiJmMzY1NjIxNS1lNmQzLTQxN2EtYTc1Ny1jYTNjNzcxNDRlZDUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnBPZTIvMFE3dmxySFFZbXZtR2VIVEJhRHhJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEaDBnZ3kyeFdreGFhMXAvNDVNS2k5d0hnbVE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPakM5dXNFRU5xazdiQUdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlpzcnpibDE2ZDVhb0RjNm1XWXVoWTgvb0FLS3ZmZHMyaCsyNzh2TjhQalU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFJaXF3S3Z0K3ZlQnRXM0haZFNESW9WUTV5OFlxd2k2UlgxRHdEQVQ5Z25qUXZtMU92bFh4VXdJTFBsTCtzZE1lZjFpdElNVGZVSHpYbFJ4ZzdlekFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHY1lpcHY3Sm4wOWtyekZkYlVTczFWRThNazNKZHVsaXBIVmNJci93VTdRM1FNTmNwODVzVDFCU3N1YjhINnI5RXNOdlVzUkhxV2dSdUt5cUViNFBnQT09In0sIm1lIjp7ImlkIjoiOTQ3NjM2OTgxMzc6OEBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzY5ODEzNzo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldiSzgyNWRlbmVXcUEzT3BsbUxvV1BQNkFDaXIzM2JOb2Z0dS9MemZENDEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTMwNjY1OTB9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@Dark Asiyah',
  packname:  process.env.PACK_NAME || 'Dark Devil',
   
  botname:   process.env.BOT_NAME === undefined ? "Asiyah-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Asiyah' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
