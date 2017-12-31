function first() {

  // Retrive sessionID Result From sessionStorage and store it in an Object
  let sessionIdObject = {
    sessionID: sessionStorage.getItem("sessionID")
  };

  console.log("SessionID is" + JSON.stringify(sessionIdObject));

  // Retrieve User ID from Database Using sessionID
  fetch("/api/ID", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sessionIdObject)
  }).then((res) => {

    if (res.ok) {

      res.json().then(function(userData) {

        // Convert userData to JSON
        var userData = JSON.parse(userData);

        // Create an Object that Stores the User ID that was Returned from the Previous Post Request
        var userID = {
          userID: userData.id
        }

        // JQuery to Populate User Profile Picture on TimeLine
        $(".user").attr("src", userData.profile_picture);

        // Store Unique User ID in Session Storage for Future Use.
        sessionStorage.setItem("userID", JSON.stringify(userData.id));
        console.log("Storing userID in Session Storage: " + userData.id);

        // Post the User ID Object back to the Backend. User ID to be used to Query Image Table
        fetch("/api/images", {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userID)
        }).then((res)=>{
          res.json().then(function(data){
            console.log("Images Received" + data);
            // Receive JSON Object
              // Asign data to imageObject
              // let imageObject = data;
              // Loop through the imageObject to extract image Link and Display to Html
              // for (innerObject in imageObject){
              //   let currentObject = imageObject[innerObject]
              //   let displayedDiv = $("<li><div><time>"+ currentObject.time + "<time>"+"<img src= \'" + currentObject.imageLink+ "\' alt=\'Image' width=\'100%\' height=\'100\'/>" + currentObject.notes + currentObject.ratings + "</div></li>");
              //   $(".ulTimeline").append(displayedDiv);
              // } // End of for Loop
          }); // End of Image Response
        }); // End of Image Post Request
      }); // End of ID Response

    } else {
      console.log("Looks like the response wasn't perfect, got status", res.status);
    }

  }); // End of ID Post Request
}; // End of Function First

$(document).ready(function() {

  function second() {
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

 };
  first();
  second();
});
