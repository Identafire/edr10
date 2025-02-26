const mediaQuery = window.matchMedia('(min-width: 576px)');
function handleMediaQueryChange(event) {
    if (event.matches) {
        // The media query matches, execute code for smaller screens
        console.log('Screen width is 576px or more');
        $('.igation').removeClass('visually-hidden');
    } else {
        // The media query does not match, execute code for larger screens
        console.log('Screen width is less than 576px');
        $('.igation').addlass('visually-hidden');
    }
}
mediaQuery.addEventListener('change', handleMediaQueryChange);
// Call the handler once to set initial state
handleMediaQueryChange(mediaQuery);
//open switch
function clickToOpen() {
    $('#mainNav').toggleClass('close');
    $('#mainNav').toggleClass('open');
} // // import 'bootstrap/js/dist/alert';
 // import 'bootstrap/js/dist/button';
 // import 'bootstrap/js/dist/carousel';
 // import 'bootstrap/js/dist/collapse';
 // // import 'bootstrap/js/dist/dropdown';
 // // import 'bootstrap/js/dist/modal';
 // import 'bootstrap/js/dist/offcanvas';
 // // import 'bootstrap/js/dist/popover';
 // import 'bootstrap/js/dist/scrollspy';
 // // import 'bootstrap/js/dist/tab';
 // // import 'bootstrap/js/dist/toast';
 // import 'bootstrap/js/dist/tooltip';
 // define an observer instance
 // const numSteps = 20.0;
 // let boxElement;
 // let prevRatio = 0.0;
 // let increasingColor = "rgb(40 40 190 / ratio)";
 // let decreasingColor = "rgb(190 40 40 / ratio)";
 // // Set things up
 // window.addEventListener(
 //   "load",
 //   (event) => {
 //     boxElement = document.querySelector("#arrowIncreaseDemand");
 //     createObserver();
 //   },
 //   false,
 // );
 // function createObserver() {
 //   let observer;
 //   let options = {
 //     root: null,
 //     rootMargin: "0px",
 //     threshold: buildThresholdList(),
 //   };
 //   observer = new IntersectionObserver(handleIntersect, options);
 //   observer.observe(boxElement);
 // }
 // function buildThresholdList() {
 //   let thresholds = [];
 //   let numSteps = 20;
 //   for (let i = 1.0; i <= numSteps; i++) {
 //     let ratio = i / numSteps;
 //     thresholds.push(ratio);
 //   }
 //   thresholds.push(0);
 //   return thresholds;
 // }
 // function handleIntersect(entries, observer) {
 //   entries.forEach((entry) => {
 //     if (entry.intersectionRatio > prevRatio) {
 //       entry.target.style.backgroundColor = increasingColor.replace(
 //         "ratio",
 //         entry.intersectionRatio,
 //       );
 //     } else {
 //       ("#arrowIncreaseElement").document.addClass("active");
 //       entry.target.style.backgroundColor = decreasingColor.replace(
 //         "ratio",
 //         entry.intersectionRatio,
 //       );
 //     }
 //     prevRatio = entry.intersectionRatio;
 //   });
 // }

//# sourceMappingURL=index.aa69868b.js.map
