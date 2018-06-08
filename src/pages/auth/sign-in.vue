<template>
 <transition appear enter-active-class="animated flipInY" leave-active-class="animated flipOutY">
  <q-page class="flex flex-center">

    <q-card class="card-sign-in q-pa-md shadow-9 col-auto" inline color="white">
      <q-card-media class="q-pa-md justfy">
        <img src="../../assets/unigran-net.png" style=""/>
      </q-card-media>
      <form @submit.prevent="signIn()">
        <q-card-main>
          <q-field icon="email" icon-color="light" class="q-mt-md">
            <q-input placeholder="Email Address" v-model.trim="form.email" type="email" autocomplete="username"
            @blur="$v.form.email.$touch" :error="$v.form.email.$error"
            />
          </q-field>

          <q-field icon="lock" icon-color="light" class="q-mt-lg">
            <q-input placeholder="Password" v-model="form.password" type="password" autocomplete="current-password"
            @blur="$v.form.password.$touch" :error="$v.form.password.$error"
            />
          </q-field>
        </q-card-main>

        <q-card-actions align="center" class="q-mt-lg">
          <q-btn label="Login" color="primary" size="large" type="submit"/>

          <q-btn to="register" label="Cadastrar" color="primary" size="large"/>

        </q-card-actions>
      </form>

    </q-card>

  </q-page>
  </transition>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'PageSignIn',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    signIn () {
      console.log(this.$v.form.$touch())
      let credentials = {
        email: this.form.email,
        password: this.form.password
      }

      this.$store.dispatch('auth/signIn', credentials).then(user => {
        this.$router.replace({ name: 'dashboard' })
      }).catch(error => {
        this.$q.notify('E-mail ou senha incorreto')
        console.error(`Not signed in: ${error.message}`)
      })
    }
  }
}
</script>
