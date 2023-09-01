const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("open");

        const icon = card.querySelector("h4 i");
        if (icon.className == "fas fa-plus") {
            icon.className = "fas fa-minus"
        } else {
            icon.className = "fas fa-plus"
        }
    })
})

const tableCards = document.querySelectorAll(".table-card");

tableCards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("open");

        const icon = card.querySelector("td i");
        if (icon.className == "fas fa-plus") {
            icon.className = "fas fa-minus"
        } else {
            icon.className = "fas fa-plus"
        }
    })
})




let serviceSwiper = new Swiper(".service-slider", {
    slidesPerView: 1,
    spaceBetween: 500,
    pagination: {
        el: ".custom-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + ' Years</span>';
        },
    },
    loop: true,

});


let attributeSwiper = new Swiper(".attribute-slider", {
    slidesPerView: 1,
    spaceBetween: 500,
    pagination: {
        el: ".attribute-pagination",
        clickable: true,

        renderBullet: function (index, className) {
            var bulletText = '';
            if (index === 0) {
                bulletText = '<b>' + 'New!' + '</b>' + ' Personalized protection ' +' |';
            } else if (index === 1) {
                bulletText = 'online privacy'+' |';
            } else if (index === 2) {
                bulletText = 'identity monitoring';
            }
            return '<span class="' + className + '">' + bulletText + '</span>';
        },
    },
    loop: true,

});


const faqs = document.querySelectorAll(".faq");

faqs.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("open");

        const icon = card.querySelector("div i");
        const h3 =  card.querySelector("h3");
        const text = card.querySelector("small");

        h3.classList.toggle("underline");

        if (icon.className == "fas fa-plus") {
            icon.className = "fas fa-minus";
            text.style.maxHeight = text.scrollHeight + "px";
            text.style.opacity = 1;
        } else {
            icon.className = "fas fa-plus";
            text.style.maxHeight = 0;
            text.style.opacity = 0;
        }
    })
});