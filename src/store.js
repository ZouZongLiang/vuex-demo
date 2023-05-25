import Vuex  from "vuex";


export default new Vuex.Store({
    state:{
        msg:"这是vuex全局数据",
        count1: 0,
        count2: 0,

    },
    mutations:{
        add1(state){
            state.count1++
        },
        sub1(state){
            state.count1--
        },
        add2(state){
            state.count2++
        },
        sub2(state){
            state.count2--
        },
        calcuWithParam(state, step){
            state.count2 += step
        }
    },
    actions:{
        addasync(context){
            setTimeout(() => {
                context.commit('add2')
            }, 1000);
        },
        subasync(context){
            setTimeout(() => {
                context.commit('sub2')
            }, 1000);
        },

    },
    getters:{
        beautifyState(state){
            return `<h4>Vuex global data:</h4>
            <ul>
            <li>msg:${state.msg}</li>
            <li>count:${state.count1}</li>
            <li>count2:${state.count2}</li>
            </ul>`
        }

    }
})