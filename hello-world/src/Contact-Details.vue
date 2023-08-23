<template>
   <div class="contact-details">
      <h1>Contact Details</h1>
      <p><strong> Name:</strong>{{name}}</p>
      <p><strong> Website:</strong>{{website}}</p>
      <p><strong> Address:</strong>{{address}}</p>
   </div>
</template>

<script>
export default {
   props:{
      name:String,
      website :{
         type :String,
         required:false,
         default:"youtube.com"
      },
      address:{
         type :String,
         required:true,
      }
   },
 data(){
  return{
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