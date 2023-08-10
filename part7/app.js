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
    handleFormSubmit() {
      // e.preventDefault();
      console.log("form Submitted");
    },
    handleCardEvent(e) {
      console.log(e);
      console.log("Card Clicked");

    },
    handleCardViewEvent(e) {
      e.stopPropagation(); 
      console.log('View Clicked');
      console.log(e);
    },
  },
});

app.mount("#app");
