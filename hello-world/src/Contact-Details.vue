<template>
   <div class="contact-details">
      <h1>Contact Details</h1>
      <p><strong> Name:</strong>{{name}}</p>
      <p><strong> Website:</strong>www.globaltechgiant.com</p>
      <p><strong> Address:</strong>Dhaka ,Bangladesh</p>
   </div>
</template>

<script>
export default {
 data(){
  return{
     name:"Tahmina"
  }
 }
}
</script>

<style scoped>
.contact-details{
   border : 1px solid gray;
   margin :11px 22px;
   padding :22px;
   
}
</style>