// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// var img = document.getElementById("myImg3");
// var modalImg3 = document.getElementById("img03");
// var captionText = document.getElementById("caption");
// img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// var img = document.getElementById("myImg4");
// var modalImg4 = document.getElementById("img04");
// var captionText = document.getElementById("caption");
// img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// var img = document.getElementById("myImg5");
// var modalImg5 = document.getElementById("img05");
// var captionText = document.getElementById("caption");
// img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }

}