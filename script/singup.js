let arr=JSON.parse(localStorage.getItem("singup"))||[];
document.querySelector("form").addEventListener("submit",singup);
function singup(){
    event.preventDefault();
    
    let obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        number:document.querySelector("#last-name").value,
        pass:document.querySelector("#password").value,
    };
    arr.push(obj);
    localStorage.setItem("singup",JSON.stringify(arr));
    
    window.location.href="login.html";
}
