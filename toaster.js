// Author : Shivam kumar
// Date : 24-08-2020

((window) => {
    'use strict'
    var x,type;
    function toasterInit() {
        var Toaster = {};
        return Toaster
    }

    if (typeof (Toaster) == "undefined") {
        window.Toaster = toasterInit()
    }

    Toaster.init = (container,classname) => {
        x = document.getElementById(container);
        x.className = classname;
    }

    Toaster.toast = (msg,type="default",time=3000) => {
        type = type;
        x.innerHTML = msg;
        let sec = time / 1000;
        sec -= 0.5;
        sec += "s"
        x.style.visibility = "visible"
        x.style.animation = "fadein 0.5s, fadeout 0.5s "+sec
        x.style['-webkit-animation'] = "fadein 0.5s, fadeout 0.5s "+sec 
        x.className +=" " +type;
        setTimeout(() => { 
            x.style.visibility = ""
            x.style.animation = ""
            x.style['-webkit-animation'] = ""
         }, time);
    }
    
})(window)
