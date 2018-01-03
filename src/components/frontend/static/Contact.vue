<template>
  <div class="container">
    <div class="columns is-mobile is-multiline">
      <div class="column is-12-mobile is-half-tablet is-half-desktop is-offset-3-tablet is-offset-3-desktop">
        <h1 class="page__title title">Contact Me</h1>
        <div class="field">
          <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Full name" v-model="form.name" />
          <span class="icon is-small is-left">
            <i class="material-icons">person</i>
          </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="email address" v-model="form.email" />
            <span class="icon is-small is-left">
              <i class="material-icons">email</i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="text" placeholder="Subject (e.g. Hiring opportunity)" v-model="form.subject" />
            <span class="icon is-small is-left">
              <i class="material-icons">subject</i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control">
            <textarea class="textarea" placeholder="Email content" v-model="form.content"></textarea>
          </p>
        </div>

        <button class="button is-black" v-on:click="sendForm">SEND</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        subject: '',
        content: ''
      }
    }
  },
  head: {
    title: {
      inner: 'wcarron',
      complement: 'contact'
    }
  },
  methods: {
    sendForm () {
      console.log('shit')
    }
  }
}
</script>

