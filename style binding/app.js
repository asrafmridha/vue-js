var app = Vue.createApp({
  data() {
    return {
      textColor: "red",
      bgColor: "red",
    };
  },
  methods: {
    setClass(param) {
      this.activeClass = param;
    },
  },
});

app.mount("#app");
