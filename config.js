const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923274249734";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_06_08_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU5LFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDI4LFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjMsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmVZU3p2STNVNyt3OGdzeDlQOUZXZXpjbTYvelFtYjV0S1pBWlY1R2Vzaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSTdrQWV0ZHFUaGU3SktQSWRCNG53QVwiLFxuICBcInBob25lSWRcIjogXCJkN2YzZTA2OS0zMTY2LTRhMjEtYjM1MS0yN2EwYjBkNzJkY2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTU4LFxuICAgICAgMTM3LFxuICAgICAgMjIsXG4gICAgICA5OSxcbiAgICAgIDUzLFxuICAgICAgMTMxLFxuICAgICAgMTU0LFxuICAgICAgMTY1LFxuICAgICAgMjA0LFxuICAgICAgNjksXG4gICAgICAyMzMsXG4gICAgICAyMyxcbiAgICAgIDIyNCxcbiAgICAgIDY3LFxuICAgICAgMTE1LFxuICAgICAgMTc0LFxuICAgICAgMTIzLFxuICAgICAgNTcsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjE0LFxuICAgICAgMjEzLFxuICAgICAgMzAsXG4gICAgICAxNjUsXG4gICAgICAxMDgsXG4gICAgICAxNTksXG4gICAgICAxNjAsXG4gICAgICAxNDUsXG4gICAgICAyNTEsXG4gICAgICAxMDMsXG4gICAgICAyNDEsXG4gICAgICA2MyxcbiAgICAgIDI3LFxuICAgICAgMTA5LFxuICAgICAgMjE4LFxuICAgICAgMjgsXG4gICAgICAxMTUsXG4gICAgICAyMTksXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTUdBU1JFNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc0MjQ5NzM0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYXJ5YW1cIixcbiAgICBcImxpZFwiOiBcIjEyMzk5NjE0MjA3MjA0NTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0orN2ptZ1EvNitydGdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVEE2SmtSMytIQ1VNUXNTTks1Yno3dWNEaUZycFJzdHhVdEZvSFZjSk9BZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBVHE4RlZBOE9yMDFCYXBEejlsd1JoK3A0aTluQW1uYzdXU0dQMEE2WUtPQjFPdjRGTmJ2WVRHQnBoR1VNYVVDRjNlVG15d0ErZVhJZUdMeVlTdEdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpYmVMV1JsUm9zelpSUHR3cHFCL1RacjZvUjVpZWpTUXJ0c0c0cnRCbVBlWk45MjFEWVp2RzR6RzlLOW14WHo1UUZ6di9lRnJQcFBHV3NsL20vWWFnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzQyNDk3MzQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ1Njk2MDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEdDdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR0Ny5qc29uIjogIntcImtleURhdGFcIjpcIjZVZzZ3Y0FzUEM4NHFmUVkrRGJFM3Q1SHFHRkRPeTBnd0RWWGs2b2NFeUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjE4MzQwNzY2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HACKER ALI JUTT",
  ownername:process.env.OWNER_NAME|| "HACKER ALI",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
