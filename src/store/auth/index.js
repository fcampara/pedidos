import Firebase from 'firebase'

export default {
  namespaced: true,

  state: {
    user: {}
  },

  getters: {
    user (state) {
      return state.user
    },

    isAuthenticated (state) {
      return !!state.user
    }
  },

  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },

    RESET_USER (state) {
      state.user = null
    }
  },

  actions: {
    async signIn ({ commit }, payload) {
      let email = payload.email
      let password = payload.password

      await Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_USER', user)
        })
        .catch(error => {
          throw error
        })
    },

    async register ({ commit }, payload) {
      let email = payload.email
      let password = payload.password

      await Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_USER', user)
        })
        .catch(error => {
          throw error
        })
    },

    async signOut ({ commit }) {
      await Firebase.auth().signOut()
        .then(() => {
          commit('SET_USER', {})
        })
    }
  }
}
