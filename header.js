const _productData = [
        {
            title: "Top Offers",
            id: 1,
            img: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png",

        },
        {
         title: "Grocery",
         id: 2,
         img: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png",

        },
        {
         title: "Mobiles",
         id: 3,
         img: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png",

        },
        {
         title: "Fashion",
         id: 4,
         img: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png",

        },
        {
         title: "Electronics",
         id: 5,
         img: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png",

        },
        {
         title: "Home",
         id: 6,
         img: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg",

        },
        {
         title: "Appliance",
         id: 7,
         img: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png",

        },
        {
         title: "Travel",
         id: 8,
         img: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",

        },
        {
         title: "Beauty, Toys & More",
         id: 9,
         img: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png",

        },

    ];

    const _productArr =[
    "Top Offers",
    "Grocery",
    "Mobiles",
    "Fashion",
    "Electronics",
    "Home",
    "Appliance",
    "Travel",
    "Beauty, Toys & More",
    ];

    const productContainer = document.getElementById("product");

    function createElements(data)
    {
        const productItem = document.createElement("div");
        productItem.innerHTML = `<div class="product item">
        <img class="product-image" src=${data.img} />
        <p class="product-desc">${data.title}</p>
        </div>`;
        return productItem;
    }

    for (let i=0; i< _productData.length; i++){
        currentElement = _productData[i];

        const newElement = createElements(currentElement);
        productContainer.appendChild(newElement);
    }