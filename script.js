var herf=location.href,x=herf,data=new FormData;data.append("im",x);var xhr=new XMLHttpRequest;
xhr.open("POST","/json.php"),xhr.responseType = 'json',xhr.onload=function(){
var e=this.response;
 const obj = JSON.parse(JSON.stringify(e)).flashvars.metadata;
 const video = JSON.parse(JSON.stringify(JSON.parse(obj))).videos; 
 for (let i = 0; i < video.length; i++) {
 url = video[i].url;
 name = video[i].name;
 if(name == "mobile"){
    var a = "{src: '"+url+"',type: 'video/mp4',label: '144p',res: 144},"
 } else if(name=="lowest"){
    var b = "{src: '"+url+"',type: 'video/mp4',label: '240p',res: 240},"
 } else if(name=="low"){
    var c = "{src: '"+url+"',type: 'video/mp4',label: '360p',res: 360},"
 } else if(name=="sd"){
    var d = "{src: '"+url+"',type: 'video/mp4',label: '480p',res: 480},"
 } else if(name=="hd"){
    var e = "{src: '"+url+"',type: 'video/mp4',label: '720p',res: 720},"
 } else if(name=="full"){
    var f = "{src: '"+url+"',type: 'video/mp4',label: '1080p',res: 1080},"
 } else if(name=="quad"){
    var g ="{src: '"+url+"',type: 'video/mp4',label: '2k',res: 2048},"
 } else if(name=="ultra"){
    var h= "{src: '"+url+"',type: 'video/mp4',label: '4k',res: 4096}"
 }else{
    var j = null;
  }  
 }
 var allsource = a+b+c+d+e+f+g+h;
 var source = allsource.replaceAll("undefined","");
 const player = videojs('player');
 player.src([source]);
},xhr.send(data);
