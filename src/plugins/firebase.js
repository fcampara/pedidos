import firebase from 'firebase/app'
import firestore from 'firebase/firestore' // eslint-disable-line
import firebaseConfig from '../../firebase.conf'

export default ({ Vue }) => {
  // Initialize Firebase from settings
  firebase.initializeApp(firebaseConfig)

  // Configure Firestore
  firebase.firestore().settings({ timestampsInSnapshots: true })

  firebase.firestore().enablePersistence().then(() => {
    console.log('Tentando ativar persistência...')
  }).catch(err => {
    switch (err) {
      case 'failed-precondition':
        console.error('Mais de uma aba aberta')
        break

      case 'unimplemented':
        console.error('Navegador não suporta persistência de dados')
        break
    }
  })

  Vue.prototype.$firebase = firebase
}
