//Define product
 let productsDom = document.querySelector('.card--list');
 let cartProductDom = document.querySelector('.cart-tems div');
 let badgeDom = document.querySelector('.badge');
 let cartProductLength = document.querySelectorAll('.cart-tems div p');
 let totalDom =  document.querySelectorAll('.cart--total div p');



let products = [
    {
    id: 1,
    title: 'SAFRAN DE TALIOUINE 20g',
    price: 640.00 + 'MAD',
    image:'20G.webp',
   
},
{
    id: 2,
    title: 'SAFRAN DE TALIOUINE 10g',
    price: 325.000+ 'MAD',
    image:'10G.webp',
},
{
    id: 3,
    title: 'SAFRAN DE TALIOUINE 5g',
    price: 165.000 +'MAD',
    image:'5G.webp',
},
{
    id: 4,
    title: 'SAFRAN DE TALIOUINE 3g',
    price: 68.000 +'MAD',
    image:'2G.webp',
},
{
    id: 5,
    title: 'SAFRAN DE TALIOUINE 1g',
    price: 35.000 + 'MAD',
    image:'1G.webp',
},
{
    id: 6,
    title: 'SAFRAN DE TALIOUINE 0.5g',
    price: 18.000 + 'MAD',
    image:'0.5G.jpg',
}
];
  function drawProductsUI (){
    let productsUI = products.map((item) =>{

        return`
        <div class="card1">
                        <img src="${item.image}" alt="">
                        <h4 class="card--title">${item.title} </h4>
                         <div class="card--price">
                            <div class="price">${item.price}</div>
                            <i class="fa-solid fa-plus add-to-cart" onclick="addedToCart(${item.id})"></i>

                         </div>
                    </div>
        `
    });
    productsDom.innerHTML = productsUI;
}
drawProductsUI();



function addedToCart(id){
   let chooseenItem = products.find((item) => item.id == id);
   cartProductDom.innerHTML+=`<p id = "shop">
   <img src="${chooseenItem.image}" alt="" >
    ${ chooseenItem.title}
     
    <input type="number" value="1" class="itemQuantity"> 
    <span> ${ chooseenItem.price} </span>
   </p>`;
   calculateTotal();
   let cartProductLength = document.querySelectorAll('.cart-tems div p');
   badgeDom.style.display ="flex";
   badgeDom.innerHTML= cartProductLength.length ;
   localStorage.setItem("products", JSON.stringify(chooseenItem));
}
function Open(){
   let sidebar= document.getElementById('sidebar');
    sidebar.style.right='0px'
}
function Close(){
    let sidebar= document.getElementById('sidebar');
    sidebar.style.right='-500px'
  }
function checkIn(){
    swal({
        title: "Nous ne pouvons pas accepter les commandes en ligne pour l'instant",
        text: " Veuillez nous contacter pour finaliser vos achats.",
        icon: "info",
      });
}

//calcul le montant total du panier 
function calculateTotal() {
    let totalPrice = 0;
    let cartItems = document.querySelectorAll('.cart-tems div p');
    cartItems.forEach(item => {
      let price = parseFloat(item.querySelector('span').innerText.replace('MAD', ''));
      let quantity = item.querySelector('input[type="number"]').value;
      totalPrice += price * quantity;
    });
    document.querySelector('.cart--total').innerText = `${totalPrice.toFixed(2)} MAD`;
  }


  function send(){
    swal({
        icon: "success",
      });
}
  // local 