!function(){var e=this,t="undefined"==typeof global?e:e.window,a={},n=!1,i={},l={65:"Cl",87:"C#l",83:"Dl",69:"D#l",68:"El",70:"Fl",84:"F#l",71:"Gl",89:"G#l",90:"G#l",72:"Al",85:"A#l",74:"Bl",75:"Cu",79:"C#u",76:"Du",80:"D#u",59:"Eu",186:"Eu",222:"Fu",221:"F#u",220:"Gu"},d=function(e){return Math.floor((a.width-e)/e)},s=function(e){var t,o;return o=3===e.length?e.charAt(2):e.charAt(1),t=(t=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"].indexOf(e.slice(0,-1)))<3?t+12+12*(o-1)+1:t+12*(o-1)+1,440*Math.pow(2,(t-49)/12)},u=function(e){null===e&&void 0!==typeof e||(e.style.backgroundColor=a.activeColour)},c=function(e){null!==e&&("white"===e.getAttribute("data-note-type")?e.style.backgroundColor=a.whiteKeyColour:e.style.backgroundColor=a.blackKeyColour)},h=function(e){var t,o=0,n=e.length,r=[];for(t=0;t<n;t++)if(a.startNote.charAt(0)===e[t]){o=t;break}for(t=0;t<n;t++)r[t]=n-1<t+o?e[t+o-n]:e[t+o];return r},o=function(e){var t,o,n,r;e.el.style.display="inline-block",e.el.style["-webkit-user-select"]="none","white"===e.colour?((r=e).el.style.backgroundColor=a.whiteKeyColour,r.el.style.border="1px solid "+a.borderColour,r.el.style.borderRight=0,r.el.style.height=a.height+"px",r.el.style.width=r.width+"px",r.el.style.borderRadius="0 0 5px 5px",r.noteNumber===k()-1&&(r.el.style.border="1px solid "+a.borderColour)):(t=e,o=d(k()),n=Math.floor(o/2),t.el.style.backgroundColor=a.blackKeyColour,t.el.style.border="1px solid "+a.borderColour,t.el.style.position="absolute",t.el.style.left=Math.floor((o+1)*(t.noteNumber+1)-n/2)+"px",t.el.style.width=n+"px",t.el.style.height=a.height/1.5+"px",t.el.style.borderRadius="0 0 3px 3px")},y=function(e,t){"li"==e.tagName.toLowerCase()&&(n=!0,u(e),t(e.title,s(e.title)))},f=function(e,t){"li"==e.tagName.toLowerCase()&&(n=!1,c(e),t(e.title,s(e.title)))},p=function(e,t){n&&(c(e),t(e.title,s(e.title)))},g=function(e){return e.el=document.createElement("li"),e.el.id=e.id,e.el.title=e.id,e.el.setAttribute("data-note-type",e.colour),o(e),e},k=function(){return 7*a.octaves},r=function(){var e,t,o,n,r={container:document.getElementById(a.id),el:document.createElement("ul"),whiteNotes:h(["C","D","E","F","G","A","B"]),notesWithSharps:h(["C","D","F","G","A"])};return r.keys=function(){var o,n,r=this,i=[],l=0,s=a.startOctave,u=k();for(o=0;o<u;o++)o%this.whiteNotes.length==0&&(l=0),bizarre_note_counter=this.whiteNotes[l],"C"===bizarre_note_counter&&0!==o&&s++,n=g({colour:"white",octave:s,width:d(u),id:this.whiteNotes[l]+s,noteNumber:o}),i.push(n.el),o!==u-1&&this.notesWithSharps.forEach(function(e,t){e===r.whiteNotes[l]&&(n=g({colour:"black",octave:s,width:d(u)/2,id:r.whiteNotes[l]+"#"+s,noteNumber:o}),i.push(n.el))}),l++;return i}.call(r),e=r.whiteNotes,a.keyPressOffset="C"===e[0]?0:1,(o=function(e){e.style.cursor="default",e.style.fontSize="0px",e.style.height=a.height+"px",e.style.padding=0,e.style.position="relative",e.style.listStyle="none",e.style.margin=0,e.style.width=a.width+"px",e.style["-webkit-user-select"]="none"})((t=r).container),o(t.el),(n=r).keys.forEach(function(e){n.el.appendChild(e)}),r.container.appendChild(r.el),r},w=function(e){return l[e].replace("l",parseInt(a.startOctave,10)+a.keyPressOffset).replace("u",(parseInt(a.startOctave,10)+a.keyPressOffset+1).toString())},v=function(e){var r=this;t.addEventListener("keydown",function(e){var t,o,n;t=e,o=r.keyDown,t.keyCode in i||(i[t.keyCode]=!0,void 0!==l[t.keyCode]&&(o(n=w(t.keyCode),s(n)),u(document.getElementById(n))))}),t.addEventListener("keyup",function(e){var t,o,n;t=e,o=r.keyUp,delete i[t.keyCode],void 0!==l[t.keyCode]&&(o(n=w(t.keyCode),s(n)),c(document.getElementById(n)))}),e.addEventListener("mousedown",function(e){y(e.target,r.keyDown)}),e.addEventListener("mouseup",function(e){f(e.target,r.keyUp)}),e.addEventListener("mouseover",function(e){var t,o;t=e.target,o=r.keyDown,n&&(u(t),o(t.title,s(t.title)))}),e.addEventListener("mouseout",function(e){p(e.target,r.keyUp)}),"ontouchstart"in document.documentElement&&(e.addEventListener("touchstart",function(e){y(e.target,r.keyDown)}),e.addEventListener("touchend",function(e){f(e.target,r.keyUp)}),e.addEventListener("touchleave",function(e){p(e.target,r.keyUp)}),e.addEventListener("touchcancel",function(e){p(e.target,r.keyUp)}))},C=function(e){this.version="0.5.1",this.keyDown=function(){},this.keyUp=function(){},function(e){var t;user_settings=e||{},a={id:user_settings.id||"keyboard",octaves:user_settings.octaves||3,width:user_settings.width,height:user_settings.height,startNote:user_settings.startNote||"A3",whiteKeyColour:user_settings.whiteKeyColour||"#fff",blackKeyColour:user_settings.blackKeyColour||"#000",activeColour:user_settings.activeColour||"yellow",borderColour:user_settings.borderColour||"#000",keyboardLayout:user_settings.keyboardLayout||"en"},t=document.getElementById(a.id),void 0===a.width&&(a.width=t.offsetWidth),void 0===a.height&&(a.height=t.offsetHeight),a.startOctave=parseInt(a.startNote.charAt(1),10),r(),v.call(this,t)}.call(this,e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=C),exports.QwertyHancock=C):e.QwertyHancock=C}();