const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349030237073";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_36_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDM5LFxuICAgICAgICA3MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjIzbXpRbHJRRlArUDZSZ2ROUkUvUUp5cmRHdnNxeGIyZkxlSzZDTHBydDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzMDIzNzA3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTZEMDQwMTFCMjlGNEQyNDlFRDkzQzZCRTg4RkUzM0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzODQxMzc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInB5aDhGbVZiVEFtSm05dF9zY1hjdFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGExYTcyYzktYzI2Ny00YzFhLThmYTYtOTcwY2RlMWRlMjYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NyxcbiAgICAgIDkyLFxuICAgICAgNTIsXG4gICAgICAxMjgsXG4gICAgICAxMDIsXG4gICAgICAyNTAsXG4gICAgICA1MyxcbiAgICAgIDEwMyxcbiAgICAgIDEwNyxcbiAgICAgIDIwNyxcbiAgICAgIDE5MSxcbiAgICAgIDEwNyxcbiAgICAgIDE3OCxcbiAgICAgIDEwOCxcbiAgICAgIDIxMyxcbiAgICAgIDExLFxuICAgICAgMSxcbiAgICAgIDQ4LFxuICAgICAgMjM2LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTE2LFxuICAgICAgNzgsXG4gICAgICAzMCxcbiAgICAgIDIwMCxcbiAgICAgIDMwLFxuICAgICAgMjU0LFxuICAgICAgOTUsXG4gICAgICAxNDksXG4gICAgICA5MCxcbiAgICAgIDE3MSxcbiAgICAgIDUsXG4gICAgICAyLFxuICAgICAgNDEsXG4gICAgICAyMjMsXG4gICAgICAxOTgsXG4gICAgICA2NyxcbiAgICAgIDIyMCxcbiAgICAgIDQ1LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc1UzJCTlo1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMwMjM3MDczOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MzQyNTM1ODY4MDEyMTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxMnZhRUhFTmVqNGJvR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS2RxbVlZSWRJaDVkSEtSanZ1REllVFBlOFZIRnJHbmtjRC9BRjJhVzBpST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVbHEzVzlvcjJDR3AxWU8xNHV4cE5RdUhOcGtRb25aZzZadHZlTWJsVEhYMHZoV3lnaUJiRG9DMGhWeTNpcmNIRGJhVkFVRnJDenRpbFlEdjdtRDdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiOFlZTHJobkgrZGJOaHRzTStwWW80eHo0RzlyMUY0YUxJLzByTEhFQ3I0U1ArRDJQMWxxWHMzR3Y5Qm5SRkVyRWQ5TE1BYklpZjUzVlMyRXkyYjdDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMwMjM3MDczOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzg0MTM3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR1UFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHVQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZW5IT2dIMlZUZy9jYndibE93M0NoQ0IySlFPVG4xa0JXcnBreWh5L0Z6RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ5MjYwNTU0LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
