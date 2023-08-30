import { createStore } from "vuex";

const store = createStore({
    state: {
        count:0
    },
    mutations: {
        countIncrement(state, payload){
            state.count +=payload
        }
    },
    actions: {
        increase({commit}, payload){
            commit("countIncrement", payload)
        }
    }
})

export default store;