let data=JSON.parse(localStorage.getItem("reviewdata"))||[];

if(data.length>0){
    let h=document.createElement("h1");
    h.innerText="Have you been here?"
    let p=document.createElement("p");
    p.innerText="Travellers want to see more reviews of these places."
    document.querySelector("#reviewdata").append(h,p)
}

data.forEach(function(ele){
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",ele.img);
    let h3=document.createElement("h3");
    h3.innerText=ele.ha;
    div.append(img,h3);
    div.addEventListener("click",function(){
        display(ele);
    })
    document.querySelector("#reviewpic").append(div);
})

let readreviewdata=JSON.parse(localStorage.getItem("read-review"))||[];

function display(ele){
    event.preventDefault()
  let div=document.createElement("div");
  let form=document.createElement("form");
  let label=document.createElement("label");
  label.innerText="Title of your review";
  let input=document.createElement("input");
  input.setAttribute("type","text");
  input.setAttribute("id","title")
  let label2=document.createElement("label");
  label2.innerText="Your review";
  let input2=document.createElement("input");
  input2.setAttribute("type","text");
  input2.setAttribute("id","detailReview")
  let h3=document.createElement("h3");
  h3.innerText=ele.ha;

  let label3=document.createElement("label");
  label3.innerText="When did you travel?"

  let select=document.createElement("select");

  let opt=document.createElement("option");
  opt.innerText="jan-2022";

  let opt1=document.createElement("option");
  opt1.innerText="feb-2022";

  let opt2=document.createElement("option");
  opt2.innerText="mar-2022";

  let opt3=document.createElement("option");
  opt3.innerText="april-2022";

  let opt4=document.createElement("option");
  opt4.innerText="may-2022";

  let opt5=document.createElement("option");
  opt5.innerText="june-2022";

  let opt6=document.createElement("option");
  opt6.innerText="july-2022";

  select.append(opt,opt1,opt2,opt3,opt4,opt5);
  select.setAttribute("id","select")

  let label4=document.createElement("label");
  label4.innerText="Enter your full-name"
  let input3=document.createElement("input");
  input3.setAttribute("type","text");
  input3.setAttribute("id","fullname");




  

  let divch=document.createElement("div");
  let inputch=document.createElement("input");
  inputch.setAttribute("type","checkbox");
  let pp=document.createElement("p");
  pp.innerText="I certify that this review is based on my own experience and is my genuine opinion of this establishment and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero-tolerance policy on fake reviews."

  divch.append(inputch,pp);
  divch.setAttribute("id","divch")

  let inputs=document.createElement("input");
  inputs.setAttribute("type","submit");


  inputs.addEventListener("click",function(){
    event.preventDefault()
    
    let obj={
        title:document.querySelector("#title").value,
        detai:document.querySelector("#detailReview").value,
        fullname:document.querySelector("#fullname").value,
        month:document.querySelector("#select").value,
        name:ele.ha,
        img:ele.img,
    }
    readreviewdata.push(obj);
    localStorage.setItem("read-review",JSON.stringify(readreviewdata));
  })





  form.append(h3, label,input,label2,input2,label3,select,label4,input3,divch,inputs);
  form.setAttribute("id","formreview");
  
  div.append(form);
  div.setAttribute("id","addreview");

  let div2=document.createElement("div");
  let img=document.createElement("img");
  img.setAttribute("src",ele.img);

  

  div2.append(img,div)

  document.querySelector("#reviewpic").innerHTML=""

  document.querySelector("#reviewpic").append(div2)

}

// function readReview(){
//     let 
// }
