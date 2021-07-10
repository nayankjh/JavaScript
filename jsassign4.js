var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    description: "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [
      1,
      1,
      0,
      1,
      0
    ],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599
  }

var leftSide = document.getElementById("left-side");
var productImg = document.createElement("img");
productImg.id = "productImg";
productImg.src = productData.preview;
leftSide.appendChild(productImg);  

var productDetails = document.getElementById("productDetails");
var name1 = document.createElement("h1")
name1.id="name";
name1.innerHTML=productData.name;
productDetails.appendChild(name1)
var brand1 = document.createElement("h4");
brand1.id="brand";
brand1.innerHTML = productData.brand;
productDetails.appendChild(brand1);
var priceWrap = document.createElement("h3");
priceWrap.innerText="Price: Rs "
var price1 = document.createElement("span");
price1.id = "price";
price1.innerHTML = productData.price;
priceWrap.appendChild(price1);
productDetails.appendChild(priceWrap);
var descriptionWrap = document.createElement("div");
descriptionWrap.className="description-wrap";
var descHead = document.createElement("h3");
descHead.innerText = "Description";
var description1 = document.createElement("p");
description1.id="description";
description1.innerHTML = productData.description;
descHead.appendChild(description1);
descriptionWrap.appendChild(descHead);
productDetails.appendChild(descriptionWrap);

var productOverview = document.createElement("div");
productOverview.id ="product-overview";
var productHead = document.createElement("h3");
productHead.innerHTML = "Product Preview";
productOverview.appendChild(productHead);
var previewImg = document.createElement("div");
previewImg.className = "previewImg";
for(var i=0;i<productData.photos.length;i++){
      var img = document.createElement("img");
      img.id=i;
      img.src=productData.photos[i];
      previewImg.appendChild(img);
      productOverview.appendChild(previewImg);
      img.addEventListener("click",function(){
      productImg.src = productData.photos[this.id];
      for(var j=0;j<productData.photos.length;j++)
      {
        var d=document.getElementById(j);
        if(j==this.id)
        d.style.border="2px solid #009688";
        else
        d.style.border="0px";
      }
    })
}

productDetails.appendChild(productOverview);
var photo1 = document.getElementById("0");
photo1.style.border="2px solid #009688";


