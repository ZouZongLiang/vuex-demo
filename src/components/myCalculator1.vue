<template>
    <div>
        <button @click="todo('sub')">sub</button>
        <h3>{{ $store.state.count2 }}</h3>
        <button @click="todo('add')">add</button>

    </div>
</template>

<script>
    export default {
        data(){},

        methods:{
            todo(e){
                if(e=='sub'){
                    this.$store.commit("sub2")
                }else{
                    this.$store.commit("add2")
                }
            }
        }
    }
</script>

<style scoped>
button{
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
}
h3{
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    width: 100px;
    text-align: center;
}
</style>