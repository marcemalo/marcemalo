const url =  location.href;
const Blog = new URLSearchParams(url).get("blog_id");
const $blogimage = document.querySelector(".product-image")
const $blogtitle = document.querySelector(".product-title")


const renderData = (blog) => {
    console.log(blog)
     $blogimage.src = data.image;
     $blogtitle.innerText = data.title;
}


const loadData = () => {
     fetch(`https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/${Blog}`)
     .then(response => response.json())
     .then(data => renderData(data))
}
loadData();