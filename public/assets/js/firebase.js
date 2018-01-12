function uploadToFirebase(files) {

  // Store Uploaded Image in variable file
  var file = files[0];

  var fileName = file.name;

  if (file) {

    var rootRef = firebase.storage().ref();
    var fileRef = rootRef.child(`images/${fileName}`);

    fileRef.put(file).then(() => {
      console.log("file successfully uploaded!");
    }).catch(err => console.log(err));

    fileRef.getDownloadURL().then((url) => {

      //Getting the download url from Firebase

      console.log(`Download Url : ${url}`);

      // Set the Source of the Image Preview to be the Link from Firebase
      var img = document.getElementById('image-preview');
      img.src = url;

      // console.log("Type of Url " + typeof(url));

      // Submit Upload Button
      $("#SubmitOK").on("click", function() {

        // console.log("User ID is " + sessionStorage.getItem("userID"));

        // Retrieve Latitude and Longitude of the Image Uploaded.
        EXIF.getData(file, function() {

          // Extract Meta Data From Image
          var latitude =  EXIF.getTag(this, "GPSLatitude");
          var longitude = EXIF.getTag(this, "GPSLongitude");
          var latitudeRef = EXIF.getTag(this, "GPSLatitudeRef");
          var longitudeRef = EXIF.getTag(this, "GPSLongitudeRef");

          // Format the Raw Long and Lat into Decimal Geo Coordinates
          if(latitude[0] != "undefined"){
            var formattedLatitude = parseFloat(latitude[0]) + (parseFloat(latitude[1])/ 60.00)+ (parseFloat(latitude[2])/3600.0);
            var formattedLongitude = parseFloat(longitude[0]) + (parseFloat(longitude[1])/ 60.00)+ (parseFloat(longitude[2])/3600.0);
          } else {
            var formattedLatitude = latitude;
            var formattedLongitude = longitude;
          }


          if(latitudeRef != "N" ){

            formattedLatitude = 0 - formattedLatitude;

          } // End If

          if(longitudeRef != "E"){

            formattedLongitude = 0 - formattedLongitude;

          } // End If

          // Create Image Object to Send Data to the Back End
            var imageSubmitObject = {
              user_id: sessionStorage.getItem("userID"),
              image_link: url,
              title: $("#imageUploadTitles").val(),
              rating: $(".br-current-rating").text(),
              notes: $("#uploadNotes").val(),
              latitude: null,
              longtitude: null
            };

          // Send the Image Object to the Backend for Storage in DB Using Sequelize
          fetch("/api/upload", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(imageSubmitObject)
          }).then(function(res) {

            if (res.ok) {
              res.json().then(function(message) {
                console.log("Image Sucessfully Stored in Database");
                // Refresh the Page When the Image is Sucessfully Uploaded to the Backend
                location.reload();
              });

            } else {

              console.log("Upload Failed");

            } // End of If Else Statement
          }); // End of Fetch Then

        }); // End of Get Image Meta Data Function


      }); // End of Submit On Click Event Listener

    }).catch(err => console.log(err)); // End of Get URL Download

  } // End of If File Not Empty Truthy
} // End of upload to Firebase Function
