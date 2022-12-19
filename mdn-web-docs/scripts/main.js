//image switch code

let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/flowers.jpg") {
    myImage.setAttribute("src", "images/violin.jpg");
  } else {
    myImage.setAttribute("src", "images/flowers.jpg");
  }
};

// Personalized welcome message code

let myButton = document.querySelector("Button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = () => {
  setUserName();
};
