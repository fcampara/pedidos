import firebase from 'firebase/app'
import 'firebase/auth'

export default ({ app, router, Vue, store }) => {
  // Register the Firebase authentication listener
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // Signed in. Let Vuex know.
      store.commit('auth/SET_USER', user)
      router.replace({ name: 'dashboard' })
      new Vue(app) /* eslint-disable-line no-new */
    } else {
      // Signed out. Let Vuex know.
      store.commit('auth/RESET_USER')
      router.replace({ name: 'signIn' })
      new Vue(app) /* eslint-disable-line no-new */
    }
  })
}
