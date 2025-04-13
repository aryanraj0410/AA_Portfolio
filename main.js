/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
  
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  
  function headerShadow() {
    const navHeader =document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
  
  /* ----- TYPING EFFECT ----- */
  var typingEffect = new Typed(".typedText",{
    strings : ["Writer.","Storyteller.","Editor."],
    loop : true,
    typeSpeed : 80, 
    backSpeed : 80,
    backDelay : 1000
  })
  
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true     
  })
  
  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})
  
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
  
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
  /* ----- CHANGE ACTIVE LINK ----- */
    const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    const link = document.querySelector('.nav-link[href*=' + sectionId + ']');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(l => l.classList.remove('active-link'));
      link.classList.add('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// Optional: update active link on click too
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active-link'));
    link.classList.add('active-link');
  });
});

  
  // Show the loading screen until the page is fully loaded
  window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
  
    // Keep the loading screen for 4 seconds before hiding
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500); // Wait for the fade-out animation to complete
    }, 3500); // 4 seconds delay
  });
  
  // Optional: Add a typing effect to the loading text
  var loadingTypingEffect = new Typed(".typedText1", {
    strings: ["Loading...", "Please wait..."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });
  
  
  window.addEventListener('scroll', scrollActive)
  
  /* ----- CONTACT FORM SUBMISSION ----- */
  document.querySelector('.btn').addEventListener('click', function() {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;
  
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };
  
    email.send('service_z3ozn9c', 'template_ejtgb2u', templateParams)
      .then(function(response) {
        alert('Email sent successfully!', response.status, response.text);
      }, function(error) {
        console.error('Failed to send email:', error);
      });
  });