var app = Vue.createApp({
  data() {
    return {
      mobile: "",
    };
  },
  watch: {
    mobile(newValue, oldValue) {
      console.log(newValue);
      if (isNaN(newValue)) {
        alert("Please give a number");
        this.mobile = oldValue;
      }
      if (newValue.length == 11) {
        alert('An Otp Has been Sent');
      }
    },
  },
});

app.mount("#app");
