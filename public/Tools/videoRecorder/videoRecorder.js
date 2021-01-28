let isRecording = false;
let videoConfiguration = { 
    audio: true, 
    video: { 
        facingMode: "user", 
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 } 
    } 
}; 

if (!navigator.mediaDevices) {
    navigator.mediaDevices = {};
    navigator.mediaDevices.getUserMedia = function(videoConfiguration) {
        let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not supported in this browser'));
        }
        return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, videoConfiguration, resolve, reject);
        });
    }
} else{
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
        devices.forEach(()=>{
        })
    })
    .catch(()=>{
    })
}

navigator.mediaDevices.getUserMedia(videoConfiguration)
.then(function(mediaVid) {
    let video = document.querySelector('video');
    if ("srcObject" in video) {
        video.srcObject = mediaVid;
    } else {
        video.src = window.URL.createObjectURL(mediaVid);
    }
    
    video.onloadedmetadata = function(evt) {
        video.play();
    };
    
    let recordButton = document.getElementById('record-btn');
    let vidSave = document.getElementById('recorded-video');
    let mediaRecorder = new MediaRecorder(mediaVid);
    let dataStorage = [];
    
    recordButton.addEventListener('click', (evt)=>{
        if (isRecording) {
           mediaRecorder.stop();
           isRecording = false;
           recordButton.innerHTML = "Record"; 
        } else {
            mediaRecorder.start();
            isRecording = true;
            recordButton.innerHTML = "Stop Record";
        }
    })

    mediaRecorder.ondataavailable = function(evt) {
        dataStorage.push(evt.data);
    }
    mediaRecorder.onstop = (ev)=>{
        let blob = new Blob(dataStorage, {'type':'video/mp4;' });
        dataStorage = [];
        let videoURL = window.URL.createObjectURL(blob);
        vidSave.src = videoURL;
    }
})
