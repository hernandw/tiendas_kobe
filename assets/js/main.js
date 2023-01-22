const productsList = [
    {
      id: 1,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/295560932_778979743233538_185955359791984085_n.webp",
    },
    {
      id: 2,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/298704855_1221544621979887_3183945203523051853_n.webp",
    },
    {
      id: 3,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/298547308_1120556871895580_1501991367355774541_n.webp",
    },
    {
      id: 4,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/299327229_387915529943851_5366369589836518095_n.webp",
    },
    {
      id: 5,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/299122303_1130143204524741_6154636218172177359_n.webp",
    },
    {
      id: 6,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/298794152_105042122270224_6286121474671587556_n.webp",
    },
    {
      id: 7,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/298753883_125482326890611_7872018069092673500_n.webp",
    },
    {
      id: 8,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/309414520_1297438217750833_4726051445296664449_n.webp",
    },
    {
      id: 9,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/309431477_415561680659706_2258555334824791960_n.webp",
    },
    {
      id: 10,
      name: "Blusa X",
      price: "$10",
      image:
        "./assets/images/blusas/298688930_755782142201716_1424929170547578041_n.webp",
    },
  ];

const menuEmail = document
  .querySelector(".nabvar-email")
  .addEventListener("click", toggleMenuMobile);
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document
  .querySelector(".menu")
  .addEventListener("click", toggleMenuHamburguer);
const menuMobile = document.querySelector(".menu-mobile");
const menuCart = document
  .querySelector(".navbar-shopping-cart")
  .addEventListener("click", toggleMenuProductCart);
const asideProduct = document.querySelector(".my-order");




/* btnDetails.addEventListener('click', ()=>{
    console.log('hola')
}) */

function toggleMenuMobile() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMenuHamburguer() {
  const isMenuCartOpen = !asideProduct.classList.contains("inactive");
  if (isMenuCartOpen) {
    asideProduct.classList.add("inactive");
  }
  menuMobile.classList.toggle("inactive");
}

function toggleMenuProductCart() {
  const isMenuMobileOpen = !menuMobile.classList.contains("inactive");
  if (isMenuMobileOpen) {
    menuMobile.classList.add("inactive");
  }
  asideProduct.classList.toggle("inactive");
}



const cardProduct = document.querySelector(".card__container");
function renderProduct() {
  let template = "";
  productsList.forEach((product) => {
    template += `
        <div class="card__product">
              <img
                class="product__image"
                src=${product.image}
                alt=""
              />
              <div class="product-info">
                <div>
                  <p class="product__price">${product.price}</p>
                  <p class="product__name">${product.name}</p>
                </div>
                <figure>
                  <img class="btn" id=id-${product.id} src="./assets/icons/bt_add_to_cart.svg" alt=${product.name} onclick="pulsar(${product.id})" />
                </figure>
              </div>
            </div>
        `;
  });

  cardProduct.innerHTML = template;
}



renderProduct();

const order = document.querySelector('.my-order')
const detailsProduct = document.getElementById('productDetail')
const productDetailClosed = document.querySelector('.product-details-close').addEventListener('click', detailProductClose)


function detailProductClose(){
    detailsProduct.classList.add('inactive')
}

function pulsar(id){
    detailsProduct.classList.remove('inactive')
}
