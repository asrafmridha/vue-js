var app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment(value) {
      this.count = this.count + value;
    },
    decrement(value) {
      this.count = this.count - value;
    },
  },
});

app.mount("#app");
