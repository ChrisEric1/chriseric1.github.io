# Discord Bot Client

For a electron download of the website, no extension required go here http://github.com/ChrisEric1/ChrisEric1.GitHub.io/releases

For web browser version, goto http://chriseric1.github.io/login and sideload the extension in chrome http://chriseric1.github.io/extension.zip

Note there isn't a working extension of any other source but this at the moment, and changing the site endpoint REQUIRES you to change the extension at the moment.

For lightcord

A. You need to download the following 
Lightcord Patches No recompling required http://github.com/ChrisEric1/ChrisEric1/archive/refs/heads/main.zip 
Node.js (assuming windows x64) http://nodejs.org/dist/v16.16.0/node-v16.16.0-x64.msi
Lightcord http://github.com/Lightcord/Lightcord/releases/download/v0.1.9/lightcord-win32-ia32.zip

To run, install node.js with all required build tools, this maybe needed at a later point. Then unzip Lightcord and run it, let it goto the login screen
and when it "loads", close it out completly from tray icon. 
Then unzip the patches, copy settings.json to "%APPDATA%\lightcord\settings.json" assuming you are using windows, the open a cmd window, cd into the patches folder
and run **npm i** and **node index.js**, and then run lightcord. If it gets stuck, Completly close it out and run it again. 
Now it should work with the last newest assets compatiable with lightcord.

B. You may also compile lightcord, you need the modified source code http://github.com/ChrisEric1/Lightcord with its requirements like node.js
and you need the patches http://github.com/ChrisEric1/ChrisEric1/archive/refs/heads/main.zip 
Compile lightcord and then DO NOT copy settings.json since its not required when compiled. cd into the patches in a new cmd window, run **npm i && node index.js**
and run lightcord. Thats it. 

# FAQ

Q: Why do I need a extension?

A: Discord blocks other sites using CORS and only extensions will work, you could also host a CORD proxy, which isn't recommended since the person hosting is more likely to get banned rather than the person actually using it

Q: Why the patches even if compiling?

A: It run a local server which I didn't merge into the LC source (yet)

Q: Why does the extension only work on http://chriseric1.github.io/ ?

A: You can change it but for security reasons we keep it like this. We could also use a source detector but I am not likely to merge it tho.

Q: Assets in this repo?

A: Required by discord firewall so it even loads up at all. Similar to CORS, but its a CloudFlare FW

Q: Antivirus flags your files

A: These files aren't signed at all, thats why.

Q: Are you going to update the client?

A: No, since I can't unless I knew how to but I don't, LC is as new as we are most likely going to get. 

