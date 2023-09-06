$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 100,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  //recaptcha
  window.onload = function () {
    var el = document.getElementById("g-recaptcha-response");
    if (el) {
      el.setAttribute("required", "required");
    }
  };
  // CV alert
  $(document).on("click", "#link", function () {
    confirm("Continue download the CV");
  });

  //visitor counter
  function updateCounter() {
    fetch("https://api.countapi.xyz/update/codexdebayan/blogspot/?amount=1")
      .then((res) => res.json())
      .then((data) => (counterElement.innerHTML = data.value));
  }
  updateCounter();

  counterElement = document.getElementsByClassName("count")[0];
  
  // tag id analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-WZ5N0J1WW5");

  //navmenu
  const toggleBtn = document.querySelector(".toggle-btn");
  const menu = document.querySelector(".menu-container");
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  // pre loader
  var loader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });

  // contact form submit mechanism
  var form = document.getElementById("my-form");

  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();
          status.classList.add("success");
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, "errors")) {
              status.innerHTML = data["errors"]
                .map((error) => error["message"])
                .join(", ");
            } else {
              status.innerHTML =
                "Oops! There was a problem submitting your form";
              status.classList.add("error");
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  }
  form.addEventListener("submit", handleSubmit);
});
