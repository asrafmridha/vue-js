var app = Vue.createApp({
  data() {
    return {
      review: "",
      skills: [
        { name: "JAVA", experience: 1 },
        { name: "Python", experience: 2 },
        { name: "Php", experience: 3 },
        { name: "Laravel", experience: 2 },
        { name: "HTML", experience: 4 },
        { name: "CSS", experience: 1.5 },
        { name: "JAVAScript", experience: 2.5 },
      ],
    };
  },
  computed: {
    totalCount1() {
      console.log("hlw Tahmina");
      return this.skills.length;
    },
    experiencedSkills() {
      let es = this.skills.filter((item) => {
        return item.experience >= 3;
      });
      return es;
    },
  },
  methods: {
    removeSkill(index) {
      this.skills.splice(index, 1);
    },
    totalCount() {
      return this.skills.length;
    },
  },
});

app.mount("#app");
