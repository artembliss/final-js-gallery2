function upDate(previewPic) {

  console.log("upDate triggered");
  console.log(previewPic.alt);
  console.log(previewPic.src);

  const imageDiv = document.getElementById("image");

  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage =
    "url('" + previewPic.src + "')";
}

function undo() {

  const imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML =
    "Hover or focus on an image below to display here.";
}

/* ON LOAD FUNCTION */

function addTabIndex() {

  console.log("Page loaded");

  const images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image", i);
  }
}