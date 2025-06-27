var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modal-image");

function enhance(x) {
    var src = x.src;
    modal.style.visibility = "visible";
    modal.style.zIndex = 1;
    modal.style.opacity = 1;
    modalImage.src = src;
};

modal.onclick = function close() {
    
    modal.style.opacity = 0;
    setTimeout(function() {modal.style.visibility = "hidden"; modal.style.zIndex = 0;}, 200);

}