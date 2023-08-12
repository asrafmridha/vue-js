var app = Vue.createApp({
  data() {
    return {
      mobile: "",
      name: {
        firstName: "",
        lastName: "",
      },
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
        alert("An Otp Has been Sent");
      }
    },
    // "name.firstName": function (newValue, oldValue) {
    //   console.log(newValue);
    // },
    // "name.lastName": function (newValue, oldValue) {
    //   console.log(newValue);
    // },
    name: {
      deep: true,
      handler: function (newValue) {
        console.log(newValue);
      }
    }
  },
});

app.mount("#app");
