var app = Vue.createApp({
  data() {
    return {
      activeClass: "red",
      result: "",
    };
  },
  methods: {
    setClass(param) {
      this.activeClass = param;
    },
  },
});

app.mount("#app");
