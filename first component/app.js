var app = Vue.createApp({
  data() {
    return {
    };
  },
});

app.component("contact-details", {
  data() {
    return {
      name: "Asraf Mridha",
    };
  },
  template: `<h1>Contact Details</h1>
      <p><strong> Name:</strong>Asraf Mridha</p>
      <p><strong> Website:</strong>www.globaltechgiant.com</p>
      <p><strong> Address:</strong>Dhaka ,Bangladesh</p>`,
});

app.mount("#app");
