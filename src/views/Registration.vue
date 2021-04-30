<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col col md="8">
          <b-card
            header="BlueBrick - Authorizatioan"
            header-bg-variant="primary"
            header-text-variant="white"
          >
            <b-card-text>
              <b-form @submit.prevent="onSubmit">
                <b-form-group description="Enter your email" label="Email">
                  <b-form-input
                    v-model="email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  description="Enter your username"
                  label="Username"
                >
                  <b-form-input v-model="username" required></b-form-input>
                </b-form-group>
                <b-form-group
                  description="Enter your password"
                  label="Password"
                >
                  <b-form-input
                    v-model="password"
                    type="password"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-button type="submit" variant="outline-primary"
                    >Registration</b-button
                  >
                </b-form-group>
                <b-form-group>
                  <div class="error" v-if="error">{{ error }}</div>
                </b-form-group>
              </b-form>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>

</template>

<script>
import net from '@/net'

export default {
  data () {
    return {
      email: '',
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    onSubmit () {
      const user = {
        email: this.email,
        username: this.username,
        password: this.password
      }
      this.error = ''
      net.user.register(user).then(() => {
        this.$router.push({ name: 'login' })
      }).catch(error => {
        this.error = error.toString()
      })
    }
  }
}
</script>
<style scoped>
.error {
  text-align: center;
}
</style>
