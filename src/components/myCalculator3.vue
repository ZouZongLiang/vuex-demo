<template>
    <div>
        <button @click="todo('subasync')">sub</button>
        <h3>{{ count2 }}</h3>
        <button @click="todo('addasync')">add</button>

    </div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        data(){},
        computed:{
            ...mapState(['count2'])
        },
        methods:{
            todo(e){
                this.$store.dispatch(e)
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