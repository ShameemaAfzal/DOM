// DOM - Day 1 - Document Object Model

var a = document.getElementsByTagName('p')
for(var i = 0; i<a.length; i++){
    if(i % 2 == 0){
        a[i].style.color = 'red'
    }else{
        a[i].style.color = 'blue'
    } 
}
var b = document.getElementsByTagName("img")
b[0].style.height = "300px"
b[0].style.width = "400px"

var c = document.getElementById("para2")
console.log(c.innerHTML)

var t = document.getElementsByClassName("para1")
console.log(t[0])
console.log(t[1])

var d = document.createElement("p")
d.innerHTML = "content of appended paragraph"
document.body.appendChild(d);

// append image tag to the body - diff b/w appendChild and append
// appendChild() -> only accepts tag parameter
// append() -> accepts tag and string parameter as well
 var img = document.createElement("img");
 img.setAttribute("src", "https://i.pinimg.com/736x/d5/0b/d2/d50bd25b9cc865495b31a97e7a1eed18.jpg");
 img.setAttribute("width", "300");
 img.setAttribute("height", "300");
 document.body.appendChild(img);

 document.body.append("sham")
 
//  inneText and innerHTML
 const para = document.createElement('p')
 para.innerHTML='<span style="color:purple">Purple</span> <span style="color:grey">Grey</span> <span style="color:yellow">Yellow</span>'
 document.getElementById("div1").appendChild(para);

//  Query Selector
 const quepara = document.querySelector('p')
 console.log(quepara)

 const queallpara = document.querySelectorAll('p')
 console.log(queallpara)

 const queclasspara = document.querySelectorAll('p.para1')
 console.log(queclasspara)

 const queidpara = document.querySelectorAll('p#para2');
 console.log(queidpara)

 document.body.style.backgroundColor = "pink";
 var anch = document.createElement("a")
 anch.setAttribute("href", "https://www.google.com/")
 anch.innerText = "Google"
 anch.style.color = "red"
 anch.target = "_blank"
 document.body.appendChild(anch)

//  DOM - Day 2 - Window vs Document

console.log(window.location.href) // to print url
console.log(window.location.protocol) // to print protocol

alert("This is an alert concept") // alert popup concept

var a = confirm("is this a confirm concept?") // confirm pop up concept
console.log(a)
if(a == true){
    document.body.style.backgroundColor = "green";
}
else{
    document.body.style.backgroundColor = "red";
}

var b = prompt("what is your name?") // prompt pop up concept
console.log(b)
document.body.append(b)

// setTimeout function
setTimeout(()=>{
    console.log("I got executed after 3 seconds")
},3000)


// on-going session tasks

setTimeout(function(){
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "blue"
}, 5000);

setTimeout(function(){
    let para = document.createElement("p")
    para.innerHTML = prompt("Enter a paragraph");
    document.body.appendChild(para);
}, 10000);

setTimeout(function(){
    var image = document.createElement("img");
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCsMBOAM9hWmfSpH3atS75RcKdnIozOahVQ&s";
    image.setAttribute("id","img1")
    document.body.append(image);
}, 15000);

setTimeout(function(){
    let removing = window.confirm("Do you want to delete this image?"); // we should write pop-ups inside the timeout function as window.confirm
    if(removing){
        document.getElementById("img1").remove();
    }
}, 20000);


//Set Interval function is to execute the same thing present inside the function with the respective given interval of time.

setInterval(()=>{
    console.log("Hello world")
},1000) // after 1s it prints "hellow world" in the console, again wait for 1s and again print the same likewise it goes

setInterval(()=>{
    let div2 = document.createElement('p');
    div2.innerText = "This is set interval";
    document.body.append(div2);
},1000);

// To make a clock to show time using setInterval
// get the time first

setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    document.getElementById('timer').innerHTML = `${hour} : ${min} : ${sec}`;
},1000);

//Events
function myfunc() {
    console.log("Clicked")
}
function myfunc1() {
    var name = prompt("Enter your name");
    if(name!=null){
        var p = document.createElement("p");
        p.innerHTML = "Name: "+name;
        document.body.appendChild(p);
    }
}
function myfunc2() {
    var email = prompt("Enter your email");
    if(email!=null){
        var p = document.createElement("p");
        p.innerHTML = "Email: "+email;
        document.body.appendChild(p);
    }
}
function myfunc3(){
    document.getElementById("timer").innerHTML = "mouseover is on";
}
function myfunc4(tag){
    tag.innerHTML = "mouseover is off";
}

// Session task 4
//Task is to create a square give it a color red, when mouseover, change them to color blue, when mouseout, change the color to red, when clicked, change them to color yellow.
var div = document.createElement('div');
div.style.height = '100px';
div.style.width = '100px';
div.style.backgroundColor = 'red';
div.style.margin = 'auto';
div.style.marginTop = '100px';
div.setAttribute('id', 'square');
div.setAttribute('onmouseover', 'changeColor1()');
div.setAttribute('onmouseout', 'changeColor2()');
div.setAttribute('onclick', 'changeColor3()');
document.body.appendChild(div);

function changeColor1() {
    document.getElementById('square').style.backgroundColor = 'blue';
}

function changeColor2() {
    document.getElementById('square').style.backgroundColor = 'red';
}

function changeColor3() {
    document.getElementById('square').style.backgroundColor = 'yellow';
}

// Session Task 5
// Make a button that will toggle the background color to pink and yellow on every click
var button = document.createElement('button');
button.innerHTML = 'Click me';
button.setAttribute('onclick', 'changeColor4()');
document.body.appendChild(button);

function changeColor4(){
    var currentColor = document.body.style.backgroundColor;
    currentColor === 'pink' ? document.body.style.backgroundColor ='aqua' : document.body.style.backgroundColor ='pink'; //Using ternary operator or we can use if/else also
}