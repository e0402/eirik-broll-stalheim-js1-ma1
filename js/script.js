//Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

//Question 7
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function printListNames(list) {
  for (let i = 0; i < list.length; i++) {
    let list = cats[i].name;
    console.log(list);
  }
}

printListNames(cats);

//Question 8
function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let ageMissing = "Age unknown";

    if (cats[i].age) {
      ageMissing = cats[i].age;
    }

    html += `<div class="cat-container">
                  <h5>${cats[i].name}</5>
                  <p>Age: ${ageMissing}</p>
              </div>`;
  }

  return html;
}

const newHTML = createCats(cats);

const catsContainer = document.querySelector(".cat-container");
catsContainer.innerHTML = newHTML;
