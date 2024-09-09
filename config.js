const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="inzziworld@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaQUv8uKgsNy0XWB0u1a";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaQUv8uKgsNy0XWB0u1a" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/2GWu1zH" || "https://imgur.com/a/2GWu1zH" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Inzzi²²¹-X-Whatsapp bot Beta!" 


global.devs = "2349059174528" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349059174528";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://imgur.com/a/2GWu1zH" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349059174528,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_56_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNixcbiAgICAgICAgMTExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM1LFxuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICA4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvenZqWjRpOTVqejVVb21pbVZoYmpFbTRHWlA5MjZDZk53aWZyc3F1N3d3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxSUhiN3ZPaVNFcXdoLWVYUzVIQWJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiM2RmMDg3LTAwNzgtNDJmOC1hYzNlLWJjZTdmYWY2ZDRlY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAyMDAsXG4gICAgICA0MyxcbiAgICAgIDEyNCxcbiAgICAgIDIwOCxcbiAgICAgIDE1LFxuICAgICAgMTM3LFxuICAgICAgMjM5LFxuICAgICAgNjQsXG4gICAgICAyNyxcbiAgICAgIDE0LFxuICAgICAgMjMsXG4gICAgICA1MCxcbiAgICAgIDI0NyxcbiAgICAgIDI5LFxuICAgICAgMTU2LFxuICAgICAgMTQzLFxuICAgICAgMTA3LFxuICAgICAgMTgzLFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDIzNSxcbiAgICAgIDUyLFxuICAgICAgMTg2LFxuICAgICAgMjQwLFxuICAgICAgNTQsXG4gICAgICAyMzUsXG4gICAgICAyNDMsXG4gICAgICA3MSxcbiAgICAgIDczLFxuICAgICAgOTYsXG4gICAgICAyMDIsXG4gICAgICA2NSxcbiAgICAgIDI5LFxuICAgICAgMTY0LFxuICAgICAgMTMzLFxuICAgICAgNDAsXG4gICAgICAxNzcsXG4gICAgICA5OCxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVQVkxURTFMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU5MTc0NTI4OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSW56eml0ZWNoIENyZWF0aW9uc1wiLFxuICAgIFwibGlkXCI6IFwiMjQ1OTQzMTE0OTc3MzAwOjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01yRHlib0NFTGo3cExZR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnFHRCt4UExsZnJuSTlLMlY0eDBLd21XNExaRStKamJ0ZVBDVkVPcWhVTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEcjdsNG51MCttbzUxQ3B2Y2JzQXZmOEpzdDJzMCtFRXZ2Z3RMM2Qrdno4U2haT0gyWVMzbmZKWVVFQms2SnNKVWdFNnRjOGpldzg5UlArVEVlOHNDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJldGZJSFhLa1hoRHlpMkFia0VrTy8wemlQWU42ckpmYlpjN0s5RmI0VDF4UHJIRi95R2crNTFZM0RZbnpyZkJRZUtzTUZLSjVJRFFZOHlUS2pDZ0NCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDU5MTc0NTI4OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjQ0NjQ1NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUE0QUFKK1JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQTRBQUorUi5qc29uIjogIntcImtleURhdGFcIjpcInJvbVRUSW5odlhnRk5HL09zcHd6NGQ2aTVNVjk4WDlRQnlNTzN5eERPQ0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjU5NzEwNDA5LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjQzODU4MDE3MzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Inzzi²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • Inzzi ᴛᴇᴄʜ』*\n t.me/afolabiyusufmutalib"),
 
  author : process.env.PACK_AUTHER|| "AFOLABI YUSUF",
  packname: process.env.PACK_NAME || "INZZI",
  botname : process.env.BOT_NAME  || "INZZITECH BOT",
  ownername:process.env.OWNER_NAME|| "INZZITECH BOT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
