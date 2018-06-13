import firebase from 'firebase/app'

export const request = {
  namespaced: true,

  state: {
    requests: []
  },

  getters: {},

  mutations: {
    SET_REQUESTS (state, payload) {
      state.requests = payload
    }
  },

  actions: {
    async finish ({ commit }, payload) {
      let db = firebase.firestore()
      await db.collection('request').doc(payload.id).update({
        finish: true
      }).then(() => {
        console.log('Atualizado com sucesso')
      }).catch((err) => {
        console.error(err)
      })
    },
    async saveRequest ({ commit }, payload) {
      let db = firebase.firestore()

      await db.collection('request').add(payload).then().catch(error => {
        console.error('Erro ao salvar: ', error)
      })
    },
    async getAllRequests ({ commit }) {
      let db = firebase.firestore()

      await db.collection('request').orderBy('protocolo', 'desc').limit(50).onSnapshot(querySnapshot => {
        let requests = []
        querySnapshot.forEach(doc => {
          requests.push(doc.data())
          requests[requests.length - 1].id = doc.id
        })
        commit('SET_REQUESTS', requests)
      }, error => {
        console.error(error)
      })
    }
  }
}
