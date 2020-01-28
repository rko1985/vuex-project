import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default{
    namespaced: true,

    state: { //where all the data for the store is stored
        todos: []
    },
    mutations,
    getters,
    actions
}
