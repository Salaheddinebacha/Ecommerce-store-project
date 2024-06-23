let iconmenu = document.querySelector(".left-navbar .menuu");
let menubar = document.querySelector(".menu");
let close = document.querySelector(".close");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let mainimage = document.querySelector(".MAIN");
let plus = document.querySelector(".plus");
let moins = document.querySelector(".moins");
let number = document.querySelector(".left-addtocart p");
let buttonadd = document.querySelector(".botona");
let cartcount = document.querySelector(".right-navbar span");
let panier = document.querySelector(".panier");
let cartempty = document.querySelector(".cart-empty");
let cartemptyy = document.querySelector(".cart-emptyy");
let cartnotempty = document.querySelector(".cart-notempty");
let cartnotemptyy = document.querySelector(".cart-notemptyy");
let unite = document.querySelector(".unit");
let total = document.querySelector(".total");
let deletee = document.querySelector(".delete");
let image1 = document.querySelector(".im11");
let image2 = document.querySelector(".im22");
let image3 = document.querySelector(".im33");
let image4 = document.querySelector(".im44");

iconmenu.onclick = () => {
  menubar.style.left = "0";
};

close.onclick = () => {
  menubar.style.left = "-60%";
};
let images = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

let i = 0;
next.onclick = () => {
  if (i < 3) {
    i++;
  }
  mainimage.src = `projects/images/${images[i]}`;
};

previous.onclick = () => {
  if (i > 0) {
    i--;
  }
  mainimage.src = `projects/images/${images[i]}`;
};
let count = 0;

plus.onclick = () => {
  if (count < 20) {
    count++;
  }
  number.innerHTML = count;
};
moins.onclick = () => {
  if (count > 0) {
    count--;
  }
  number.innerHTML = count;
};
buttonadd.onclick = () => {
  if (count > 0) {
    cartcount.innerHTML = count;
    cartcount.style.display = "block";
    unite.innerHTML = count;
    total.innerHTML = "$" + count * 125 + ".00";
  } else {
    cartcount.style.display = "none";
    cartnotempty.classList.add("cart-notemptyy");
    cartempty.classList.remove("cart-emptyy");
  }
};

panier.onclick = () => {
  if (count > 0) {
    cartempty.classList.add("cart-emptyy");
    cartnotempty.classList.toggle("cart-notemptyy");
  } else {
    cartnotempty.classList.add("cart-notemptyy");
    cartempty.classList.toggle("cart-emptyy");
  }
};
deletee.onclick = () => {
  if (count > 0) {
    count--;
    cartcount.innerHTML = count;
    cartcount.style.display = count > 0 ? "block" : "none";
    number.innerHTML = count;
    unite.innerHTML = count;
    total.innerHTML = "$" + count * 125 + ".00";

    if (count === 0) {
      cartnotempty.classList.add("cart-notemptyy");
      cartempty.classList.remove("cart-emptyy");
    }
  }
};
image1.onclick = () => {
  mainimage.src = "projects/images/image-product-1.jpg";
};
image2.onclick = () => {
  mainimage.src = "projects/images/image-product-2.jpg";
};
image3.onclick = () => {
  mainimage.src = "projects/images/image-product-3.jpg";
};
image4.onclick = () => {
  mainimage.src = "projects/images/image-product-4.jpg";
};
