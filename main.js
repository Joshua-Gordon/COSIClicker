function step() {
  var r = getReeces();
  var re1 = getReeceE("js");
  var re2 = getReeceE("memes");
  addResource("javascript",r*re1);
  addResource("memes",r*re2);
}

function addLineOfCodeStart() {
  var js = document.getElementById("javascript");
  var count = parseInt(js.children[0].innerHTML) + 1;
  js.children[0].innerHTML = count;
  if(count > 20) {
    document.getElementById("upgrades").style = "";
    document.getElementById("workerlist").style = "";
    document.getElementById("btn").onclick = addJS1;
    setInterval(step,1000);
  }
}

function addJS1() {
  addResource("javascript",1);
}

function getResource(name) {
  return parseFloat(document.getElementById(name).children[0].innerHTML);
}

function addResource(name,amt) {
  var old = getResource(name);
  document.getElementById(name).children[0].innerHTML = old+amt
}

function getReeces() {
  return parseInt(document.getElementById("workerlist").
  children[0].children[0].children[0].innerHTML);
}

function getReeceE(name) {
  var idx = -1;
  if(name == "js") idx = 1;
  if(name == "memes") idx = 2;
  var r =  parseFloat(document.getElementById("workerlist").
  children[0].children[0].children[idx].innerHTML);
  return r;
}

function setReeces(arg) {
  document.getElementById("workerlist").
  children[0].children[0].children[0].innerHTML = arg;
}

function reeceFirst() {
  var count = getResource("javascript");
  if(count >= 20) {
    document.getElementById("memes").style="";
    document.getElementById("reecebtn").onclick=reece;
    reece();
  }
}

function reece() {
  var count = getResource("javascript");
  if(count >= 20) {
    console.log("Adding one reece");
    addResource("javascript",-20);
    var num = getReeces();
    setReeces(num+1);
  }
}
