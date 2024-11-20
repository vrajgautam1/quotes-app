import { authors } from "./authors.js"; 

let container = document.getElementById("cards-container");
for (let i = 0; i < authors.length; i++) {
  if (i % 2 == 0) {
    container.innerHTML += `<div class="card-container mx-auto mb-3">
            <div class="image">
                <img src="${authors[i].imgurl}"
                    alt="Author Image">
            </div>

            <div class="content">
                <p class="quote">"${authors[i].quote}"</p>
                <h2 class="author">${authors[i].author}</h2>
                <p class="birthplace">${authors[i].birthPlace}</p>
            </div>
        </div>`;
  } else {
    container.innerHTML += `<div class="card-container mx-auto mb-3">

         <div class="content">
                <p class="quote">"${authors[i].quote}"</p>
                <h2 class="author">${authors[i].author}</h2>
                <p class="birthplace">${authors[i].birthPlace}</p>
            </div>

            <div class="image">
                <img src="${authors[i].imgurl}"
                    alt="Author Image">
            </div>

        </div>`;
  }
}
