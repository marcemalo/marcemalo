const $loginForm = document.querySelector("#login-form")

const loginUser = (e) =>{
    e.preventDefault();
    const email = e.target.children[0].value;
    const password = e.target.children[1].value;
    fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/user/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then((data) => {
        if (data.status == "success") {
            window.location.href = "./dashboard.html";
        } else {
            alert("Sorry its eror");
        }
    });

}