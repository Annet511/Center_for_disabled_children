$(document).ready(function(){
  $('.certificates-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    // autoplay: true,
    // autoplaySpeed: 1000,
    draggable:false,
    // rows:2,
  });
});
$(function () {
    var $videoContainer = $('#video'),
        $videoControls = $('.video-control'),
        $video = $('#myVideo')[0];

    $videoControls.click(function () {
        if ($video.paused) {
            $video.play();
            $videoContainer.addClass('video-is-playing');
        } else {
            $video.pause();
            $videoContainer.removeClass('video-is-playing');
            //  возвращаем постер
            $video.load();
        }
    });
});

// Burger

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

// Плавный переход к якорю

if(window.location.toString().indexOf('index.html')>0)
{
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector(''+ blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
}

