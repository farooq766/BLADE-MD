const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2348059540212'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "2348069553870"
global.devs = '2348069553870'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxkWUZndVZYeGxVN2REbk1HSnlBN1hYNld5Y1l6T3I3bFdSS2Y5bkVuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEVDZFdkVHlOMXFNdTJyaUxPVnBzMkRqU3dRVW5QcEFpRDErL0VyNTVsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTHl0blMyOVN5TjRxRjJZYUtjUWd6Q05oS0NXUHVrQm5qbFI4Y1BhYjNNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4VS9jS2pTZ3M3aFBESHl2UmxiNGdBSnZ3SkFKSi9oenRJOGo4WDVzR0dVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLdHlFZzAzdUVoZ1RnNkdPZk9TaVBaM2R2WUZVWVh6aitqYm1teWY3Rjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZlV0NOZGFKb0RpZ3JTeTVyelNmTWlUOHNqSGppQWI3T2tLeFJzWGcySGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NaWlQ0VmlldU05TmxuYmY5RnR6WVNybGw5Q1Q2TEVvOGZFUHdqS2dIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERsbG9JTUhMNW5tUERlUE82WmR3WnlCcVdRdVozMm5sMDQ3dzRPcVZTdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRGVkRDUDFFMmZJeUpxenNKMkkzempoV1ZGY1pqa2JlNk8xTUpWclovTURDUlVGT0NrS1BRNy9UbVVkQlJHRCtBVkVsOE15cS9MVklGRm54OTB4SENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJLK0tSSnpmcjZRZmhNTTRaOVpXbGhNMkhYT1JtSSs3b3hwdHZCYmdwTFhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMzMjU5MTk0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2QzlDQUVFNEU1NzVFQjNEMUEyQUUwNEM4QTk4RUM2QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNjA4MjQyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMzI1OTE5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODE3NUI4MTU0MDEzMTc4NEVBNzQ2NkZENjkwQjYzNjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTYwODI0Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicVprcU1jYURSa3FQNFE4WGJkUm5pQSIsInBob25lSWQiOiIzODI1Mjc3ZC05MTZkLTQzNDUtOGI0ZC01MThjZDkxMThiZmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmlkcXNUNTZYcy9VN05jdTZoU2lOTUd0Vy8wPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpBT2p4eUpwdE16bWNycnpFaGtlSTljRmhZVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCUVBMQ1NBTCIsIm1lIjp7ImlkIjoiOTIzMzMyNTkxOTQzOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRkFST09RIEJBTE9DSCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUNscytFQ0VLTFE5clFHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRjYwZ3FMd2MxZnAraHNRa09seWg3OUtORHY2RGZjS21YcUV2UjFNQW1sRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVWpoeHMyOUpwUno2OWtDeVVWRHlOMmZzbndXQmovaFlKZlo2VStWQW9qdEFCRTBRRVRTU2JUMHd0ZFVVd2VocmlhSW1NdXBKZm5LRFpPeFFNQVZ3QXc9PSIsImRldmljZVNpZ25hdHVyZSI6InhmNzRsWEZvRDRPYmE3TW04NjhibHAyaUxkWjB2ZW5RbndodVE4bzZHM2IyUXY5ZlFjdFhKUmg1SUw2SzdJU1A0Y3pUUHprSVZtU3pxd0Roc3J3akRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzMyNTkxOTQzOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmV0SUtpOEhOWDZmb2JFSkRwY29lL1NqUTcrZzMzQ3BsNmhMMGRUQUpwUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTYwODIzOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOSisifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX DAVID',
  
  botname:   process.env.BOT_NAME === undefined ? "BLADE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'blade md' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? true : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'blade-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
