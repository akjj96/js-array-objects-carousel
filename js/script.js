const items = [
  {
      immagine: 'img/01.jpg',
      title: 'Svezia',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',

  },
  {
      immagine: 'img/02.jpg',
      title: 'Svizzera',
      text: 'Lorem ipsum',
  },
  {
      immagine: 'img/03.jpg',
      title: 'Gran Bretagna',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',

  },
  {
      immagine: 'img/04.jpg',
      title: 'Germania',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

  },
  {
      immagine: 'img/05.jpg',
      title: 'Paradise',
      text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  }
]

let slideDownTimer = setInterval(slideDown, 5000);


const container = document.querySelector(".container");

const slideContainer = document.createElement("div");
slideContainer.classList.add("slideContainer")
container.append(slideContainer)

const row = document.createElement("div");
row.classList.add("row")
container.append(row)

const upContainer = document.createElement("div");
upContainer.id = "up";
row.append(upContainer)

const upArrow = document.createElement("div");
upArrow.className = "fa-solid fa-chevron-up";
upContainer.append(upArrow)

const downContainer = document.createElement("div");
downContainer.id = "down";
row.append(downContainer)

const downArrow = document.createElement("div");
downArrow.className = "fa-solid fa-chevron-down";
downContainer.append(downArrow)

for (let i = 0; i < items.length; i++) {
  const slide = document.createElement("div");
  slide.classList.add("slide")
  slide.innerHTML = `<img src="${items[i].immagine}" alt="Img">
                      <div class="slideText">
                          <h3>${items[i].title}</h3>
                          <span>${items[i].text}</span>
                      </div> `
  slideContainer.append(slide)
  if (i == 0) {
      slide.classList.add("active")
  }
  const col = document.createElement("div");
  col.classList.add("col")
  row.append(col)
  const colImage = document.createElement("img");
  colImage.setAttribute("src", items[i].immagine);
  col.append(colImage)
}
/* SLIDER FRECCE */
let currentIndex = 0;
const slideArray = document.getElementsByClassName("slide");
const colArray = document.getElementsByClassName("col");
const down = document.getElementById("down")
down.addEventListener("click", slideDown)

function slideDown() {
  slideArray[currentIndex].classList.remove("active");
  colArray[currentIndex].classList.remove("activeCol")
  currentIndex += 1;
  if (currentIndex > 4) {
      currentIndex = 0
  }
  slideArray[currentIndex].classList.add("active")
  colArray[currentIndex].classList.add("activeCol")
}

const up = document.getElementById("up")
up.addEventListener("click", function slideUp() {
  slideArray[currentIndex].classList.remove("active");
  colArray[currentIndex].classList.remove("activeCol")
  currentIndex -= 1;
  if (currentIndex == -1) {
      currentIndex = 4
  }
  slideArray[currentIndex].classList.add("active")
  colArray[currentIndex].classList.add("activeCol")
})


/* Cambio img on click */
for (let i = 0; i < colArray.length; i++) {
  colArray[i].addEventListener("click", changeOnClick)
}

function changeOnClick() {
  for (let i = 0; i < colArray.length; i++){
      if (this === colArray[i]) {
          slideArray[currentIndex].classList.remove("active");
          colArray[currentIndex].classList.remove("activeCol")
          currentIndex = i
          slideArray[currentIndex].classList.add("active")
          colArray[currentIndex].classList.add("activeCol")
      }
  }
}