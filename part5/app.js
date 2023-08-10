var app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    getCurrentTime() {
      let ct = new Date();
      return ct;
    },
  },

});

app.mount("#app");
