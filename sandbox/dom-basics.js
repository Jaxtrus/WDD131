const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);

const ingredientData = ["Pinto Beans", "Corn", "Spices", "Tortillas"];
const portionData = ["1 15oz can", "1 15oz can", "1 tbsp", "8"];

const myList = document.createElement("ul");
ingredientData.forEach(function(item, index) {
    newList.innerHTML += ingredientTemplate(index);
})

function ingredientTemplate(index) {
    return `<li>${portionData[index]} ${ingredientData[index]}</li>`
}