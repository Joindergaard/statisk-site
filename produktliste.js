const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

fetch("https://kea-alt-del.dk/t7/api/products?season=" + season )
.then((response) => response.json())
.then(dataReceived);

function dataReceived(products){
    console.log(products)
    products.forEach(showProduct)
}

function showProduct(product){
    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    clone.querySelector("h2").textContent = product.productdisplayname;
    clone.querySelector("p").textContent = "NOK "+ product.price + ",-";
    clone.querySelector("img").src = "https://kea-alt-del.dk/t7/images/webp/640/" + product.id + ".webp";

    clone.querySelector(".buy_now").setAttribute("href", "produkt.html?id=" + product.id)
   

document.querySelector(".produktliste").appendChild(clone);

}

//   {
//     "id": 1163,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "season": "Summer",
//     "productionyear": 2011,
//     "usagetype": "Sports",
//     "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//     "price": 895,
//     "discount": null,
//     "brandname": "Nike",
//     "soldout": 0