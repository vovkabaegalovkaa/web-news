<template>
    <h1>{{title}}{{now}}</h1>
</template>

<script>
export default{
    data(){
        return{
            title: "Акутальные новости ",
            now: new Date().toLocaleDateString()
        }
    }
}
</script>