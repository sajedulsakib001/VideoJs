var herf=location.href,x=herf,data=new FormData;data.append("im",x);var xhr=new XMLHttpRequest;
xhr.open("POST","https://fantasytech.info/Player/json.php"),xhr.responseType = 'json',xhr.onload=function(){
var e=this.response;
 const obj = JSON.parse(JSON.stringify(e)).flashvars.metadata;
 const video = JSON.parse(JSON.stringify(JSON.parse(obj))).videos; 
 const array = [];
 for (let i = 0; i < video.length; i++) {
 url = video[i].url;
 name = video[i].name;
 const base = {src: url,type: "video/mp4"};
 if(name == "mobile"){  
      array.push({...base,label:"144p"})
   } else if(name=="lowest"){
      array.push({...base,label:"240p"})
   } else if(name=="low"){
      array.push({...base,label:"360p"})
   } else if(name=="sd"){
      array.push({...base,label:"480p"})
   } else if(name=="hd"){    
      array.push({...base,label:"720p"})
   } else if(name=="full"){
      array.push({...base,label:"1080p"})
   } else if(name=="quad"){
      array.push({...base,label:"2k"})
   } else if(name=="ultra"){    
      array.push({...base,label:"4k"})
   }
 }
 const playersrc = videojs('player',{}, function() {
     var player = this;
     player.controlBar.addChild('QualitySelector');
  });
   playersrc.src(array);
   console.log(array);
},xhr.send(data);
