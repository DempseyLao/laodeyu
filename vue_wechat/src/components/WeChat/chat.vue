<template>
    <div >{{chat_title}}</div>
</template>
<script>
export default {
    data(){
        return{
        chat_title:""
        } 
    },
   
    mounted(){
      this.chat_title=this.$route.params.name
    },
	
}

</script>
<style>

</style>

