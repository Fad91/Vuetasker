<template>
  <div>
    <h1>Tic Tac Toe</h1>
    <div class="wrapper" @click="onClick">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      move: 0,
      areas: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      result: "",
      cols: document.getElementsByClassName("col"),
      empty_cols: [],
    };
  },

  methods: {
    onClick(evt) {
      if (this.move % 2 === 0) {
        evt.target.innerHTML = "X";
      } else {
        evt.target.innerHTML = "O";
      }
      this.move++;
      this.getCheck();
    },

    getCheck() {
      for (let i = 0; i < this.areas.length; i++) {
        if (
          this.cols[this.areas[i][0]].innerHTML == "X" &&
          this.cols[this.areas[i][1]].innerHTML == "X" &&
          this.cols[this.areas[i][2]].innerHTML == "X"
        ) {
          this.result = "крестики";
          this.prepareResult(this.result);
        } else if (
          this.cols[this.areas[i][0]].innerHTML == "O" &&
          this.cols[this.areas[i][1]].innerHTML == "O" &&
          this.cols[this.areas[i][2]].innerHTML == "O"
        ) {
          this.result = "нолики";
          this.prepareResult(this.result);
        }
      }
    },
    prepareResult(result) {
      alert("Выиграли " + result + "!");
      location.reload();
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.wrapper {
  width: 600px;
  height: 600px;
  outline: 1px solid black;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.col {
  width: 200px;
  height: 200px;
  outline: 1px solid black;
  font-size: 175px;
  text-align: center;
  color: brown;
}
</style>
