const message = document.querySelector(".autowrite-message").textContent;

(function typeWriter(text, i) {
    if (i < (text.length)) {
        document.querySelector(".autowrite-message-visible").innerHTML = text.substring(0, i + 1)
        + '<span class="cursor"></span>'

        setTimeout(function () {
            typeWriter(text, i + 1)
        }, 100)
    }
})(message, 0)