!function SlideCart() {
    window.SLIDECART = !0;
    window.SLIDECART_FORMAT = '{{shop.money_format}}';
    var e = "https://cdn.jsdelivr.net/gh/apphq/slidecart-dist@master/slidecarthq.js?" + (new Date).getTime(),
        t = document.createElement("script");
    t.type = "text/javascript", t.src = e, document.querySelector("body").appendChild(t)
}();

module.exports = SLIDECART