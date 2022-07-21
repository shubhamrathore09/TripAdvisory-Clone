let sing=JSON.parse(localStorage.getItem("singup"));
document.querySelector("form").addEventListener("submit",login)
function login(){
    let arr=[];
    event.preventDefault();
    let obj={
        email:document.querySelector("#email").value,
        pass:document.querySelector("#password").value
    }
    arr.push(obj);
    console.log(arr)
    let count=0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<sing.length; j++){
            if(arr[i].email==sing[j].email){
                count=1;
                if(arr[i].pass==sing[j].pass){
                count=2
                break;
             }
            }
            else{
                count=0
            }
        }
    }
    if(count==1){
        alert("Wrong password")
    }
    else if(count==2){
        alert("succefully login")
    }
    else{
        alert("details not found")
    }
}