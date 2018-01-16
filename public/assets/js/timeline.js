$(document).ready(function() {

  $('#imageUploadModal').modal();
  $('#myModal').modal();


  function scrollEvent() {
    console.log("Scroll Event Function is Running");

    // define variables
    var items = document.querySelectorAll(".timeline ul li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }

    function callbackFunc() {
      console.log('scrolling');
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
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

  }; // End of scrollEvent

  // Function for Populating Timeline
  function timeline() {

    console.log("Timeline Function is Running");

    // Retrive sessionID Result From sessionStorage and store it in an Object
    let sessionIdObject = {
      sessionID: sessionStorage.getItem("sessionID")
    };

    // console.log("SessionID is" + JSON.stringify(sessionIdObject));

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

          // JQuery to Populate User Profile Picture Using Google Profile Image on TimeLine
          $(".user").attr("src", userData.profile_picture);

          // Store Unique User ID in Session Storage for Future Use.
          sessionStorage.setItem("userID", JSON.stringify(userData.id));
          // console.log("Storing userID in Session Storage: " + userData.id);

          // Post the User ID Object back to the Backend. User ID to be used to Query Image Table. Images Stored in an Object is Returned from the Post Request
          fetch("/api/images", {
            method : 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userID)
          }).then((res)=>{
            res.json().then(function(data){
              console.log("Images Received" + data);
                // Asign data to imageObject
                let imageObject = data;

                // Loop through the imageObject to extract image Link and Display to Html
                for ( var i = 0; i < imageObject.length; i ++){
                  let currentObject = imageObject[i];
                  console.log("Current Object is" + JSON.stringify(currentObject));

                  // Converting Database Date Format into Regular Date and Time
                  var objectDate = currentObject.createdAt;
                  console.log("Trimmed Object is " + trimedObjectDate);
                  var trimedObjectDate = objectDate.substring(0, objectDate.length - 8)
                  var objectDateArray = trimedObjectDate.split("T");
                  console.log("Trimmed Object Array is " + objectDateArray);
                  var trimmedDate = objectDateArray[0];
                  var trimmedTime = objectDateArray[1];

                  //  Creating the Divs that Display Each Image. Geolocation for Image Stored in Data Attribute of the Image Tag.
                  let displayedDiv = $("<li><div><h5 style = 'text-align: center; padding-bottom: 10px;'>" + currentObject.title + "</h5><img class=\'uploadedImages\' src= \'" + currentObject.image_link + "\' alt=\'Image' width=\'100%\' height=\'100\' id=\'image" + i + "\' data-latitude=\'" + currentObject.latitude + "\' data-longitude=\'"+currentObject.longtitude+ "\'"+"/><p style='padding-top: 10px;' class=\'ratingStars" + i + "\'\>Ratings: </p> <br>"+ "<time> Date: "+ trimmedDate + "<br> Time: " + trimmedTime + " hrs </time>" + "<p> Notes: "+ currentObject.notes + "<br></p></div></li>");

                  // Generate Code to Append Star Ratings
                  let checkedStars = currentObject.rating;
                  let uncheckedStars = 5 - checkedStars;

                  $(".ulTimeline").append(displayedDiv);

                  // Append Orange Stars
                  for (var j = 0; j < checkedStars; j++){
                    $(".ratingStars"+i).append("<i class=\'fa fa-star\' style=\'color:orange;\'></i>")
                  }

                  // Append Grey Stars
                  for (var y = 0; y < uncheckedStars; y++){
                    $(".ratingStars"+i).append("<i class=\'fa fa-star\' style=\'color:grey;\'></i>")
                  }

                  // Execute Scroll Event
                  scrollEvent();
                } // End of For Loop
            }); // End of Image Response
          }); // End of Image Post Request
        }); // End of ID Response

      } else {
        console.log("Looks like the response wasn't perfect, got status", res.status);
      }

    }); // End of ID Post Request
  }; // End of Function Main Timeline Function

  // Changes the main page background. 8 images every 5 seconds
  function run(interval, frames) {
      var int = 1;

      function func() {
          document.body.id = "bg"+int;
          int++;
          if(int === frames) { int = 1; }
      }

      var swap = window.setInterval(func, interval);
  }

  run(15000, 4); //milliseconds, frames

  // Execute Timeline Function
  timeline();

});
