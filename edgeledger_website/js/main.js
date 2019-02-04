var map;
function initMap() {
    map = new google.maps.Map(document.querySelector(".map"), {
        center: { lat: 51.76067, lng: -0.56539 },
        zoom: 8
    });

    const marker = new google.maps.Market({
        position: { lat: 51.76067, lng: -0.56539 },
        map: map
    });
}

//Sticky menu background
window.addEventListener("scroll", function() {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800 // Speed of animation
        );
    }
});
