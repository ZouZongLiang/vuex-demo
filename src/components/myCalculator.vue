<template>
    <div>
        <button @click="sub1">sub</button>
        <h3>{{ count1 }}</h3>
        <button @click="add1">add</button>

    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
    export default {
        data(){},
        computed:{
            ...mapState(['count1'])
        },
        methods:{
            ...mapMutations(['add1', 'sub1'])
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