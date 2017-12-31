
function uploadToFirebase(files) {
  
  var file = files[0];
  // console.log(file);
  var fileName = file.name;
  if (file) {
    
    var rootRef = firebase.storage().ref();
    var fileRef = rootRef.child(`images/${fileName}`);
    
    fileRef.put(file)
      .then(() => {
          console.log("file successfully uploaded!");
      })
      .catch(err => console.log(err));
    
    fileRef.getDownloadURL()
      .then((url) => {
          //Getting the download url.
          console.log(`Download Url : ${url}`);

          var img = document.getElementById('image-preview');
          img.src = url;

          // // console.log(url)
          // $(".image-preview").attr("src","url");
          // test-image: "http://www.wildaid.org/sites/default/files/iStock_000011369650Large.jpg
      })
      .catch(err => console.log(err));

    var metadata = {
      customMetadata: {
        'rating': '',
        'note': ''
      }
    }

    // Update metadata properties
    fileRef.updateMetadata(metadata)
      .then((metadata) => {
      // Updated metadata for image is returned
      }).catch(err => console.log(err));
      
    // fileRef.getMetadata(metadata)
    //   .then((metadata) => {

    //   }).catch(err => console.log(err));
  }
 }

