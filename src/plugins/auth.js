import firebase from 'firebase/app'

export default ({ app, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    // Check to see if the route has the meta field "authRequired" set to true
    let authRequired = to.matched.some(route => route.meta.authRequired)

    let isAuthenticated = firebase.auth().currentUser !== null

    if (authRequired) {
      isAuthenticated ? next() : next({ name: 'Home' })
    } else {
      next()
    }
  })
}
