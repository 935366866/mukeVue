import Vue from 'vue'
const state={      //存放数据
    orderList:[],
    params:{}

}
const getters={  //页面中是无法直接调用state里面的数据，但是可以调用getters的数据
    getOrderList:function(state){
        return state.orderList
    }
}
const actions={  //异步操作
    fetchOrderList({commit,state}){
        Vue.http.get("/api/getOrderList",state.params)
        .then((res)=>{
            console.log(res)
            commit('updateOrderList',res.data.list)
        },(err)=>{

        })
    }
}
const mutations={  //同步的更改
    updateOrderList({state,orderList}){
        state.orderList=orderList
    },
    updateParams(state,{key,val}){
        state.params[key]=val
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}