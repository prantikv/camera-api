document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use device APIs
    alert("we were called");
        alert(navigator.camera);
}


document.getElementById('gallery').addEventListener('click',takepicture);


function takepicture(){
	alert(2);
}
