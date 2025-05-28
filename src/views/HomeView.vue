<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <FormComp v-slot="{ errors, values, validate }" @submit="onSubmit">
    {{ errors }} {{ values }}

    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <FieldComp id="email" name="email" type="email" class="form-control"
      rules="email|required"
      v-model="user.email"
               placeholder="請輸入 Email"
               :class="{ 'is-invalid': errors['email']}"></FieldComp>
      <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
    </div>

    <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>
    <button class="btn btn-primary" type="submit">Submit</button>
  </FormComp>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
  created() {
    console.log(this);
  },
};
</script>
