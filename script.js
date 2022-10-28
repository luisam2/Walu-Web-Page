
/*/////////BULMA CAROUSEL CONFIGS///////////*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 2}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
}

(function() {
		
  let field = document.querySelector('.items');
  let li = Array.from(field.children);

  function FilterProduct() {
    for(let i of li){
      const name = i.querySelector('strong');
      const x = name.textContent;
      i.setAttribute("data-category", x);
    }

    let indicator = document.querySelector('.indicator').children;

    this.run = function() {
      for(let i=0; i<indicator.length; i++)
      {
        indicator[i].onclick = function () {
          for(let x=0; x<indicator.length; x++)
          {
            indicator[x].classList.remove('active');
          }
          this.classList.add('active');
          const displayItems = this.getAttribute('data-filter');

          for(let z=0; z<li.length; z++)
          {
            li[z].style.transform = "scale(0)";
            setTimeout(()=>{
              li[z].style.display = "none";
            }, 500);

            if ((li[z].getAttribute('data-category') == displayItems) || displayItems == "all")
             {
               li[z].style.transform = "scale(1)";
               setTimeout(()=>{
                li[z].style.display = "block";
              }, 500);
             }
          }
        };
      }
    }
  }

  function SortProduct() {
    let select = document.getElementById('select');
    let ar = [];
    for(let i of li){
      const last = i.lastElementChild;
      const x = last.textContent.trim();
      const y = Number(x.substring(1));
      i.setAttribute("data-price", y);
      ar.push(i);
    }
    this.run = ()=>{
      addevent();
    }
    function addevent(){
      select.onchange = sortingValue;
    }
    function sortingValue(){
    
      if (this.value === 'Default') {
        while (field.firstChild) {field.removeChild(field.firstChild);}
        field.append(...ar);	
      }
      if (this.value === 'LowToHigh') {
        SortElem(field, li, true)
      }
      if (this.value === 'HighToLow') {
        SortElem(field, li, false)
      }
    }
    function SortElem(field,li, asc){
      let  dm, sortli;
      dm = asc ? 1 : -1;
      sortli = li.sort((a, b)=>{
        const ax = a.getAttribute('data-price');
        const bx = b.getAttribute('data-price');
        return ax > bx ? (1*dm) : (-1*dm);
      });
       while (field.firstChild) {field.removeChild(field.firstChild);}
       field.append(...sortli);	
    }
  }

  new FilterProduct().run();
  new SortProduct().run();
})();









/*/////////INTENTO DE FILTRO PARA LA TIENDIRRIS/ CODE PEN PROFE///////////*/

/*///
const products = [
  {
    id: "GGOEAFKA087499",
    name: " Jabón sólido ",
    description:
      "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
    features: "<p> Aroma lavanda </p>",
    price: "$30.000",
    keywords:
      "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
    url: "Android+Small+Removable+Sticker+Sheet",
    category: "Jabones",
    subcategory: "productos sólidos"
  },
  {
    id: "GGOEAFKA087599",
    name: "Android Large Removable Sticker Sheet",
    description:
      "Show your quirky side by placing these fun Android stickers on your personal belongings.",
    features: "<p>Android Stickers</p>\n<p>White Colored Sticker Sheet</p>",
    price: "2.99",
    keywords:
      "Android Large Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, large sticker sheet, android large sticker sheets, Android Sheet",
    url: "Android+Large+Removable+Sticker+Sheet",
    category: "accessories",
    subcategory: "accessories"
  },
  {
    id: "GGOEGEBK094499",
    name: "Google Bot",
    description:
      "This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are done playing.",
    features:
      "<p>Made of wood</p>\n<p>2.5 x 2.5 inch cube</p>\n<p>6.75 inch tall</p>\n<p>Recommended for Ages 3+</p>",
    price: "9.99",
    keywords:
      "Google Bot, google bot, bots, natural bots, wood bot, google wood bot",
    url: "Google+Bot",
    category: "accessories",
    subcategory: "accessories"
  },
  {
    id: "GGOEGFKA086699",
    name: "Google Emoji Sticker Pack",
    description:
      "Who doesn't use emojis? Decorate your space with your current mood!",
    features:
      "<p>Pack contains two sticker sheets</p>\n<p>Each Sheet has different emojis</p>\n<p><span>Decal dimensions should fit in a maximum sheet size of 12 3/4 x 17 1/2 inch.</span></p>",
    price: "4.99",
    keywords:
      "Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers",
    url: "Google+Emoji+Sticker+Pack+2+sheet",
    category: "accessories",
    subcategory: "accessories"
  },
  {
    id: "GGOEWCKQ085457",
    name: "Waze Pack of 9 Decal Set",
    description:
      "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
    features:
      "<p>Pack of 9 includes:</p>\n<p>3 Waze Mood Happy decals</p>\n<p>3 Waze Mood Original decals</p>\n<p>3 Waze Mood Ninja decals</p>",
    price: "16.99",
    keywords:
      "Waze Pack of 9 Decal Set, decals pack, packs of 9, Waze Packs, Waze Decals, waze, Waze",
    url: "Waze+Pack+of+9+decal+set",
    category: "accessories",
    subcategory: "accessories"
  },
  {
    id: "GGOEGHPB071610",
    name: "Google Twill Cap",
    description:
      "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
    features:
      "<p>Heavy weight brushed twill</p>\n<p>Adjustable velcro closure</p>\n<p>One size fits all</p>",
    price: "10.99",
    keywords:
      "Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps",
    url: "Google+Twill+Cap",
    category: "apparel",
    subcategory: "apparel"
  },
  {
    id: "GGOEGHPJ094299",
    name: "Google Fold-over Beanie Grey",
    description:
      "Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.",
    features: "<p>100% acrylic</p>\n<p>One size fits all</p>",
    price: "9.99",
    keywords:
      "Google Fold-over Beanie Grey, gray beanie, grey beanie, Google Beanies, Fold over grey, Google Beanie Grey, Google headgear",
    url: "Google+Fold+over+beanie+grey",
    category: "apparel",
    subcategory: "apparel"
  },
  {
    id: "GGOEGHPJ094399",
    name: "Google Pom Beanie Charcoal",
    description:
      "Stay stylish and warm this winter season with this Google Pom Beanie.",
    features:
      "<p>Thick knit texture outside</p>\n<p>Soft plush inside</p>\n<p>Faux fur pom on top</p>",
    price: "19.99",
    keywords:
      "Google Pom Beanie Charcoal, pom beanie, charcoal pom beanies, Google Beanies, Pom Beanies, charcoal Google pom, beanies, headgear",
    url: "Google+Pom+Beanie+Charcoal",
    category: "apparel",
    subcategory: "apparel"
  },
  {
    id: "GGOEWXXX0827",
    name: "Waze Women's Short Sleeve Tee",
    description:
      "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
    features:
      "<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>",
    price: "18.99",
    keywords:
      "Waze Women's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Women's Tees, Waze Women's tee, waze ladies tees, waze ladies tee, waze short sleeve tees, waze short sleeve tee",
    url: "Waze+Womens+Short+Sleeve+Tee",
    category: "apparel",
    subcategory: "apparel"
  },
 
];
let filteredProducts = [];
let keyword = "";
let category = "all";

//// LLAMAR METODOS
displayProducts(products);
displayCategories();

//// CREAR LISTENERS
const keywordElem = document.getElementById("keyword");
keywordElem.addEventListener("change", () => handleKeyword(keywordElem));

const categoryElem = document.getElementById("category");
categoryElem.addEventListener("change", () => handleCategories(categoryElem));

/// METODOS DE DISPLAY
function displayProducts(arrayProducts) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  arrayProducts.forEach((product) => {
    const card = document.createElement("li");
    card.innerHTML = `<h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
      <p>${product.category}</p>`;

    container.append(card);
  });
}

function displayCategories() {
  const categoriesArr = [];
  products.forEach((product) => {
    if (!categoriesArr.includes(product.category)) {
      categoriesArr.push(product.category);
    }
  });
  const dropdown = document.getElementById("category");

  categoriesArr.forEach((category) => {
    const optionElem = document.createElement("option");
    optionElem.value = category;
    optionElem.textContent = category;

    dropdown.append(optionElem);
  });
}

///// METODOS DE EVENTOS
/*function handleKeyword(input) {
  const keyword = input.value;
  const filteredArray = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.description.toLowerCase().includes(keyword.toLowerCase()) ||
      product.keywords.toLowerCase().includes(keyword.toLowerCase())
    );
  });
  displayProducts(filteredArray);
}

function handleCategories(input) {
  const category = input.value;
  const filteredArray = products.filter(
    (product) => product.category === category || category === "all"
  );
  displayProducts(filteredArray);
}*

function handleKeyword(input) {
  keyword = input.value;
  filterByAllFilters();
  displayProducts(filteredProducts);
}

function handleCategories(input) {
  category = input.value;
  filterByAllFilters();
  displayProducts(filteredProducts);
}

function filterByAllFilters() {
  filteredProducts = products.filter((product) => {
    console.log(keyword, category);
    const hasKeyword =
      product.name.toLowerCase().includes(keyword.toLowerCase()) ||
      product.description.toLowerCase().includes(keyword.toLowerCase()) ||
      product.keywords.toLowerCase().includes(keyword.toLowerCase());
    console.log(hasKeyword);
    const isCategory = product.category === category || category === "all";
    console.log(isCategory);
    return hasKeyword && isCategory;
  });

  console.log(filteredProducts);
}///*/

