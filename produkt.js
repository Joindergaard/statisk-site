const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then((response) => response.json())
.then(dataReceived);

function dataReceived(product) {
    console.log(product)

       document.querySelector("h2").textContent = product.productdisplayname;
    document.querySelector("p").textContent = "NOK "+ product.price + ",-";
    document.querySelector("article img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";
}