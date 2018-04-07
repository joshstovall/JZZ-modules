!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b:"function"==typeof define&&define.amd?define("JZZ.input.Kbd",["JZZ"],b):b(JZZ)}(this,function(a){function b(a,b){return a?a:b}function c(a){var b={};for(var c in a)b[c]=a[c];return b}function d(b){this.notes={},this.playing=[],"undefined"==typeof b&&(b={}),"undefined"!=typeof b.mpe?(a.MPE.validate(b.mpe),this.mpe=b.mpe,this.chan=b.mpe[0]):(this.chan=O[b.chan],"undefined"==typeof this.chan&&(this.chan=0));for(var c in b){var d=N[c],e=a.MIDI.noteValue(b[c]);"undefined"!=typeof d&&"undefined"!=typeof e&&(this.notes[d]=e)}var f=this;this.keydown=function(a){var b=f.notes[a.keyCode];"undefined"!=typeof b&&(a.preventDefault(),f.playing[b]||(f.playing[b]=!0,f.noteOn(b)))},this.keyup=function(a){var b=f.notes[a.keyCode];"undefined"!=typeof b&&(a.preventDefault(),f.playing[b]&&(f.playing[b]=void 0,f.noteOff(b)))},"string"==typeof b.at&&(this.at=document.getElementById(b.at));try{this.at.addEventListener("keydown",this.keydown),this.at.addEventListener("keyup",this.keyup),(!this.at.tabIndex||this.at.tabIndex<0)&&(this.at.tabIndex=0)}catch(g){document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup),this.at=document}this._close=function(){this.at.removeEventListener("keydown",this.keydown),this.at.removeEventListener("keyup",this.keyup);for(var a in f.playing)f.noteOff(a)}}function e(){}function f(a){return"undefined"==typeof a.buttons||a.buttons!=Q?a:(a.stopPropagation(),0==a.button?{buttons:1^Q}:1==a.button?{buttons:4^Q}:2==a.button?{buttons:2^Q}:void 0)}function g(a){return"undefined"==typeof a.buttons?!a.button:1&a.buttons}function h(a){return"undefined"==typeof a.buttons?!a.button:!(1&a.buttons)}function i(a,b){for(;a;a=a.parentNode)if(a==b)return!0;return!1}function j(){return!1}function k(a,b){for(var c in b)a.style[c]=b[c]}function l(b,c){return b=a.MIDI.noteValue(b),(c?[0,1,1,2,2,3,4,4,5,5,6,6]:[0,0,1,1,2,3,3,4,4,5,5,6])[b%12]+7*Math.floor(b/12)}function m(a){return 12*Math.floor(a/7)+{0:0,1:2,2:4,3:5,4:7,5:9,6:11}[a%7]}function n(a,b){return function(c){g(c)&&!a.playing[b]&&(a.mouseDown=!0,a.playing[b]="M",a.press(b)),Q=c.buttons}}function o(a,b){return function(c){a.mouseDown&&!a.playing[b]&&(a.playing[b]="M",a.press(b)),Q=c.buttons}}function p(a,b){return function(c){a.mouseDown&&"M"==a.playing[b]&&!i(c.relatedTarget,this)&&(a.playing[b]=void 0,a.release(b)),Q=c.buttons}}function q(a,b){return function(c){c=f(c),h(c)&&a.mouseDown&&"M"==a.playing[b]&&(a.playing[b]=void 0,a.release(b),a.mouseDown=!1)}}function r(a){return function(b){b=f(b),h(b)&&(a.mouseDown=!1)}}function s(){return function(a){Q=a.buttons}}function t(a){return function(b){b.preventDefault();var c={};for(var d in b.touches)a.findKey(b.touches[d].clientX,b.touches[d].clientY,c);var e,f={};for(e in c)e in a.touches?f[e]=!0:"undefined"==typeof a.playing[e]&&(a.playing[e]="T",a.press(e),f[e]=!0);for(e in a.touches)e in c||(a.playing[e]=void 0,a.release(e));a.touches=f}}function u(b){this.bins=[],this.params={0:{}};var d={from:"C4",to:"E6",ww:42,bw:24,wl:150,bl:100,pos:"N"};"undefined"==typeof b&&(b={}),"undefined"!=typeof b.mpe?(a.MPE.validate(b.mpe),this.mpe=b.mpe,this.chan=b.mpe[0]):(this.chan=O[b.chan],"undefined"==typeof this.chan&&(this.chan=0));var e;for(e in b)if(e==parseInt(e))this.params[e]=c(b[e]);else{if("chan"==e)continue;if(("from"==e||"to"==e)&&"undefined"==typeof a.MIDI.noteValue(b[e]))continue;d[e]=b[e]}for(e in this.params){this.bins.push(e);for(var f in d)"from"!=f&&"to"!=f||"undefined"!=typeof this.params[e][f]&&"undefined"!=typeof a.MIDI.noteValue(this.params[e][f])||(this.params[e][f]=d[f]),f in this.params[e]||(this.params[e][f]=d[f]);var g=this.params[e].from,h=this.params[e].to;a.MIDI.noteValue(g)>a.MIDI.noteValue(h)&&(this.params[e].from=h,this.params[e].to=g)}this.bins.sort(function(a,b){return a-b})}function v(a){this.piano=a,this.keys=[]}function w(){}function x(a){if(this.base=.5,this.val=.5,this.msb=0,this.lsb=0,this.chan=0,a instanceof Array){if(1!=a.length&&2!=a.length)return;if(2==a.length){if(a[1]!=parseInt(a[1])||a[1]<1||a[1]>127)return;this.msb=a[0],a[1]!=a[0]&&(this.lsb=a[1])}else this.msb=a[0]}else if(a==parseInt(a)){if(1>a||a>127)return;this.msb=a}else{var b={mod:[1,33],breath:[2,34],foot:[4,36],portamento:[5,37],volume:[7,39],balance:[8,40],pan:[10,42],expression:[11,43],effect1:[12,44],effect2:[13,45]}[a];b&&(this.msb=b[0],this.lsb=b[1])}this.msb&&7!=this.msb&&8!=this.msb&&10!=this.msb&&(this.base=0),this.val=-1,this.setValue(this.base)}function y(a,b,c,d,e,f){this.ctrl=a,this.span=b,this.inner=c,this.stl=d,this.stl0=e,this.stl1=f}function z(){}function A(a,b){this.bins=[],this.params={0:{}},"undefined"==typeof a&&(a={}),"undefined"==typeof b&&(b={}),this.chan=O[a.chan],"undefined"==typeof this.chan&&(this.chan=0);var d;for(d in a)if(d==parseInt(d))this.params[d]=c(a[d]);else{if("chan"==d)continue;b[d]=a[d]}for(d in this.params){this.bins.push(d);for(var e in b)"from"!=e&&"to"!=e||"undefined"!=typeof l(this.params[d][e])||(this.params[d][e]=b[e]),e in this.params[d]||(this.params[d][e]=b[e])}this.bins.sort(function(a,b){return a-b})}function B(a){return function(b){Q=b.buttons,g(b)&&a.onMouseDown(b)}}function C(a){return function(b){Q=b.buttons,a.onMouseMove(b)}}function D(a){return function(b){b=f(b),h(b)&&(window.removeEventListener("mousemove",a.mouseMove),window.removeEventListener("mouseup",a.mouseUp),a.dragX=void 0,a.restyle(),a.onMouseUp(b))}}function E(a){return function(b){a.onTouchStart(b)}}function F(a){return function(b){a.onTouchMove(b)}}function G(a){return function(b){a.onTouchEnd(b)}}function H(a){a.preventDefault()}function I(a){A.call(this,a,{pos:"N",rw:2,rh:128,kw:24,kh:16})}function J(a){A.call(this,a,{pos:"N",rw:128,rh:128,kw:24,kh:16})}function K(){}function L(){}if(a){a.input||(a.input={});for(var M="1.0.1",N={" ":32,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"+":61,"=":61,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,_:173,"-":173,"[":219,"{":219,"]":221,"}":221,"|":220,"\\":220,"`":192,"~":192,";":59,":":59,"'":222,'"':222,",":188,"<":188,".":190,">":190,"/":191,"?":191},O={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},P=0;16>P;P++)O[P]=P;e.prototype._info=function(a){return{type:"html/javascript",name:b(a,"ASCII"),manufacturer:"virtual",version:M}},e.prototype._openIn=function(b,c){var e=new d(this._arg);e.mpe?(b._orig._mpe||(b._orig._mpe=a.MPE()),b._orig._mpe.setup(e.mpe[0],e.mpe[1]),e.noteOn=function(c){var d=a.MIDI(144+this.chan,c,127);d._mpe=c,b._receive(d)},e.noteOff=function(c){var d=a.MIDI(128+this.chan,c,127);d._mpe=c,b._receive(d)}):(e.noteOn=function(c){b._receive(a.MIDI(144+this.chan,c,127))},e.noteOff=function(c){b._receive(a.MIDI(128+this.chan,c,127))}),b._info=this._info(c),b._close=function(){e._close()},b._resume()},a.input.ASCII=function(){var b,c;1==arguments.length?"string"==typeof arguments[0]?b=arguments[0]:c=arguments[0]:(b=arguments[0],c=arguments[1]);var d=new e;return d._arg=c,a.lib.openMidiIn(b,d)},a.input.ASCII.register=function(){var b,c;1==arguments.length?"string"==typeof arguments[0]?b=arguments[0]:c=arguments[0]:(b=arguments[0],c=arguments[1]);var d=new e;return d._arg=c,a.lib.registerMidiIn(b,d)};var Q;u.prototype._close=function(){for(var a in this.playing)"M"!=this.playing[a]&&"T"!=this.playing[a]||this.noteOff(a);this.resize&&window.removeEventListener("resize",this.resize),this.cleanup()},u.prototype.press=function(a){k(this.keys[a],this.stl1[a]),k(this.keys[a],this.locs[a]),this.noteOn(a)},u.prototype.release=function(a){k(this.keys[a],this.stl0[a]),k(this.keys[a],this.locs[a]),this.noteOff(a)},u.prototype.forward=function(a){var b=a[1],c=a.getChannel();if(c>=this.chan&&c<=(this.mpe?this.chan+this.mpe[1]:this.chan)){var d=a[0]>>4;if(a.isNoteOn())this.playing[b]="E",k(this.keys[b],this.stl1[b]),k(this.keys[b],this.locs[b]);else if(a.isNoteOff())this.playing[b]=void 0,k(this.keys[b],this.stl0[b]),k(this.keys[b],this.locs[b]);else if(11==d&&(120==b||123==b))for(var e in this.playing)this.playing[e]&&(this.playing[e]=void 0,k(this.keys[e],this.stl0[e]),k(this.keys[e],this.locs[e]))}this.emit(a)},u.prototype.findKey=function(a,b,c){for(var d in this.keys)for(var e=document.elementFromPoint(a,b);e;e=e.parentNode)if(this.keys[d]==e)return void(c[d]=!0)},u.prototype.create=function(){for(var a=0,b=0;b<this.bins.length&&this.bins[b]<=window.innerWidth;b++)a=this.bins[b];this.current=this.params[a],this.createCurrent()},u.prototype.createCurrent=function(){if(this.cleanup(),this.keys={},this.locs={},this.stl0={},this.stl1={},this.playing={},this.touches={},this.current.keys)return void this.createWithKeys(this.current.keys);"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(a){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}},u.prototype.createWithKeys=function(b){for(var c in b){var d=a.MIDI.noteValue(b[c][1]),e=b[c][0];"string"==typeof e&&(e=document.getElementById(e)),this.keys[d]=e,this.locs[d]={},this.stl0[d]={},this.stl1[d]={}}this.current.onCreate&&this.current.onCreate.apply(this),this.setListeners()},u.prototype.createAt=function(a){a.innerHTML="";var b,c,d,e=this.current.pos.toUpperCase(),f=l(this.current.from),g=l(this.current.to,!0),h=g-f+1,i=h*this.current.ww+1,j=this.current.wl+1,n=this.current.ww-1,o=this.current.wl-1,p=this.current.bw-1,q=this.current.bl-1,r="N"!=e^!this.current.rev,s="E"!=e^!this.current.rev,t=document.createElement("span");t.style.display="inline-block",t.style.position="relative",t.style.margin="0px",t.style.padding="0px",t.style.borderStyle="none",t.style.userSelect="none",t.style.MozUserSelect="none",t.style.WebkitUserSelect="none",t.style.MsUserSelect="none",t.style.KhtmlUserSelect="none",t.style.cursor="default","E"==e||"W"==e?(t.style.width=j+"px",t.style.height=i+"px"):(t.style.width=i+"px",t.style.height=j+"px");for(var u=0;h>u;u++)b=m(u+f),c=document.createElement("span"),this.keys[b]=c,d={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[b]=d,"E"==e||"W"==e?(d.width=o+"px",d.height=n+"px",d.left="0px",d[s?"top":"bottom"]=this.current.ww*u+"px"):(d.width=n+"px",d.height=o+"px",d.top="0px",d[r?"left":"right"]=this.current.ww*u+"px",d.verticalAlign="top"),this.stl0[b]={backgroundColor:"#fff",borderColor:"#000"},this.stl1[b]={backgroundColor:"#aaa",borderColor:"#000"},k(c,this.stl0[b]),k(c,d),t.appendChild(c);var v=Math.ceil(this.current.ww-3*this.current.bw/4);(v+this.current.ww)%2&&v--;var w=m(f)+1,x=m(g);for(b=w;x>b;b++){var y,z=b%12,A=Math.floor(b/12);if(1==z)y=Math.floor(this.current.ww*(7*A+1.5-f))-v/2-this.current.bw;else if(3==z)y=Math.floor(this.current.ww*(7*A+1.5-f)+v/2);else if(6==z)y=this.current.ww*(7*A+5-f)-Math.floor(this.current.bw/2)-v-this.current.bw;else if(8==z)y=this.current.ww*(7*A+5-f)-Math.floor(this.current.bw/2);else{if(10!=z)continue;y=this.current.ww*(7*A+5-f)-Math.floor(this.current.bw/2)+v+this.current.bw}c=document.createElement("span"),this.keys[b]=c,d={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[b]=d,"E"==e||"W"==e?(d.width=q+"px",d.height=p+"px",d["E"==e?"right":"left"]="0px",d[s?"top":"bottom"]=y+"px"):(d.width=p+"px",d.height=q+"px",d["N"==e?"top":"bottom"]="0px",d[r?"left":"right"]=y+"px"),this.stl0[b]={backgroundColor:"#000",borderColor:"#000"},this.stl1[b]={backgroundColor:"#888",borderColor:"#000"},k(c,this.stl0[b]),k(c,d),t.appendChild(c)}this.current.onCreate&&this.current.onCreate.apply(this),a.appendChild(t),this.current.at=a,this.at=a,this.setListeners()},u.prototype.setListeners=function(){var a,b="undefined"==typeof this.current.active||this.current.active;if(b){this.watchButtons=s(),this.mouseUpHandle=r(this),window.addEventListener("mousedown",this.watchButtons),window.addEventListener("mousemove",this.watchButtons),window.addEventListener("mouseup",this.mouseUpHandle),this.touchHandle=t(this),this.mouseDownH=[],this.mouseOverH=[],this.mouseOutH=[],this.mouseUpH=[];for(a in this.keys)this.mouseDownH[a]=n(this,a),this.mouseOverH[a]=o(this,a),this.mouseOutH[a]=p(this,a),this.mouseUpH[a]=q(this,a),this.keys[a].addEventListener("mousedown",this.mouseDownH[a]),this.keys[a].addEventListener("mouseover",this.mouseOverH[a]),this.keys[a].addEventListener("mouseout",this.mouseOutH[a]),this.keys[a].addEventListener("mouseup",this.mouseUpH[a]),this.keys[a].addEventListener("touchstart",this.touchHandle),this.keys[a].addEventListener("touchmove",this.touchHandle),this.keys[a].addEventListener("touchend",this.touchHandle)}for(a in this.keys)this.keys[a].ondragstart=j,this.keys[a].onselectstart=j;if(!this.resize&&this.bins.length>1){var c=this;this.resize=function(){c.onResize()},window.addEventListener("resize",this.resize)}},u.prototype.cleanup=function(){this.watchButtons&&(window.removeEventListener("mousedown",this.watchButtons),window.removeEventListener("mousemove",this.watchButtons),window.removeEventListener("mouseup",this.mouseUpHandle));for(var a in this.keys)this.mouseDownH[a]&&this.keys[a].removeEventListener("mousedown",this.mouseDownH[a]),this.mouseOverH[a]&&this.keys[a].removeEventListener("mouseover",this.mouseOverH[a]),this.mouseOutH[a]&&this.keys[a].removeEventListener("mouseout",this.mouseOutH[a]),this.mouseUpH[a]&&this.keys[a].removeEventListener("mouseup",this.mouseUpH[a]),this.touchHandle&&(this.keys[a].removeEventListener("touchstart",this.touchHandle),this.keys[a].removeEventListener("touchmove",this.touchHandle),this.keys[a].removeEventListener("touchend",this.touchHandle));this.at&&(this.at.innerHTML="")},u.prototype.settings=function(){return c(this.current)},u.prototype.onResize=function(){for(var a=0,b=0;b<this.bins.length&&this.bins[b]<=window.innerWidth;b++)a=this.bins[b];this.current!=this.params[a]&&(this.current=this.params[a],this.createCurrent())},u.prototype.getKey=function(b){var c=new v(this),d=a.MIDI.noteValue(b);return"undefined"!=typeof this.keys[d]&&c.keys.push(d),c},u.prototype.getKeys=function(b,c){var d=new v(this),e="undefined"==typeof b?void 0:a.MIDI.noteValue(b),f="undefined"==typeof c?void 0:a.MIDI.noteValue(c);if("undefined"!=typeof e&&"undefined"!=typeof f&&e>f){var g=e;e=f,f=g}for(var h in this.keys)"undefined"!=typeof e&&e>h||"undefined"!=typeof f&&h>f||d.keys.push(h);return d},u.prototype.getWhiteKeys=function(b,c){var d=new v(this),e="undefined"==typeof b?void 0:a.MIDI.noteValue(b),f="undefined"==typeof c?void 0:a.MIDI.noteValue(c);if("undefined"!=typeof e&&"undefined"!=typeof f&&e>f){var g=e;e=f,f=g}for(var h in this.keys)if(!("undefined"!=typeof e&&e>h||"undefined"!=typeof f&&h>f)){var i=h%12;1!=i&&3!=i&&6!=i&&8!=i&&10!=i&&d.keys.push(h)}return d},u.prototype.getBlackKeys=function(b,c){var d=new v(this),e="undefined"==typeof b?void 0:a.MIDI.noteValue(b),f="undefined"==typeof c?void 0:a.MIDI.noteValue(c);if("undefined"!=typeof e&&"undefined"!=typeof f&&e>f){var g=e;e=f,f=g}for(var h in this.keys)if(!("undefined"!=typeof e&&e>h||"undefined"!=typeof f&&h>f)){var i=h%12;1!=i&&3!=i&&6!=i&&8!=i&&10!=i||d.keys.push(h)}return d},v.prototype.setInnerHTML=function(a){for(var b in this.keys)this.piano.keys[this.keys[b]].innerHTML=a;return this},v.prototype.setStyle=function(a,b){var c,d,e;"undefined"==typeof b&&(b=a);for(c in this.keys){e=this.keys[c];for(d in a)this.piano.stl0[e][d]=a[d];for(d in b)this.piano.stl1[e][d]=b[d];k(this.piano.keys[e],this.piano.playing[e]?this.piano.stl1[e]:this.piano.stl0[e]),k(this.piano.keys[e],this.piano.locs[e])}return this},w.prototype._info=function(a){return{type:"html/javascript",name:b(a,"Kbd"),manufacturer:"virtual",version:M}},w.prototype._openIn=function(b,c){var d=new u(this._arg);d.send=function(){b.send.apply(b,arguments)},d.connect=function(){b.connect.apply(b,arguments)},d.create(),d.mpe?(b._orig._mpe||(b._orig._mpe=a.MPE()),b._orig._mpe.setup(d.mpe[0],d.mpe[1]),d.noteOn=function(c){var d=a.MIDI(144+this.chan,c,127);d._mpe=c,b._emit(b._filter(d))},d.noteOff=function(c){var d=a.MIDI(128+this.chan,c,127);d._mpe=c,b._emit(b._filter(d))}):(d.noteOn=function(c){b._emit(a.MIDI(144+this.chan,c,127))},d.noteOff=function(c){b._emit(a.MIDI(128+this.chan,c,127))}),d.emit=function(a){b._emit(b._filter(a))},b._info=this._info(c),b._receive=function(a){d.forward(a)},b._close=function(){d._close()},b.settings=function(){return d.settings()},b.getKey=function(a){return d.getKey(a)},b.getKeys=function(a,b){return d.getKeys(a,b)},b.getWhiteKeys=function(a,b){return d.getWhiteKeys(a,b)},b.getBlackKeys=function(a,b){return d.getBlackKeys(a,b)},b._resume()},a.input.Kbd=function(){var b,c;1==arguments.length?"string"==typeof arguments[0]?b=arguments[0]:c=arguments[0]:(b=arguments[0],c=arguments[1]);var d=new w;return d._arg=c,a.lib.openMidiIn(b,d)},a.input.Kbd.register=function(){var b,c;1==arguments.length?"string"==typeof arguments[0]?b=arguments[0]:c=arguments[0]:(b=arguments[0],c=arguments[1]);var d=new w;return d._arg=c,a.lib.registerMidiIn(b,d)};var R={margin:0,padding:0,width:"100%",height:"100%"};x.prototype.setBase=function(a){a=parseFloat(a),!isNaN(a)&&isFinite(a)&&a>=0&&1>=a&&(this.base=a)},x.prototype.setValue=function(a){return a=parseFloat(a),isNaN(a)||!isFinite(a)||0>a||a>1||a==this.val?void 0:(this.val=a,this.num=Math.round(a*(this.lsb||!this.msb?16383:127)),!0)},x.prototype.emit=function(a){this.msb?this.lsb?(a.emit([176+this.chan,this.msb,this.num>>7]),a.emit([176+this.chan,this.lsb,127&this.num])):a.emit([176+this.chan,this.msb,this.num]):a.emit([224+this.chan,127&this.num,this.num>>7])},x.prototype.read=function(a){if(!this.msb&&a[0]==224+this.chan&&a[1]==parseInt(a[1])&&a[2]==parseInt(a[2]))return this.num=a[2]<<7|127&a[1],this.val=this.num/16383,!0;if(this.msb&&a[0]==176+this.chan&&a[2]==parseInt(a[2])){if(a[1]==this.msb)return this.lsb?(this.num=a[2]<<7|127&this.num,this.val=this.num/16383):(this.num=127&a[2],this.val=this.num/127),!0;if(a[1]==this.lsb)return this.num=16256&this.num|127&a[2],this.val=this.num/16383,!0}},y.prototype.setInnerHTML=function(a){return this.inner.innerHTML=a,this},y.prototype.setStyle=function(a,b){"undefined"==typeof b&&(b=a);var c;for(c in a)this.stl0[c]=a[c];for(c in b)this.stl1[c]=b[c];return k(this.span,this.ctrl.isSelected()?this.stl1:this.stl0),k(this.span,this.stl),this},z.prototype._close=function(){this.at&&(this.at.innerHTML=""),this.mouseUpHandler&&window.removeEventListener("mouseup",this.mouseUpHandler)},z.prototype.create=function(){for(var a=0,b=0;b<this.bins.length&&this.bins[b]<=window.innerWidth;b++)a=this.bins[b];this.current=this.params[a],this.createCurrent()},z.prototype.createCurrent=function(){this.at&&(this.at.innerHTML=""),"string"==typeof this.current.at&&(this.current.at=document.getElementById(this.current.at));try{this.createAt(this.current.at)}catch(a){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}},z.prototype.onResize=function(){for(var a=0,b=0;b<this.bins.length&&this.bins[b]<=window.innerWidth;b++)a=this.bins[b];this.current!=this.params[a]&&(this.current=this.params[a],this.createCurrent())},z.prototype.settings=function(){return c(this.current)},z.prototype.isSelected=function(){return"undefined"!=typeof this.dragX},z.prototype.restyle=function(){for(var a in this.spans)this.spans[a].setStyle()},z.prototype.onMouseDown=function(a){"undefined"==typeof this.dragX&&(this.dragX=a.clientX,this.dragY=a.clientY,this.mouseMove=C(this),this.mouseUp=D(this),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseup",this.mouseUp),this.restyle())},z.prototype.onMouseMove=function(a){"undefined"!=typeof this.dragX&&this.onMove(a.clientX,a.clientY)},z.prototype.onMouseUp=function(a){},z.prototype.onTouchStart=function(a){a.preventDefault(),"undefined"==typeof this.dragX&&(this.touch=a.targetTouches[0].identifier,this.dragX=a.targetTouches[0].clientX,this.dragY=a.targetTouches[0].clientY,this.restyle())},z.prototype.onTouchMove=function(a){if(a.preventDefault(),"undefined"!=typeof this.dragX&&"undefined"!=typeof this.touch)for(var b in a.targetTouches)if(a.targetTouches[0].identifier==this.touch)return void this.onMove(a.targetTouches[b].clientX,a.targetTouches[b].clientY)},z.prototype.onTouchEnd=function(a){a.preventDefault(),this.touch=void 0,this.dragX=void 0,this.restyle(),this.onMouseUp(a)},I.prototype=new z,I.prototype.createAt=function(a){a.innerHTML="";var b=parseInt(this.current.bh),c=parseInt(this.current.bw),d=parseInt(this.current.rh);d||(d=128),this.rh=d;var e=parseInt(this.current.rw);e||(e=2);var f=parseInt(this.current.kh);f||(f=24);var g=parseInt(this.current.kw);g||(g=16);var h=this.current.pos.toUpperCase();this.pos=h,this.data||(this.data=new x(this.current.data),this.data.chan=this.chan,this.data.setBase(this.current.base),this.data.setValue(this.current.val)),this.dx=-(g/2),this.dy=-(f/2+1),b||(b=f+d+2),c||(c=(g>e?g:e)+2),this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==h||"W"==h?(this.stlB.width=b+"px",this.stlB.height=c+"px",this.stlR.width=d+"px",this.stlR.height=e+"px",this.stlR.left=(b-d)/2-1+"px",this.stlR.top=(c-e)/2-1+"px",this.stlK.width=f+"px",this.stlK.height=g+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=c+"px",this.stlB.height=b+"px",this.stlR.width=e+"px",this.stlR.height=d+"px",this.stlR.top=(b-d)/2-1+"px",this.stlR.left=(c-e)/2-1+"px",this.stlK.width=g+"px",this.stlK.height=f+"px",this.stlK.left=this.dx+"px");var i=document.createElement("span");this.box=i;var l=document.createElement("span");k(l,R),this.boxSpan=new y(this,i,l,this.stlB,this.stlB0,this.stlB1);var m=document.createElement("span");this.range=m;var n=document.createElement("span");k(n,R),this.rangeSpan=new y(this,m,n,this.stlR,this.stlR0,this.stlR1);var o=document.createElement("span");this.knob=o,this.knobSpan=new y(this,o,o,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan];var p="undefined"==typeof this.current.active||this.current.active;if(p&&(i.addEventListener("touchstart",H),o.addEventListener("mousedown",B(this)),o.addEventListener("touchstart",E(this)),o.addEventListener("touchmove",F(this)),o.addEventListener("touchend",G(this))),this.current.onCreate&&this.current.onCreate.apply(this),m.appendChild(n),m.appendChild(o),i.appendChild(l),i.appendChild(m),i.ondragstart=j,i.onselectstart=j,a.appendChild(i),!this.at&&this.bins.length>1){var q=this;this.resize=function(){q.onResize()},window.addEventListener("resize",this.resize)}this.current.at=a,this.at=a,this.setValue(),k(this.box,"undefined"==typeof this.dragX?this.stlB0:this.stlB1),k(this.box,this.stlB),k(this.range,"undefined"==typeof this.dragX?this.stlR0:this.stlR1),k(this.range,this.stlR),k(this.knob,"undefined"==typeof this.dragX?this.stlK0:this.stlK1),k(this.knob,this.stlK)},I.prototype.getBox=function(){return this.boxSpan},I.prototype.getRange=function(){return this.rangeSpan},I.prototype.getKnob=function(){return this.knobSpan},I.prototype.setValue=function(a){if("undefined"==typeof a)a=this.data.val;else if(!this.data.setValue(a))return;a=this.data.val,"N"!=this.pos&&"W"!=this.pos||(a=1-a),a*=this.rh,this.coord=a,a+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.top=a+"px",this.knob.style.top=a+"px"):(this.stlK.left=a+"px",this.knob.style.left=a+"px")},I.prototype.onMove=function(a,b){var c;c="N"==this.pos||"S"==this.pos?this.coord+b-this.dragY:this.coord+a-this.dragX,0>c&&(c=0),c>this.rh&&(c=this.rh),this.move(c)},I.prototype.move=function(a){if(this.coord!=a){"N"==this.pos||"S"==this.pos?(this.knob.style.top=a+this.dy+"px",this.stlK.top=this.knob.style.top,this.dragY+=a-this.coord):(this.knob.style.left=a+this.dy+"px",this.stlK.left=this.knob.style.left,this.dragX+=a-this.coord);var b=a/this.rh;"N"!=this.pos&&"W"!=this.pos||(b=1-b),this.data.setValue(b)&&this.data.emit(this),this.coord=a}},I.prototype.forward=function(a){this.emit(a),this.data.read(a)&&this.setValue()},J.prototype=new z,J.prototype.createAt=function(a){a.innerHTML="";var b=parseInt(this.current.bh),c=parseInt(this.current.bw),d=parseInt(this.current.rh);d||(d=128),this.rh=d;var e=parseInt(this.current.rw);e||(e=128),this.rw=e;var f=parseInt(this.current.kh);f||(f=24);var g=parseInt(this.current.kw);g||(g=16);var h=this.current.pos.toUpperCase();this.pos=h,this.dataX||(this.dataX=new x(this.current.dataX),this.dataY=new x(this.current.dataY),"undefined"!=typeof this.current.dataX||"undefined"==typeof this.current.dataY||this.dataY.msb||(this.dataX=new x("mod")),"undefined"!=typeof this.current.dataY||this.dataX.msb||(this.dataY=new x("mod")),this.dataX.chan=this.chan,this.dataY.chan=this.chan,this.dataX.setBase(this.current.baseX),this.dataY.setBase(this.current.baseY),this.dataX.setValue(this.current.valX),this.dataY.setValue(this.current.valY)),this.dx=-(g/2+1),this.dy=-(f/2+1),b||(b=f+d+2),c||(c=g+e+2),this.stlB={display:"inline-block",position:"relative",margin:"0",padding:"0",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",OUserSelect:"none",WebkitUserSelect:"none",cursor:"default"},this.stlB0={borderStyle:"none"},this.stlB1={borderStyle:"none"},this.stlR={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlR0={backgroundColor:"#aaa"},this.stlR1={backgroundColor:"#bbb"},this.stlK={display:"inline-block",position:"absolute",margin:"0",padding:"0",borderStyle:"solid",borderWidth:"1px"},this.stlK0={backgroundColor:"#ddd"},this.stlK1={backgroundColor:"#eee"},"E"==h||"W"==h?(this.stlB.width=b+"px",this.stlB.height=c+"px",this.stlR.width=d+"px",this.stlR.height=e+"px",this.stlR.left=(b-d)/2-1+"px",this.stlR.top=(c-e)/2-1+"px",this.stlK.width=f+"px",this.stlK.height=g+"px",this.stlK.top=this.dx+"px"):(this.stlB.width=c+"px",this.stlB.height=b+"px",this.stlR.width=e+"px",this.stlR.height=d+"px",this.stlR.top=(b-d)/2-1+"px",this.stlR.left=(c-e)/2-1+"px",this.stlK.width=g+"px",this.stlK.height=f+"px",this.stlK.left=this.dx+"px");var i=document.createElement("span");this.box=i;var l=document.createElement("span");k(l,R),this.boxSpan=new y(this,i,l,this.stlB,this.stlB0,this.stlB1);var m=document.createElement("span");this.range=m;var n=document.createElement("span");k(n,R),this.rangeSpan=new y(this,m,n,this.stlR,this.stlR0,this.stlR1);var o=document.createElement("span");this.knob=o,this.knobSpan=new y(this,o,o,this.stlK,this.stlK0,this.stlK1),this.spans=[this.boxSpan,this.rangeSpan,this.knobSpan];var p="undefined"==typeof this.current.active||this.current.active;if(p&&(i.addEventListener("touchstart",H),o.addEventListener("mousedown",B(this)),o.addEventListener("touchstart",E(this)),o.addEventListener("touchmove",F(this)),o.addEventListener("touchend",G(this))),this.current.onCreate&&this.current.onCreate.apply(this),m.appendChild(n),m.appendChild(o),i.appendChild(l),i.appendChild(m),i.ondragstart=j,i.onselectstart=j,a.appendChild(i),!this.at&&this.bins.length>1){var q=this;this.resize=function(){q.onResize()},window.addEventListener("resize",this.resize)}this.current.at=a,this.at=a,this.setValue(),k(this.box,"undefined"==typeof this.dragX?this.stlB0:this.stlB1),k(this.box,this.stlB),k(this.range,"undefined"==typeof this.dragX?this.stlR0:this.stlR1),k(this.range,this.stlR),k(this.knob,"undefined"==typeof this.dragX?this.stlK0:this.stlK1),k(this.knob,this.stlK)},J.prototype.getBox=function(){return this.boxSpan},J.prototype.getRange=function(){return this.rangeSpan},J.prototype.getKnob=function(){return this.knobSpan},J.prototype.setValue=function(a,b){if("undefined"==typeof a)a=this.dataX.val,b=this.dataY.val;else if(!this.dataX.setValue(a)&&!this.dataY.setValue(b))return;a=this.dataX.val,b=this.dataY.val,"N"!=this.pos&&"W"!=this.pos||(b=1-b),"S"!=this.pos&&"W"!=this.pos||(a=1-a),a*=this.rw,b*=this.rh,"N"==this.pos||"S"==this.pos?(this.coordX=a,this.coordY=b):(this.coordX=b,this.coordY=a),a+=this.dx,b+=this.dy,"N"==this.pos||"S"==this.pos?(this.stlK.left=a+"px",this.stlK.top=b+"px"):(this.stlK.top=a+"px",this.stlK.left=b+"px"),this.knob.style.left=this.stlK.left,this.knob.style.top=this.stlK.top},J.prototype.onMove=function(a,b){a=this.coordX+a-this.dragX,b=this.coordY+b-this.dragY,0>a&&(a=0),0>b&&(b=0),"N"==this.pos||"S"==this.pos?(a>this.rw&&(a=this.rw),b>this.rh&&(b=this.rh),this.knob.style.left=a+this.dx+"px",this.knob.style.top=b+this.dy+"px"):(a>this.rh&&(a=this.rh),b>this.rw&&(b=this.rw),this.knob.style.left=a+this.dy+"px",this.knob.style.top=b+this.dx+"px"),this.stlK.left=this.knob.style.left,this.stlK.top=this.knob.style.top,this.dragX+=a-this.coordX,this.dragY+=b-this.coordY,this.coordX=a,this.coordY=b,"E"!=this.pos&&"W"!=this.pos||(a=this.coordY,b=this.coordX),a/=this.rw,b/=this.rh,"N"!=this.pos&&"W"!=this.pos||(b=1-b),"S"!=this.pos&&"W"!=this.pos||(a=1-a),this.dataX.setValue(a)&&this.dataX.emit(this),this.dataY.setValue(b)&&this.dataY.emit(this)},J.prototype.forward=function(a){this.emit(a),(this.dataX.read(a)||this.dataY.read(a))&&this.setValue()},K.prototype._info=function(a){return{type:"html/javascript",name:b(a,"Slider"),manufacturer:"virtual",version:M}},K.prototype._openIn=function(a,b){var c=new I(this._arg);c.connect=function(){a.connect.apply(a,arguments)},c.send=function(){a.send.apply(a,arguments)},c.create(),c.emit=function(b){a._emit(b)},a._info=this._info(b),a._receive=function(a){c.forward(a)},a._close=function(){c._close()},a.settings=function(){return c.settings()},a.getBox=function(){return c.boxSpan},a.getRange=function(){return c.rangeSpan},a.getKnob=function(){return c.knobSpan},a.setValue=function(a){c.setValue(a)},a._resume()},a.input.Slider=function(){var b,c;1==arguments.length?"string"==typeof arguments[0]?b=arguments[0]:c=arguments[0]:(b=arguments[0],c=arguments[1]);var d=new K;return d._arg=c,a.lib.openMidiIn(b,d)},a.input.Slider.register=function(){var b,c;1==arguments.length?"string"==typeof arguments[0]?b=arguments[0]:c=arguments[0]:(b=arguments[0],c=arguments[1]);var d=new K;return d._arg=c,a.lib.registerMidiIn(b,d)},L.prototype._info=function(a){return{type:"html/javascript",name:b(a,"Pad"),manufacturer:"virtual",version:M}},L.prototype._openIn=function(a,b){var c=new J(this._arg);c.connect=function(){a.connect.apply(a,arguments)},c.send=function(){a.send.apply(a,arguments)},c.create(),c.emit=function(b){a._emit(b)},a._info=this._info(b),a._receive=function(a){c.forward(a)},a._close=function(){c._close()},a.settings=function(){return c.settings()},a.getBox=function(){return c.boxSpan},a.getRange=function(){return c.rangeSpan},a.getKnob=function(){return c.knobSpan},a.setValue=function(a){c.setValue(a)},a._resume()},a.input.Pad=function(){var b,c;1==arguments.length?"string"==typeof arguments[0]?b=arguments[0]:c=arguments[0]:(b=arguments[0],c=arguments[1]);var d=new L;return d._arg=c,a.lib.openMidiIn(b,d)},a.input.Pad.register=function(){var b,c;1==arguments.length?"string"==typeof arguments[0]?b=arguments[0]:c=arguments[0]:(b=arguments[0],c=arguments[1]);var d=new L;return d._arg=c,a.lib.registerMidiIn(b,d)}}});