import {createStore} from 'vuex'
import companiaStore from '../modules/compania/store/compania'

const store = createStore({
    modules:{
        companiaStore
    }
})

export default store