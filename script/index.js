let first=[ {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/cb/ed/caption.jpg?w=300&h=300&s=1",
head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/0c/e8/caption.jpg?w=300&h=300&s=1",
    head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/71/c0/4d/caption.jpg?w=300&h=300&s=1",
    head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/ea/82/caption.jpg?w=300&h=300&s=1",
    head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"}]
let arr=[
    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/cb/ed/caption.jpg?w=300&h=300&s=1",
head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/0c/e8/caption.jpg?w=300&h=300&s=1",
    head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/71/c0/4d/caption.jpg?w=300&h=300&s=1",
    head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/ea/82/caption.jpg?w=300&h=300&s=1",
    head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},

    {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f5/18/12/coffee-plant-laden-with.jpg?w=300&h=300&s=1",
    head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
        {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f1/42/c3/caption.jpg?w=300&h=300&s=1",
        head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
        {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/0e/f6/1f/caption.jpg?w=300&h=300&s=1",
        head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
        {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/64/5f/f1/caption.jpg?w=300&h=300&s=1",
        head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},

        {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/cb/ed/caption.jpg?w=300&h=300&s=1",
        head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
            {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/97/0c/e8/caption.jpg?w=300&h=300&s=1",
            head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
            {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/71/c0/4d/caption.jpg?w=300&h=300&s=1",
            head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
            {image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5a/ea/82/caption.jpg?w=300&h=300&s=1",
            head:"Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",para:"from CHF 200 per adult"},
];

first.forEach(function(ele){
    let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",ele.image);
        let h=document.createElement("h3");
        h.innerText=ele.head
        let p=document.createElement("p");
        p.innerText=ele.para
        div.append(img,h,p);
        div.setAttribute("id","first")
        document.getElementById("exp").append(div);
})


let count=4;
let coun=0;
document.getElementById("rightbtn").addEventListener("click",right);
function right(){
    let fre=0;
    if(count<12){
    document.getElementById("exp").innerHTML=""
    for(let i=count; i<arr.length; i++){
        count++;
        fre++;
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",arr[i].image);
        let h=document.createElement("h3");
        h.innerText=arr[i].head
        let p=document.createElement("p");
        p.innerText=arr[i].para
        div.append(img,h,p);
        document.getElementById("exp").append(div);
        if(fre==4){
            break;
        }
    }
    coun++;
}
document.getElementById("leftbtn").addEventListener("click",left);
}
function left(){
    let fre=0;
    if(count>=4 && coun>0){
        coun--;
    document.getElementById("exp").innerHTML=""
    for(let i=count-8; i<arr.length; i++){
        // count++;
        fre++;
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",arr[i].image);
        let h=document.createElement("h3");
        h.innerText=arr[i].head
        let p=document.createElement("p");
        p.innerText=arr[i].para
        div.append(img,h,p);
        document.getElementById("exp").append(div);
        if(fre==4){
            break;
        }
    }
    console.log(count);
}
}


