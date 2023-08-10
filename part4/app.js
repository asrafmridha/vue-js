var app = Vue.createApp({
  data() {
    return {
      tutorialInfo: {
        name: "Vue Js 3",
        githubLink: "https://github.com/asrafmridha",
      },
      htmlCode: '<a href="https://github.com/asrafmridha">Github</a>',
    };
  },
});

app.mount("#app");
