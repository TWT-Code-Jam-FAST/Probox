let datas = [];
let isRecording = false;
let recordVoiceBtn = document.getElementById("voice-record-btn");
let audioContainer = document.getElementById("voice-recorder-container");
let micDevice = navigator.mediaDevices.getUserMedia(
    {
        audio:true
    }
);

micDevice.then( (stream) => {
   let voiceRecorder = new MediaRecorder(stream);
   voiceRecorder.ondataavailable = (evt) => { 
       datas.push(evt.data);
       if(voiceRecorder.state == "inactive") {
           let blob = new Blob(datas,{type:"audio/webm"});
           datas = [];
           let newAudio = document.createElement("audio");
           newAudio.setAttribute("controls", "controls");
           newAudio.innerHTML = `<source src="${URL.createObjectURL(blob)}" type="video/webm"/>`;
           audioContainer.innerHTML = "";
           audioContainer.appendChild(newAudio);
        }
    };
    recordVoiceBtn.addEventListener("click", () => {
       if(isRecording) {
            voiceRecorder.stop();
            isRecording = false;
            recordVoiceBtn.innerHTML = "Record";

        } else {
            voiceRecorder.start(100);
            isRecording = true;
            recordVoiceBtn.innerHTML = "Stop";
        }
        
        
    }) 
});
