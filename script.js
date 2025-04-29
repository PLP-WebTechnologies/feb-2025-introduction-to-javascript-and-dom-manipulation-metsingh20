function changeText() {
  document.getElementById("message").textContent = "You changed the text! 🎉";
}

function changeStyle() {
  const title = document.getElementById("title");
  title.style.color = "tomato";
  title.style.fontSize = "2.5rem";
  title.style.textDecoration = "underline";
}

function addElement() {
  const container = document.getElementById("container");
  const newDiv = document.createElement("div");
  newDiv.textContent = "🚀 A new element was added!";
  newDiv.className = "added-element";
  container.appendChild(newDiv);
}

function removeElement() {
  const container = document.getElementById("container");
  const added = container.querySelector(".added-element");
  if (added) {
    container.removeChild(added);
  } else {
    alert("No added element to remove.");
  }
}
