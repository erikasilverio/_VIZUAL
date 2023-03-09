function enviaMensagem() {

    CONTATO();

    function CONTATO() {
        var title = document.querySelector("h1");
        title.addEventListener("mouseover", function () {
            title.style.color = "blue";
        });
        title.addEventListener("mouseout", function () {
            title.style.color = "black";
        });
    }
}
