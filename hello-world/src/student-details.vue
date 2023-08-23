<template>
    <div>
        <h1>Name:{{name}}</h1>
        <span>Age: {{age}}</span>
        <span>Class: {{clas}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:"Priyanka",
            age:25,
            clas:"honours 3rd Year",
        }
    }
}
</script>