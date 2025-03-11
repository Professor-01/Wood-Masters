// document.addEventListener("DOMContentLoaded", function () {
//   // Slider functionality
//   const slider = document.getElementById("slider");
//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");
//   const sliderContainer = document.getElementById("slider-container");
//   let slideIndex = 0;
//   let slideInterval;
//   let slideDuration = 5000; // 5 seconds

//   // Consolidate slide functionality
//   function updateSlide() {
//     slider.style.transition = "transform 0.5s ease-in-out";
//     slider.style.transform = `translateX(-${slideIndex * 100}%)`;

//     // Use classList methods efficiently
//     dots.forEach((dot, i) => {
//       if (i === slideIndex) {
//         dot.classList.add("active");
//       } else {
//         dot.classList.remove("active");
//       }
//     });
//   }

//   function moveSlide(step) {
//     slideIndex = (slideIndex + step + slides.length) % slides.length;
//     updateSlide();
//     resetAutoSlide();
//   }

//   function currentSlide(index) {
//     slideIndex = index;
//     updateSlide();
//     resetAutoSlide();
//   }

//   // Auto-slide control
//   function startAutoSlide() {
//     if (slideInterval) clearInterval(slideInterval);
//     slideInterval = setInterval(() => moveSlide(1), slideDuration);
//   }

//   function stopAutoSlide() {
//     clearInterval(slideInterval);
//     slideInterval = null;
//   }

//   function resetAutoSlide() {
//     stopAutoSlide();
//     startAutoSlide();
//   }

//   function updateSlideDuration(newDuration) {
//     slideDuration = newDuration;
//     resetAutoSlide();
//   }

//   // Event delegation for better performance
//   sliderContainer.addEventListener("mouseenter", stopAutoSlide);
//   sliderContainer.addEventListener("mouseleave", startAutoSlide);

//   // Initialize slider
//   updateSlide();
//   startAutoSlide();

//   // Expose necessary functions globally
//   window.moveSlide = moveSlide;
//   window.currentSlide = currentSlide;
//   window.updateSlideDuration = updateSlideDuration;

//   // Animation
//   if (typeof gsap !== "undefined" && gsap.registerPlugin) {
//     // GSAP animations - check if GSAP is loaded first
//     const animateHero = () => {
//       // Group hero animations for better performance
//       const tl = gsap.timeline();

//       tl.from(".hero-content h1", {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: "power3.out",
//       })
//         .from(
//           ".hero-content p",
//           {
//             opacity: 0,
//             y: 50,
//             duration: 1,
//             ease: "power3.out",
//           },
//           "-=0.7"
//         )
//         .from(
//           ".cssbuttons-io-button",
//           {
//             opacity: 0,
//             scale: 0.8,
//             duration: 0.8,
//             ease: "back.out(1.7)",
//           },
//           "-=0.7"
//         )
//         .from(
//           ".slider-container",
//           {
//             opacity: 0,
//             x: 100,
//             duration: 1.2,
//             ease: "power3.out",
//           },
//           "-=0.5"
//         )
//         .from(
//           ".feature-item",
//           {
//             opacity: 0,
//             y: 40,
//             duration: 1,
//             stagger: 0.3,
//             ease: "power3.out",
//           },
//           "-=0.7"
//         );
//     };

//     const setupScrollAnimations = () => {
//       // Register ScrollTrigger
//       gsap.registerPlugin(ScrollTrigger);

//       // Setup scroll animations with better defaults
//       const commonScrollTriggerConfig = {
//         start: "top 80%",
//         toggleActions: "play none none reverse",
//       };

//       // Group related animations with timeline for better performance
//       const experiencesTl = gsap.timeline({
//         scrollTrigger: {
//           ...commonScrollTriggerConfig,
//           trigger: "#experiences-section",
//         },
//       });

//       experiencesTl
//         .from("#experiences-image", {
//           x: -100,
//           opacity: 0,
//           duration: 1,
//           ease: "power2.out",
//         })
//         .from(
//           "#experiences-text",
//           {
//             x: 100,
//             opacity: 0,
//             duration: 1,
//             ease: "power2.out",
//           },
//           "-=0.7"
//         );

//       const materialsTl = gsap.timeline({
//         scrollTrigger: {
//           ...commonScrollTriggerConfig,
//           trigger: "#materials-section",
//         },
//       });

//       materialsTl
//         .from("#materials-text", {
//           x: -100,
//           opacity: 0,
//           duration: 1,
//           ease: "power2.out",
//         })
//         .from(
//           "#materials-image",
//           {
//             x: 100,
//             opacity: 0,
//             duration: 1,
//             ease: "power2.out",
//           },
//           "-=0.7"
//         );

//       // Fix bestsellers animation by explicitly setting the trigger element
//       gsap.from(".bestsellers-wrap", {
//         opacity: 0,
//         scale: 0.9,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".bestsellers-wrap", // Explicit trigger element
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       });
//     };

//     // Setup button hover with a single event listener using mouseenter/mouseleave
//     const button = document.querySelector(".cssbuttons-io-button");
//     if (button) {
//       button.addEventListener("mouseenter", () => {
//         gsap.to(button, { scale: 1.1, duration: 0.3 });
//       });
//       button.addEventListener("mouseleave", () => {
//         gsap.to(button, { scale: 1, duration: 0.3 });
//       });
//     }

//     // Run animations
//     animateHero();
//     setupScrollAnimations();
//   }
// });
// const video = document.getElementById("hero-video");
// const targetRate = 0.4; // lowest rate before pausing
// const decrement = 0.01; // amount to reduce each step
// const intervalTime = 100; // time (ms) between steps

// const slowdownInterval = setInterval(() => {
//   if (video.playbackRate > targetRate) {
//     video.playbackRate = Math.max(video.playbackRate - decrement, targetRate);
//   } else {
//     clearInterval(slowdownInterval);
//     video.pause(); // pause when the rate is very low, creating a freeze effect
//   }
// }, intervalTime);

// const videos = document.querySelectorAll(".bg-video");
// let currentIndex = 0;

// function playCurrentVideo() {
//   videos.forEach((video, index) => {
//     if (index === currentIndex) {
//       video.classList.add("active");
//       video.play();
//     } else {
//       video.classList.remove("active");
//       video.pause();
//     }
//   });
// }

// playCurrentVideo();

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % videos.length;
//   playCurrentVideo();
// }, 1000);

// Toggle the main navigation on hamburger click
const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// For each menu item with a submenu, toggle its display on click in mobile view
const menuItems = document.querySelectorAll(".main-menu > li");
menuItems.forEach((item) => {
  // Look for a dropdown or mega menu
  const submenu = item.querySelector(".dropdown, .mega-menu");
  if (submenu) {
    const link = item.querySelector("a");
    link.addEventListener("click", (e) => {
      // Only apply this on mobile view
      if (window.innerWidth <= 1024) {
        e.preventDefault(); // Prevent navigation
        submenu.classList.toggle("active");
        link.classList.toggle("active"); // Rotate caret indicator
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".bestsellers-tab-link");
  const tabContents = document.querySelectorAll(".bestsellers-tab-content");

  // Initialize first tab as active
  document.querySelector(".bestsellers-tab-link.active").click();

  // Rest of the code remains the same
  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetTab = this.dataset.tab;

      // Remove active classes
      tabLinks.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active classes
      this.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
});

const images = [
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1633330948542-0b3bdeefcdb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1623625434531-d130448273c1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504624720567-64a41aa25d70?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502304104451-b61947b321ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// ---------------------
// GRID TRANSITION LOGIC
// ---------------------

const rows = 4;
const cols = 6;
const totalTiles = rows * cols;

let imageSetIndex = 0;
let nextImageSetIndex = 1;

const grid = document.getElementById("hero-grid");

// Create grid tiles dynamically
for (let i = 0; i < totalTiles; i++) {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.dataset.index = i;
  // Compute row number (used for staggered animation delay)
  const row = Math.floor(i / cols);

  // Create the current image element
  const imgCurrent = document.createElement("img");
  imgCurrent.className = "img-current";
  imgCurrent.src = images[(imageSetIndex + i) % images.length];
  imgCurrent.style.animationDelay = `${row * 100}ms`;

  // Create the next image element and set a staggered delay
  const imgNext = document.createElement("img");
  imgNext.className = "img-next";
  imgNext.src = images[(nextImageSetIndex + i) % images.length];
  imgNext.style.animationDelay = `${row * 100}ms`;

  tile.appendChild(imgCurrent);
  tile.appendChild(imgNext);
  grid.appendChild(tile);
}

// Trigger transition on all tiles by adding a CSS class
function startTransition() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    tile.classList.add("transition");
  });
}

// Update each tile's images after the transition completes
function updateTiles() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile) => {
    const i = parseInt(tile.dataset.index, 10);
    const imgCurrent = tile.querySelector(".img-current");
    const imgNext = tile.querySelector(".img-next");
    // Set the current image to the one that was transitioning in
    imgCurrent.src = imgNext.src;
    // Reset transforms (if any)
    imgCurrent.style.transform = "translateX(0)";
    imgNext.style.transform = "translateX(-100%)";
    // Remove transition class so the tile is ready for the next animation
    tile.classList.remove("transition");
    // Update the next image to the following one in the sequence
    imgNext.src = images[(nextImageSetIndex + i) % images.length];
  });
}

// Function to handle the grid transition cycle
function cycleGrid() {
  startTransition();
  // Wait for the transition animation to complete (adjust the delay if needed)
  setTimeout(() => {
    updateTiles();
    // Update indexes for the next cycle
    imageSetIndex = nextImageSetIndex;
    nextImageSetIndex = (nextImageSetIndex + 1) % images.length;
  }, 1000);
}

// Start grid transition cycle every 5 seconds
setInterval(cycleGrid, 5000);

// ---------------------
// SLIDER FUNCTIONALITY
// ---------------------

document.addEventListener("DOMContentLoaded", () => {
  const debug = document.querySelector(".slider-debug");
  const slides = document.querySelectorAll(".image-slider img");
  let current = 0;

  // Apply a staggered delay to each slide if desired
  slides.forEach((slide, index) => {
    slide.style.setProperty("--delay", `${index * 100}ms`);
  });

  function updateDebug() {
    if (debug) {
      debug.textContent = `Current Slide: ${current + 1}/${slides.length}`;
    }
  }

  function cycleSlides() {
    // Remove active class from all slides
    slides.forEach((slide) => slide.classList.remove("active"));
    // Update current slide index
    current = (current + 1) % slides.length;
    // Add active class to the new slide to trigger CSS transitions
    slides[current].classList.add("active");
    // Force reflow to restart animation if necessary
    void slides[current].offsetWidth;
    updateDebug();
  }

  // Initialize the slider with the first slide active
  if (slides.length) {
    slides[0].classList.add("active");
    updateDebug();
  }

  let sliderInterval = setInterval(cycleSlides, 5000);

  // Pause slider on hover and resume when not hovering
  const slider = document.querySelector(".image-slider");
  if (slider) {
    slider.addEventListener("mouseenter", () => {
      clearInterval(sliderInterval);
    });

    slider.addEventListener("mouseleave", () => {
      sliderInterval = setInterval(cycleSlides, 5000);
    });
  }
});

// animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".banner-content", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".banner-content",
    start: "top 80%", // Starts when the section is 80% in view
    end: "top 30%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".banner-image img", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".banner-image",
    start: "top 80%",
    end: "top 40%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".cssbuttons-io-button", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "elastic.out(1, 0.5)",
  scrollTrigger: {
    trigger: ".cssbuttons-io-button",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});
// Animate Projects Header
gsap.from(".projects-header-content", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projects-header",
    start: "top 80%",
    end: "top 60%",
    toggleActions: "play none none reverse",
  },
});

// Animate Process Cards

// Animate Projects Cards (Staggered Effect)
gsap.from(".project-card", {
  opacity: 0,
  y: 80,
  stagger: 0.2,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projects-showcase",
    start: "top 80%",
    end: "top 40%",
    toggleActions: "play none none reverse",
  },
});

// Animate Overlay & Content in Projects Cards
gsap.from(".project-overlay", {
  opacity: 0,
  scale: 1.2,
  duration: 1.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projects-showcase",
    start: "top 80%",
    end: "top 40%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".project-content", {
  opacity: 0,
  y: 30,
  stagger: 0.3,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projects-showcase",
    start: "top 85%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
});
// Experience Section Animation
gsap.from("#experiences-image", {
  opacity: 0,
  x: -100,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#experiences-section",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from("#experiences-text", {
  opacity: 0,
  x: 100,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#experiences-section",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
});

// Materials Section Animation
gsap.from("#materials-text", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#materials-section",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from("#materials-image .image-wrap img", {
  opacity: 0,
  scale: 0.8,
  stagger: 0.3,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#materials-section",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".bestsellers-title", { opacity: 0, y: -20, duration: 1 });

  // Animate the cards when they appear
  gsap.from(".bestsellers-card", {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2, // Delay each card animation slightly
  });

  // Tab switching logic
  const tabs = document.querySelectorAll(".bestsellers-tab-link");
  const tabContents = document.querySelectorAll(".bestsellers-tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // Hide all tab contents
      tabContents.forEach((content) => {
        gsap.to(content, { opacity: 0, duration: 0.5, display: "none" });
      });

      // Show selected tab content with animation
      const targetTab = document.getElementById(tab.getAttribute("data-tab"));
      gsap.to(targetTab, { opacity: 1, duration: 0.8, display: "flex" });

      // Animate cards inside the active tab
      gsap.from(targetTab.querySelectorAll(".bestsellers-card"), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
      });
    });
  });

  // Hover effect on bestsellers cards
  document.querySelectorAll(".bestsellers-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.3 });
    });
  });
});
