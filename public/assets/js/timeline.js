// function first(){

//     // Retrive User ID Result From sessionStorage
//     let userID = {
//       userID: sessionStorage.getItem("sessionID")
//     };

//     if (userID === undefined){
//       windows.location
//     }
//     // Send User ID to Backend for Querying
//     fetch("/api/images", {
//       method : 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: userID
//     }).then(response => response.json()).then((data) =>{ // Receive JSON Object
//         // Asign data to imageObject
//         let imageObject = data;
//         // Loop through the imageObject to extract image Link and Display to Html
//         for (innerObject in imageObject){
//           let currentObject = imageObject[innerObject]
//           let displayedDiv = $("<li><div><time>"+ currentObject.time + "<time>"+"<img src= \'" + currentObject.imageLink+ "\' alt=\'Image' width=\'100%\' height=\'100\'/>" + currentObject.notes + currentObject.ratings + "</div></li>");
//           $(".ulTimeline").append(displayedDiv);
//         }
//     });
// };


// $(document).ready(function() {

//   function second() {


    'use strict';

    $('#imageUploadModal').modal();
    // define variables
    var items = document.querySelectorAll(".timeline ul li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      // console.log('scrolling')
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop){
        // downscroll code
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      } else {
        // upscroll code
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.remove("in-view");
          }
        }
      }
      lastScrollTop = st;
    }

    var lastScrollTop = 0;
    
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

//   };
// second();
// });

// first();
