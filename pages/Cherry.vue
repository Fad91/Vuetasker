<template>
    <div class="cherry">
      <ValidationObserver v-slot="{invalid}">
          <form @submit.prevent="onSubmit">
              <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="name">
                  Как тебя зовут?
              <input type="text" name="name" id="name" v-model="name">
              </label>
              <span>{{ errors[0] }}</span>
              </ValidationProvider>
              <button type="submit" :disabled="invalid">Отправить</button>
          </form>
          <p class="visually-hidden">Ты няшка, {{name}}</p>
      </ValidationObserver>
    </div>
</template>


<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
    name: "Cherry",
    components: {
    ValidationObserver,
    ValidationProvider,
  },
    data() {
        return {
            name: ""
        }
    },
    methods: {
        onSubmit() {
            let p = document.querySelector('p');
            let f = document.querySelector('form')
            f.classList.add('visually-hidden')
            p.classList.remove('visually-hidden')
        }
    },
}
</script>

<style scoped>

.cherry {
    height: 500px;
    margin: 100px auto;
    border: 1px solid brown;
    background-image: linear-gradient(to bottom, white 35%, pink 65%, violet 85%);

}

form {
    text-align: center;
    margin-top: 50px;
}

label {
    font-size: 50px;
}

input {
    display: block;
    margin: 30px auto;
    width: 300px;
    height: 50px;
    font-size: 30px;
    border-color: brown;
}

button {
    width: 130px;
    padding: 10px;
    margin-top: 30px;
    border-color:brown;
}

p {
    margin: 0 auto;
    font-size: 80px;
    text-align: center;
    margin-top: 150px;
}

</style>