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


  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
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
});

// resume
function resume(){
  window.open("images/Darshan_Bhandwalkar_Resume.pdf","_blank")
}

//change the file here
document.getElementById("resume-button-1").onclick = ()=>{
  window.open("https://drive.google.com/file/d/18CjRi-LWK21e-5Pr4quF87_DtlaGLKGc/view?usp=sharing",`_blank`)
}

document.getElementById("resume-button-2").onclick = ()=>{
  window.open("https://drive.google.com/file/d/18CjRi-LWK21e-5Pr4quF87_DtlaGLKGc/view?usp=sharing",`_blank`)
}


// projects
document.getElementById("git1Button").addEventListener("click",function(){
  window.open("https://github.com/bhandwalkardarshan/noiseless-plantation-1250", "_blank");
})
document.getElementById("deploy1Button").addEventListener("click",function(){
  window.open("https://lustrous-sunshine-c76797.netlify.app/", "_blank");
})

document.getElementById("git2Button").addEventListener("click",function(){
  window.open("https://github.com/bhandwalkardarshan/Diesel.com_clone", "_blank");
})
document.getElementById("deploy2Button").addEventListener("click",function(){
  window.open("https://marvelous-tanuki-faa7b6.netlify.app/", "_blank");
})

document.getElementById("git3Button").addEventListener("click",function(){
  window.open("https://github.com/bhandwalkardarshan/jaded-fear-6081", "_blank");
})
document.getElementById("deploy3Button").addEventListener("click",function(){
  window.open("https://admirable-pavlova-35a444.netlify.app/", "_blank");
})

document.getElementById("git4Button").addEventListener("click",function(){
  window.open("https://github.com/bhandwalkardarshan/noiseless-plantation-1250", "_blank");
})
document.getElementById("deploy4Button").addEventListener("click",function(){
  window.open("https://lustrous-sunshine-c76797.netlify.app/", "_blank");
})


// calender
GitHubCalendar(".calendar", "bhandwalkardarshan");

GitHubCalendar(".calendar", "bhandwalkardarshan", { responsive: true });