const productDetails = document.body.getElementsByClassName("product-details")[0];
const productCard = document.body.getElementsByClassName("product-card");
const bodyStyle = document.body.style;

document.body.addEventListener("click", e => {
    const { className, innerText, localName } = e.target;
    if(localName !== "div") return;
    if(className !== "product-card" || productDetails.style.display === "block") return;
    const productInfo = {
        "title": innerText.split(new RegExp('\n\n'))[0],
        "content": innerText.split(new RegExp('\n\n'))[1]
    };
    let htmlContent = `<button onclick="detailsClose()">X</button><h2>${productInfo.title}</h2><p><br>${productInfo.content}</p><button id="buy">Buy</button>`;
    productDetails.innerHTML = htmlContent;
    detailsWindowAction(true);
});

window.addEventListener("keydown", e => {
    const { key } = e;
    if(key === "Escape" && productDetails.style.display === "block"){
        detailsWindowAction(false);
    }
});

const detailsWindowAction = (option) => {
    if(option) {
        productDetails.style.display = "block";
        bodyStyle.opacity = 0.6;
        for(let i = 0; i < document.body.getElementsByClassName("product-card").length; i++)
          productCard[i].style.cursor = "default";
        }else if(!option) {
        productDetails.style.display = "none";
        bodyStyle.opacity = 1;
        for(let i = 0; i < document.body.getElementsByClassName("product-card").length; i++)
          productCard[i].style.cursor = "pointer";
    }
}

function detailsClose() {
    detailsWindowAction(false);
}