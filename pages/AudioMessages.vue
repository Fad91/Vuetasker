<template>
  <div id="audioMessages">
    <h1>Audio Messages</h1>
    <div class="buttons">
      <button type="button" id="start" @click="initAudio">Start</button>
      <button type="button" id="stop" @click="stopAudio">Stop</button>
    </div>
    <div class="messages">
    </div>
  </div>
</template>

<style scoped>
#audioMessages {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6a7d91;
  width: 1000px;
  margin: 0 auto;
  border: 1px solid rgba(20, 153, 2, 0.3);
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
  box-shadow: 1px 1px 10px 1px rgb(206, 205, 205);
  padding: 20px;
}

.buttons {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>

<script>
export default {
  data() {
    return {
      device: navigator.mediaDevices.getUserMedia({ audio: true }),
      items: [],
      recorder: null
    };
  },
  methods: {
    initAudio() {
      this.device.then((stream) => {
        this.recorder = new MediaRecorder(stream);
        this.recorder.ondataavailable = (e) => {
          this.items.push(e.data);
          if (this.recorder.state == "inactive") {
            /*eslint-disable no-undef*/
            var blob = new Blob(this.items, { type: "audio/webm" });
            var audio = document.querySelector(".messages");
            var mainAudio = document.createElement("audio");
            mainAudio.setAttribute("controls", "controls");
            audio.appendChild(mainAudio);
            mainAudio.innerHTML =
              '<source src="' +
              URL.createObjectURL(blob) +
              '"type="video/webm" />';
          }
        };
        this.recorder.start(100);
        // setTimeout(() => {
        //     recorder.stop();
        // },5000)
      });
    },
    stopAudio() {
      this.recorder.stop();
    },
  },
};
</script>
