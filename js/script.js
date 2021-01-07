function updateclock(){
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM"

        if(hou == 0){
            hou = 12;
        }
        if(hou > 12){
            hou = hou - 12;
            pe = "PM"
        }

        Number.prototype.pad = function(digits) {
            for(var n = this.toString();n.length < digits; n = 0 + n);
            return n;
        }

        var months = ["january", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynm", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
    updateclock()
    window.setInterval("updateclock()", 1)

}

function fig(figure) {
    input.innerText +=figure
}
function ac() {
    input.innerText = ""
    output.innerText = "0"
}
input.style.display = "none"
output.style.display = "none"
function On() {
    if (on.innerText == "ON"){
        input.style.display  = "block"
        output.style.display = "block"
        input.innerText = ""
        output.innerText = "0"
        on.innerText = "OFF"
        } else {
            input.style.display  = "none"
            input.innerText = ""
            output.innerText = "0"
            output.style.display = "none"
            on.innerText = "ON"
        }
}
function opp(operation){
    input.innerText += operation
}

function eqaul(){
    var b = input.innerText
    if(b.search("sin") == -1 && b.search("cos") == -1 && b.search("tan") == -1 && b.search("log") == -1 && b.search("√") == -1){
        output.innerText = eval(input.innerText).toPrecision(5)
    } else if(b.search("sin") != -1) {
        var g = b.replace("sin", "(Math.PI/180)*")

        var kk = (eval(g))
        var ff = Math.sin(kk)
        var ss = ff.toPrecision(4);
        output.innerText= ss;
    } else if(b.search("cos") != -1) {
        var g = b.replace("cos", "(Math.PI/180)*")

        var kk = (eval(g))
        var ff = Math.cos(kk)
        var ss = ff.toPrecision(4);
        output.innerText= ss;
    } else if(b.search("tan") != -1) {
        var g = b.replace("tan", "(Math.PI/180)*")

        var kk = (eval(g))
        var ff = Math.tan(kk)
        var ss = ff.toPrecision(4);
        output.innerText= ss;
    } else if(b.search("log") != -1) {
        var g = b.replace("log", "Math.log10")

        var kk = (eval(g))
        var ss = kk.toPrecision(4);
        output.innerText= ss;
    } else if(b.search("√") != -1) {
        var g = b.replace("√", "Math.sqrt")

        var kk = (eval(g))
        var ss = kk.toPrecision(4);
        output.innerText= ss;
    } else if(input.innerText="") {
        output.innerText = "0"
    }
}
function sayope(ope){
    input.innerText += ope
}
function del(){
    input.innerText = input.innerText.substr(0,input.innerText.length-1)
}
function answer(){
    input.innerText =  output.innerText
}