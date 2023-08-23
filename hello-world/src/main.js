import { createApp } from "vue";
import App from "./App.vue";
import ContactDetailsVue from "./Contact-Details.vue";
import StudentDetails from "./student-details.vue";

console.log(App);
var app = createApp(App);
app.component("Contact-Details", ContactDetailsVue);
app.component("student-details", StudentDetails);

app.mount("#app");
