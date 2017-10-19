!function(){function a(a){return a?a:"Kbd"}function b(a){var b={};for(var c in a)b[c]=a[c];return b}function c(a){return"undefined"==typeof a.buttons||a.buttons!=u?a:(a.stopPropagation(),0==a.button?{buttons:1^u}:1==a.button?{buttons:4^u}:2==a.button?{buttons:2^u}:void 0)}function d(a){return"undefined"==typeof a.buttons?!a.button:1&a.buttons}function e(a){return"undefined"==typeof a.buttons?!a.button:!(1&a.buttons)}function f(a,b){for(;a;a=a.parentNode)if(a==b)return!0;return!1}function g(){return!1}function h(a,b){for(var c in b)a.style[c]=b[c]}function i(a,b){return a=JZZ.MIDI.noteValue(a),(b?[0,1,1,2,2,3,4,4,5,5,6,6]:[0,0,1,1,2,3,3,4,4,5,5,6])[a%12]+7*Math.floor(a/12)}function j(a){return 12*Math.floor(a/7)+{0:0,1:2,2:4,3:5,4:7,5:9,6:11}[a%7]}function k(a,b){return function(c){d(c)&&!a.playing[b]&&(a.mouseDown=!0,a.playing[b]="M",a.press(b)),u=c.buttons}}function l(a,b){return function(c){a.mouseDown&&!a.playing[b]&&(a.playing[b]="M",a.press(b)),u=c.buttons}}function m(a,b){return function(c){a.mouseDown&&"M"==a.playing[b]&&!f(c.relatedTarget,this)&&(a.playing[b]=void 0,a.release(b)),u=c.buttons}}function n(a,b){return function(d){d=c(d),e(d)&&a.mouseDown&&"M"==a.playing[b]&&(a.playing[b]=void 0,a.release(b),a.mouseDown=!1)}}function o(a){return function(b){b=c(b),e(b)&&(a.mouseDown=!1)}}function p(){return function(a){u=a.buttons}}function q(a){return function(b){b.preventDefault();var c={};for(var d in b.touches)a.findKey(b.touches[d].clientX,b.touches[d].clientY,c);var e={};for(var f in c)f in a.touches?e[f]=!0:"undefined"==typeof a.playing[f]&&(a.playing[f]="T",a.press(f),e[f]=!0);for(var f in a.touches)f in c||(a.playing[f]=void 0,a.release(f));a.touches=e}}function r(a){this.bins=[],this.params={0:{}};var c={from:"C4",to:"E6",ww:42,bw:24,wl:150,bl:100,pos:"N"};"undefined"==typeof a&&(a={}),this.chan=w[a.chan],"undefined"==typeof this.chan&&(this.chan=0);var d;for(d in a)if(d==parseInt(d))this.params[d]=b(a[d]);else{if("chan"==d)continue;if(("from"==d||"to"==d)&&"undefined"==typeof JZZ.MIDI.noteValue(a[d]))continue;c[d]=a[d]}for(d in this.params){this.bins.push(d);for(var e in c)"from"!=e&&"to"!=e||"undefined"!=typeof this.params[d][e]&&"undefined"!=typeof JZZ.MIDI.noteValue(this.params[d][e])||(this.params[d][e]=c[e]),e in this.params[d]||(this.params[d][e]=c[e]);var f=this.params[d].from,g=this.params[d].to;JZZ.MIDI.noteValue(f)>JZZ.MIDI.noteValue(g)&&(this.params[d].from=g,this.params[d].to=f)}this.bins.sort(function(a,b){return a-b})}function s(a){this.piano=a,this.keys=[]}function t(){}if(JZZ){JZZ.input||(JZZ.input={});for(var u,v="1.3",w={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},x=0;16>x;x++)w[x]=x;r.prototype._close=function(){for(var a in this.playing)"M"!=this.playing[a]&&"T"!=this.playing[a]||this.noteOff(a);this.resize&&window.removeEventListener("resize",this.resize),this.cleanup()},r.prototype.press=function(a){h(this.keys[a],this.stl1[a]),h(this.keys[a],this.locs[a]),this.noteOn(a)},r.prototype.release=function(a){h(this.keys[a],this.stl0[a]),h(this.keys[a],this.locs[a]),this.noteOff(a)},r.prototype.forward=function(a){var b=a[1];if(a.getChannel()==this.chan){var c=a[0]>>4;if(a.isNoteOn())this.playing[b]="E",h(this.keys[b],this.stl1[b]),h(this.keys[b],this.locs[b]);else if(a.isNoteOff())this.playing[b]=void 0,h(this.keys[b],this.stl0[b]),h(this.keys[b],this.locs[b]);else if(11==c&&(120==b||123==b))for(var d in this.playing)this.playing[d]&&(this.playing[d]=void 0,h(this.keys[d],this.stl0[d]),h(this.keys[d],this.locs[d]))}this.emit(a)},r.prototype.findKey=function(a,b,c){for(var d in this.keys)for(var e=document.elementFromPoint(a,b);e;e=e.parentNode)if(this.keys[d]==e)return void(c[d]=!0)},r.prototype.create=function(){for(var a=0,b=0;b<this.bins.length&&this.bins[b]<=window.innerWidth;b++)a=this.bins[b];this.current=this.params[a],this.createCurrent()},r.prototype.createCurrent=function(){if(this.cleanup(),this.keys={},this.locs={},this.stl0={},this.stl1={},this.playing={},this.touches={},this.current.keys)return void this.createWithKeys(this.current.keys);"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(a){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}},r.prototype.createWithKeys=function(a){for(var b in a){var c=JZZ.MIDI.noteValue(a[b][1]),d=a[b][0];"string"==typeof d&&(d=document.getElementById(d)),this.keys[c]=d,this.locs[c]={},this.stl0[c]={},this.stl1[c]={}}this.current.onCreate&&this.current.onCreate.apply(this),this.setListeners()},r.prototype.createAt=function(a){a.innerHTML="";var b,c,d,e=this.current.pos.toUpperCase(),f=i(this.current.from),g=i(this.current.to,!0),k=g-f+1,l=k*this.current.ww+1,m=this.current.wl+1,n=this.current.ww-1,o=this.current.wl-1,p=this.current.bw-1,q=this.current.bl-1,r="N"!=e^!this.current.rev,s="E"!=e^!this.current.rev,t=document.createElement("span");t.style.display="inline-block",t.style.position="relative",t.style.margin="0px",t.style.padding="0px",t.style.borderStyle="none",t.style.userSelect="none",t.style.MozUserSelect="none",t.style.WebkitUserSelect="none",t.style.MsUserSelect="none",t.style.KhtmlUserSelect="none",t.style.cursor="default","E"==e||"W"==e?(t.style.width=m+"px",t.style.height=l+"px"):(t.style.width=l+"px",t.style.height=m+"px");for(var u=0;k>u;u++)b=j(u+f),c=document.createElement("span"),this.keys[b]=c,d={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[b]=d,"E"==e||"W"==e?(d.width=o+"px",d.height=n+"px",d.left="0px",d[s?"top":"bottom"]=this.current.ww*u+"px"):(d.width=n+"px",d.height=o+"px",d.top="0px",d[r?"left":"right"]=this.current.ww*u+"px",d.verticalAlign="top"),this.stl0[b]={backgroundColor:"#fff",borderColor:"#000"},this.stl1[b]={backgroundColor:"#aaa",borderColor:"#000"},h(c,this.stl0[b]),h(c,d),t.appendChild(c);var v=Math.ceil(this.current.ww-3*this.current.bw/4);(v+this.current.ww)%2&&v--;var w=j(f)+1,x=j(g);for(b=w;x>b;b++){var y,z=b%12,A=Math.floor(b/12);if(1==z)y=Math.floor(this.current.ww*(7*A+1.5-f))-v/2-this.current.bw;else if(3==z)y=Math.floor(this.current.ww*(7*A+1.5-f)+v/2);else if(6==z)y=this.current.ww*(7*A+5-f)-Math.floor(this.current.bw/2)-v-this.current.bw;else if(8==z)y=this.current.ww*(7*A+5-f)-Math.floor(this.current.bw/2);else{if(10!=z)continue;y=this.current.ww*(7*A+5-f)-Math.floor(this.current.bw/2)+v+this.current.bw}c=document.createElement("span"),this.keys[b]=c,d={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[b]=d,"E"==e||"W"==e?(d.width=q+"px",d.height=p+"px",d["E"==e?"right":"left"]="0px",d[s?"top":"bottom"]=y+"px"):(d.width=p+"px",d.height=q+"px",d["N"==e?"top":"bottom"]="0px",d[r?"left":"right"]=y+"px"),this.stl0[b]={backgroundColor:"#000",borderColor:"#000"},this.stl1[b]={backgroundColor:"#888",borderColor:"#000"},h(c,this.stl0[b]),h(c,d),t.appendChild(c)}this.current.onCreate&&this.current.onCreate.apply(this),a.appendChild(t),this.current.at=a,this.at=a,this.setListeners()},r.prototype.setListeners=function(){var a="undefined"==typeof this.current.active||this.current.active;if(a){this.watchButtons=p(),this.mouseUpHandle=o(this),window.addEventListener("mousedown",this.watchButtons),window.addEventListener("mousemove",this.watchButtons),window.addEventListener("mouseup",this.mouseUpHandle),this.touchHandle=q(this),this.mouseDownH=[],this.mouseOverH=[],this.mouseOutH=[],this.mouseUpH=[];for(var b in this.keys)this.mouseDownH[b]=k(this,b),this.mouseOverH[b]=l(this,b),this.mouseOutH[b]=m(this,b),this.mouseUpH[b]=n(this,b),this.keys[b].addEventListener("mousedown",this.mouseDownH[b]),this.keys[b].addEventListener("mouseover",this.mouseOverH[b]),this.keys[b].addEventListener("mouseout",this.mouseOutH[b]),this.keys[b].addEventListener("mouseup",this.mouseUpH[b]),this.keys[b].addEventListener("touchstart",this.touchHandle),this.keys[b].addEventListener("touchmove",this.touchHandle),this.keys[b].addEventListener("touchend",this.touchHandle)}for(var b in this.keys)this.keys[b].ondragstart=g,this.keys[b].onselectstart=g;if(!this.resize&&this.bins.length>1){var c=this;this.resize=function(){c.onResize()},window.addEventListener("resize",this.resize)}},r.prototype.cleanup=function(){this.watchButtons&&(window.removeEventListener("mousedown",this.watchButtons),window.removeEventListener("mousemove",this.watchButtons),window.removeEventListener("mouseup",this.mouseUpHandle));for(var a in this.keys)this.mouseDownH[a]&&this.keys[a].removeEventListener("mousedown",this.mouseDownH[a]),this.mouseOverH[a]&&this.keys[a].removeEventListener("mouseover",this.mouseOverH[a]),this.mouseOutH[a]&&this.keys[a].removeEventListener("mouseout",this.mouseOutH[a]),this.mouseUpH[a]&&this.keys[a].removeEventListener("mouseup",this.mouseUpH[a]),this.touchHandle&&(this.keys[a].removeEventListener("touchstart",this.touchHandle),this.keys[a].removeEventListener("touchmove",this.touchHandle),this.keys[a].removeEventListener("touchend",this.touchHandle));this.at&&(this.at.innerHTML="")},r.prototype.settings=function(){return b(this.current)},r.prototype.onResize=function(){for(var a=0,b=0;b<this.bins.length&&this.bins[b]<=window.innerWidth;b++)a=this.bins[b];this.current!=this.params[a]&&(this.current=this.params[a],this.createCurrent())},r.prototype.getKey=function(a){var b=new s(this),c=JZZ.MIDI.noteValue(a);return"undefined"!=typeof this.keys[c]&&b.keys.push(c),b},r.prototype.getKeys=function(a,b){var c=new s(this),d="undefined"==typeof a?void 0:JZZ.MIDI.noteValue(a),e="undefined"==typeof b?void 0:JZZ.MIDI.noteValue(b);if("undefined"!=typeof d&&"undefined"!=typeof e&&d>e){var f=d;d=e,e=f}for(var g in this.keys)"undefined"!=typeof d&&d>g||"undefined"!=typeof e&&g>e||c.keys.push(g);return c},r.prototype.getWhiteKeys=function(a,b){var c=new s(this),d="undefined"==typeof a?void 0:JZZ.MIDI.noteValue(a),e="undefined"==typeof b?void 0:JZZ.MIDI.noteValue(b);if("undefined"!=typeof d&&"undefined"!=typeof e&&d>e){var f=d;d=e,e=f}for(var g in this.keys)if(!("undefined"!=typeof d&&d>g||"undefined"!=typeof e&&g>e)){var h=g%12;1!=h&&3!=h&&6!=h&&8!=h&&10!=h&&c.keys.push(g)}return c},r.prototype.getBlackKeys=function(a,b){var c=new s(this),d="undefined"==typeof a?void 0:JZZ.MIDI.noteValue(a),e="undefined"==typeof b?void 0:JZZ.MIDI.noteValue(b);if("undefined"!=typeof d&&"undefined"!=typeof e&&d>e){var f=d;d=e,e=f}for(var g in this.keys)if(!("undefined"!=typeof d&&d>g||"undefined"!=typeof e&&g>e)){var h=g%12;1!=h&&3!=h&&6!=h&&8!=h&&10!=h||c.keys.push(g)}return c},s.prototype.setInnerHTML=function(a){for(var b in this.keys)this.piano.keys[this.keys[b]].innerHTML=a;return this},s.prototype.setStyle=function(a,b){"undefined"==typeof b&&(b=a);for(var c in this.keys){var d=this.keys[c];for(var e in a)this.piano.stl0[d][e]=a[e];for(var e in b)this.piano.stl1[d][e]=b[e];h(this.piano.keys[d],this.piano.playing[d]?this.piano.stl1[d]:this.piano.stl0[d]),h(this.piano.keys[d],this.piano.locs[d])}return this},t.prototype._info=function(b){return{type:"html/javascript",name:a(b),manufacturer:"virtual",version:v}},t.prototype._openIn=function(a,b){var c=new r(this._arg);c.create(),c.noteOn=function(b){JZZ.util.iosSound(),a._emit(JZZ.MIDI(144+this.chan,b,127))},c.noteOff=function(b){a._emit(JZZ.MIDI(128+this.chan,b,127))},c.emit=function(b){a._emit(b)},a._info=this._info(b),a._receive=function(a){c.forward(a)},a._close=function(){c._close()},a.settings=function(){return c.settings()},a.getKey=function(a){return c.getKey(a)},a.getKeys=function(a,b){return c.getKeys(a,b)},a.getWhiteKeys=function(a,b){return c.getWhiteKeys(a,b)},a.getBlackKeys=function(a,b){return c.getBlackKeys(a,b)},a._resume()},JZZ.input.Kbd=function(){var a,b;1==arguments.length?"string"==typeof arguments[0]?a=arguments[0]:b=arguments[0]:(a=arguments[0],b=arguments[1]);var c=new t;return c._arg=b,JZZ.lib.openMidiIn(a,c)},JZZ.input.Kbd.register=function(){var a,b;1==arguments.length?"string"==typeof arguments[0]?a=arguments[0]:b=arguments[0]:(a=arguments[0],b=arguments[1]);var c=new t;return c._arg=b,JZZ.lib.registerMidiIn(a,c)}}}();