var app = Vue.createApp({
  data() {
    return {
      skills: ["HTML", "CSS", "javaScript"],
      newSkill: "",
    };
  },
  methods: {
    addNewSkill() {
      this.skills.push(this.newSkill);
    },
  },
});

app.mount("#app");
