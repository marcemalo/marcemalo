let $result = document.querySelector("#result");

let renderData = (data) => {
    $result.innerHTML = "";
    data.forEach((item) => {
        $result.innerHTML += `
        <div  style="max-width: 400px;  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; display-flex;max-hight: 400px;" class="card">
            <a href="./single.html"><img style="max-width:400px;display-flex" src="${item.image}" alt="img"><a/>
            <h3>${item.title} ${item.description}</h3>
            <br>
        </div>
        <br>
        <br>
        `;
    });
};

fetch("https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs")
    .then((response) => response.json())
    .then((data) => renderData(data.data));
