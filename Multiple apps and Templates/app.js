var app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
});

app.mount("#app1");

var app = Vue.createApp({
  data() {
    return {
      message: "Hello World!",
    };
  },
});

app.mount("#app2");
