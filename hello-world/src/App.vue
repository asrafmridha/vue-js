<template>
  <div>
    <h1>{{msg}}</h1>
    <Contact-Details name="Tahmina Toma" website="thaminatoma.com" address="Char Afra"></Contact-Details>
    
    <Contact-Details name="Priyanka Priya"  address="Parnaraynpur"></Contact-Details>

    <student-details></student-details>
  </div>
</template>

<script>


export default {
 data(){
  return{
     msg:"Hello Tahmina"
  }
 }
}
</script>
