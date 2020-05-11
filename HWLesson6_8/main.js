// const cleanerListEl = document.querySelector(".js-cleaners-list");
// function displayCleaner(cleaner) {
//     const cleanerEl = document.createElement("p");
//     cleanerEl.innerHTML= `<h2>${cleaner.name}</h2>
//         <p>Rating: ${cleaner.rating}</p>
//         <p>Capacität: ${cleaner.optional.liter} L</p>
//         <p>Faber: ${cleaner.optional.color}</p>
//         <p>Quelle: ${cleaner.optional.electricSource}</p>
//         <p>Technologie: ${cleaner.optional.technology}</p>
//         `;
//     cleanerListEl.appendChild(cleanerEl);
// }

        //  Display products image & description 
const cleanerListEl = document.getElementById("bosch");
const cleanerListEl1 = document.getElementById("rowenta");
const cleanerListEl2 = document.getElementById("dyson");
const cleanerListEl3 = document.getElementById("aeg");

cleanerListEl.innerHTML = `<h3>${BoschCln.name}</h3>
         <p>Rating: ${BoschCln.rating}</p>
         <p>Capacität: ${BoschCln.optional.liter} L</p>
         <p>Faber: ${BoschCln.optional.color}</p>
         <p>Quelle: ${BoschCln.optional.electricSource}</p>
         <p>Technologie: ${BoschCln.optional.technology}</p>
         <p><i><b>${BoschCln.price} €</p>
         `;

cleanerListEl1.innerHTML = `<h3>${RowentaCln.name}</h3>
        <p>Rating: ${RowentaCln.rating}</p>
        <p>Capacität: ${RowentaCln.optional.liter} L</p>
        <p>Faber: ${RowentaCln.optional.color}</p>
        <p>Quelle: ${RowentaCln.optional.electricSource}</p>
        <p>Technologie: ${RowentaCln.optional.technology}</p>
        <p><i><b>${RowentaCln.price} €</p>
        `;

cleanerListEl2.innerHTML = `<h3>${DysonCln.name}</h3>
        <p>Rating: ${DysonCln.rating}</p>
        <p>Capacität: ${DysonCln.optional.liter} L</p>
        <p>Faber: ${DysonCln.optional.color}</p>
        <p>Quelle: ${DysonCln.optional.electricSource}</p>
        <p>Technologie: ${DysonCln.optional.technology}</p>
        <p><i><b>${DysonCln.price} €</p>
        `;

cleanerListEl3.innerHTML = `<h3>${AegCln.name}</h3>
        <p>Rating: ${AegCln.rating}</p>
        <p>Capacität: ${AegCln.optional.liter} L</p>
        <p>Faber: ${AegCln.optional.color}</p>
        <p>Quelle: ${AegCln.optional.electricSource}</p>
        <p>Technologie: ${AegCln.optional.technology}</p>
        <p><i><b>${AegCln.price} €</p>
        `;

// Add products to shopping cart
        //Get button's element
const addBoschButton = document.getElementById("addBoschToCart");
const addRowentaButton = document.getElementById("addRowentaToCart");
const addDysonButton = document.getElementById("addDysonToCart");
const addAegButton = document.getElementById("addAegToCart");
const showShoppingCartButton = document.getElementById("showShoppingCart");
const showTotalPriceButton = document.getElementById("totalPrice");

        //create shoppingCart variable to store each product
    const shoppingCart = [];

        //function to add products to shoppingCart and update the quantity
    function addBoschToShoppingCart() {
        const product = {
            name:"Bosch BGC05A220A",
            price: 125
        }
        shoppingCart.push(product);
        console.log("shoppingCart: ", shoppingCart);
    }

    function addRowentaToShoppingCart() {
        const product = {
            name:"Rowenta RO 3731EA Compact Power Cyclonic",
            price: 145
        }
        shoppingCart.push(product);
        console.log("shoppingCart: ", shoppingCart);
    }

    function addDysonToShoppingCart() {
        const product = {
            name:"Dyson Cyclone V10 Animal (226379-01)",
            price: 450
        }
        shoppingCart.push(product);
        console.log("shoppingCart: ", shoppingCart);
    }

    function addAegToShoppingCart() {
        const product = {
            name:"AEG CX7-2-S360 X Flexibility",
            price: 385
        }
        shoppingCart.push(product);
        console.log("shoppingCart: ", shoppingCart);
    }

    //function to display showShoppingCartProducts
    function showShoppingCartProducts() {
        const shoppingCartContainer = document.getElementById("shoppingCart");
        shoppingCartContainer.innerText = '';
        for(let i = 0; i < shoppingCart.length; i++) {
            console.log(shoppingCart[i]);
            const productContainer = document.createElement('div')           
            productContainer.innerHTML = `
            ${shoppingCart[i].name} <br/>
            ${shoppingCart[i].price} €
            `;
        shoppingCartContainer.appendChild(productContainer);
    }}

    //function to display totalPrice
        function showTotalPrice() {
            let sum = 0;
            const priceContainer = document.getElementById('total');
            priceContainer.innerHTML = '';
            for (let p = 0; p < shoppingCart.length; p++) {
            let a = shoppingCart[p].price;
            sum += a;
        }
            priceContainer.innerHTML = `<h4>${sum} €</h4>`;
      }

    //add event listener here
        addBoschButton.addEventListener('click', addBoschToShoppingCart);
        addRowentaButton.addEventListener('click', addRowentaToShoppingCart);
        addDysonButton.addEventListener('click', addDysonToShoppingCart);
        addAegButton.addEventListener('click', addAegToShoppingCart);
        showShoppingCartButton.addEventListener('click', showShoppingCartProducts);
        showTotalPriceButton.addEventListener('click', showTotalPrice);