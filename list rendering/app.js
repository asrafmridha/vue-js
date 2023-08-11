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
      this.newSkill= ""
    },
    removeSkill(i) {
      this.skills.splice(i,1);
    },
  },
});

app.mount("#app");
