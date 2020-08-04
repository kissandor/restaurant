let burgers = [
  {
    name: "Original Burger",
    description:
      "8oz Nebraskan beef patty with lettuce, tomato, pickles, onions and B&L’s secret burger sauce.",
  },
  {
    name: "Cheyenne Rodeo Burger",
    description:
      "Ooohhh Weeee...Yee Haw.....Paatna’s we have... Double pattie beef burger topped with double sliced cheese, a grilled grated cheese crown, grilled bacon and to finish three crispy onion rings. Our signature spicy SMOKIN!!! BBQ sauce makes this full of southern hospitality.",
  },
  {
    name: "Jalapeno Cheese Burger",
    description:
      " Double pattie beef burger topped with jalapeños a plenty, grilled green pepper & onions, grated cheese, mozzarella slice with hot sauce.",
  },
  {
    name: "Prairie Girl..",
    description:
      "Southern fried chicken breast, Frank’s Hot Sauce & blue cheese dressing or BBQ sauce or jalapeño ketchup (great with cheese and bacon!) ",
  },
  {
    name: "Original Burger",
    description:
      "8oz Nebraskan beef patty with lettuce, tomato, pickles, onions and B&L’s secret burger sauce.",
  },
];

let menuToInsert = document.querySelector("div.container");

//arrow function to create a div
let createDiv = (parent, divClass) => {
  let div = document.createElement("div");
  div.setAttribute("class", divClass);
  parent.appendChild(div);
};

let bgColor = "bg-secondary";
let txtColor = "text-white";

for (let burger of burgers) {
  if (bgColor == "bg-secondary") {
    bgColor = "bg-light";
    txtColor = "";
  } else if (bgColor == "bg-light") {
    bgColor = "bg-secondary";
    txtColor = "text-white";
  }
  console.log(`bgColor ${bgColor}`);
  let divRow = document.createElement("div");
  divRow.setAttribute("class", "row");
  createDiv(divRow, "col p-0 mt-3");
  menuToInsert.appendChild(divRow);

  createDiv(divRow.firstChild, `card ${txtColor} ${bgColor} menuStyle`);
  console.log(divRow.firstChild.firstChild);
  createDiv(divRow.firstChild.firstChild, "card-header");
  divRow.firstChild.firstChild.firstChild.innerHTML =
    "<h5>" + burger.name + "</h5>";

  createDiv(divRow.firstChild.firstChild, "card-body");

  createDiv(divRow.firstChild.firstChild.children[1], "row");

  createDiv(divRow.firstChild.firstChild.children[1].firstChild, "col-2");

  divRow.firstChild.firstChild.children[1].firstChild.firstChild.innerHTML =
    '<img src="/restaurant/img/burger2.jpg" class="card-img" alt="..."></img>';

  createDiv(divRow.firstChild.firstChild.children[1].firstChild, "col-10");

  divRow.firstChild.firstChild.children[1].firstChild.children[1].innerHTML =
    '<p class="card-text">' + burger.description + "</p>";
}
