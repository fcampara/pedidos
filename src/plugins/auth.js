import Firebase from 'firebase'

export default ({ app, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    // Check to see if the route has the meta field "authRequired" set to true
    let authRequired = to.matched.some(route => route.meta.authRequired)

    let isAuthenticated = Firebase.auth().currentUser !== null

    if (authRequired) {
      console.log('Auth.js :', authRequired)
      if (isAuthenticated) {
        console.log('isAuthenticated :', isAuthenticated)
        // User is already signed in. Continue on.
        next()
      } else {
        console.log('isAuthenticated :', isAuthenticated)
        // Not signed in. Redirect to login page.
        next({
          name: 'signIn'
        })
      }
    } else {
      // Doesn't require authentication. Just continue on.
      next()
    }
  })
}
