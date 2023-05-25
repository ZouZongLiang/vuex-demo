<template>
  <div>
    <h2>vuex demo</h2>
    <hr>
    <p>1.使用 <code>this.$store.state.msg</code> 可以访问到state中的数据</p>
    <h3>{{ $store.state.msg }}</h3>
    <hr>
    <p>2.使用计算属性将state的数据挂载到本组件中 </p>
    <h3>{{ msg }}</h3>
    <hr>
    <p>3.在组件中使用的一个demo(mapState、mapMutation) </p>
    <MyCalculator></MyCalculator>
    <hr>
    <p>4.在组件中使用的一个demo($store.state、$store.mutation) </p>
    <MyCalculator1></MyCalculator1>
    <hr>
    <p>5.异步调用，使用Actions 延时1s生效</p>
    <p> 使用mapActions</p>
    <MyCalculator2></MyCalculator2>
    <hr>
    <p>6.异步调用，使用Actions 延时1s生效</p>
    <p> 使用this.$store.dispath</p>
    <MyCalculator3></MyCalculator3>
    <hr>
    <p>7.getters 的使用。this.$store.getters</p>
    <h3>返回的数据:</h3>
    <h3>{{ $store.getters.beautifyState }}</h3>
    <h3>渲染后的结果：</h3>
    <h4 v-html="$store.getters.beautifyState"></h4>
    <hr>
    <p>8.getters 的使用。mapGetters</p>
    <h3>返回的数据:</h3>
    <h3>{{ beautifyState }}</h3>
    <h3>渲染后的结果：</h3>
    <h4 v-html="beautifyState"></h4>

    <hr>
    <p draggable="true">9.mutation传参 传入step=+2/-2</p>
    <MyCalculator4></MyCalculator4>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import MyCalculator from "./components/myCalculator.vue"
import MyCalculator1 from "./components/myCalculator1.vue"
import MyCalculator2 from "./components/myCalculator2.vue"
import MyCalculator3 from "./components/myCalculator3.vue"
import MyCalculator4 from "./components/myCalculator4.vue"




  export default {
    components:{
      MyCalculator,
      MyCalculator1,
      MyCalculator2,
      MyCalculator3,
      MyCalculator4
    },
    data(){
      return {

      }
    },
    computed:{
      ...mapState(['msg']),
      ...mapGetters(['beautifyState'])
    }
  }
</script>

<style scoped>

</style>