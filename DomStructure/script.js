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
 var img = document.createElement("img");
 img.setAttribute("src", "https://i.pinimg.com/736x/d5/0b/d2/d50bd25b9cc865495b31a97e7a1eed18.jpg");
 img.setAttribute("width", "300");
 img.setAttribute("height", "300");
 document.body.appendChild(img);

 document.body.append("sham")
 
//  inneText and innerHTML
 const para = document.createElement('p')
 para.innerHTML='<span style="color:red">Red</span> <span style="color:green">Green</span> <span style="color:blue">Blue</span>'
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