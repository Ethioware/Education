var btn = document.querySelector('#text');
var content = document.querySelector('#content');

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition ; 

const recognition = new speechRecognition();
recognition.interimResults = false

recognition.onstart = function() {
      console.log ('started')
}
recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript
    content.textContent = transcript;
    readOutLoud(transcript);
}


btn.addEventListener('click', () => {
    recognition.start()
})

function readOutLoud (message) {
    const speech = new SpeechSynthesisUtterance();
     if(message.includes('how are you')){
    const greet = 'why do you care'
    speech.text = greet
}
    speech.text = 'speak english you stupid creature'
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}