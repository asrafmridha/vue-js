var app = Vue.createApp({
  data() {
    return {
      show: false,
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
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
});

app.mount("#app");
