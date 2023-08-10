var app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handlekeyup(ev) {
      this.name = ev.target.value;
    },
  },
});

app.mount("#app");
