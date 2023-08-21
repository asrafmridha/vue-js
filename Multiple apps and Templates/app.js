var app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  template: `<h1>Enter Your Name</h1>
      <input type="text" v-model="name">
      <br>
      <p>My Name is :{{ name }}</p>`,
});

app.mount("#app1");

var app = Vue.createApp({
  data() {
    return {
      message: "Hello World!",
    };
  },
  template: "<h1>{{ message }}</h1>",
});

app.mount("#app2");
