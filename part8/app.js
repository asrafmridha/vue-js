var app = Vue.createApp({
  data() {
    return {
      number: "",
      result: "",
    };
  },
  methods: {
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
