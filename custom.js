function domLoaded(){

document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady() {
    // Now safe to use device APIs
    // alert("we were called");
    //     alert(navigator.camera);
}   



function takepicture(){
	// alert(2);

	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,destinationType: Camera.DestinationType.FILE_URI });
}

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
     image.src = imageURI;
      alert(imageURI);
}

function onFail(message) {
    alert('Failed because: ' + message);
}


