let data=JSON.parse(localStorage.getItem("read-review"))||[];


data.forEach(function(ele){

    let maindiv=document.createElement("div");

    let div=document.createElement("div");

    let h=document.createElement("h2");
    h.innerText=ele.name;
    let h1=document.createElement("h4");
    h1.innerText="Title of Review:-  "+ele.title;

    let p=document.createElement("p");
    p.innerText="Detail of Review:-  "+ele.detai;

    let se=document.createElement("h5");
    se.innerText="Month of Review:-  "+ele.month;

    let name=document.createElement("h4");
    name.innerText="Person Name:-  "+ele.fullname;

    div.append(h,h1,p,name,se);
    let div2=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",ele.img);
    div2.append(img);
    
    maindiv.append(div2,div);
    maindiv.setAttribute("id","maindiv");
    document.querySelector("#contain").append(maindiv)

})