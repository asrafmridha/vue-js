var app = Vue.createApp({
  data() {
    return {
      number: "",
      result: "",
    };
  },
  methods: {
    handleInput(e) {
      this.number = e.target.value;
    },
    getDouble() {
      this.result = this.number * 2;
    },
    getSquare() {
      this.result = this.number * this.number;
    },
    reset() {
      this.number = "";
      this.result = "";
    },
  },
});

app.mount("#app");
