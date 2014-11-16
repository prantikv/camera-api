function domLoaded(){
	alert("dom loaded");

document.addEventListener("deviceready", onDeviceReady, false);

}

function onDeviceReady() {
  

document.getElementById('gallery').addEventListener("click",function(){
	 alert(22);

	navigator.camera.getPicture(onSuccess, onFail, { quality: 50,destinationType: Camera.DestinationType.FILE_URI });
});

function onSuccess(imageURI) {
    var image = document.getElementById('myImage');
     image.src = imageURI;
      alert(imageURI);
}

function onFail(message) {
    alert('Failed because: ' + message);
}


} 