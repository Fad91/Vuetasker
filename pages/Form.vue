<template>
  <div id="form">
    <h1>Регистрация</h1>
    <ValidationObserver v-slot="{ handleSubmit, reset, invalid }">
      <form
        @submit.prevent="handleSubmit(onSubmit)"
        @reset.prevent="reset(onReset)"
      >
        <fieldset class="login">
          <legend>Основная информация</legend>
          <ValidationProvider rules="required|max:10" v-slot="{ errors }">
            <label for="login">
              <span>Ваш логин</span>
              <input
                v-model="formData.login"
                type="text"
                name="login"
                id="login"
              />
            </label>
            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <label for="password">
              <span>Пароль</span>
              <input
                type="password"
                name="password"
                id="password"
                v-model="formData.password"
              />
            </label>
            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
        </fieldset>
        <fieldset class="contacts">
          <legend>Контактные данные</legend>
          <ValidationProvider rules="email" v-slot="{ errors }">
            <label for="email">
              <span>Email</span>
              <input
                type="email"
                name="email"
                id="email"
                v-model="formData.email"
              />
            </label>
            <span class="error-message">{{ errors[0] }}</span>
          </ValidationProvider>
          <label for="tel">
            <span>Телефон</span>
            <input type="tel" name="tel" id="tel" v-model="formData.tel" />
          </label>
        </fieldset>
        <button type="submit" :disabled="invalid">Отправить</button>
        <button type="reset" @click="onReset">Сброс</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
// import { email } from 'vee-validate/dist/rules';
// import { extend } from "vee-validate";
// :disabled="invalid"
// extend(
//   // "correctLength", value => {
//   //   if (value.length <= 10) {
//   //     return true
//   //     }
//   //   return "Имя должно состоять из 10 символов максимум, приятель"
//   // }
//   "correctLength",
//   {
//     validate(value) {
//       if (value.length > 0 && value.length <= 10) {
//         return {
//           required: true,
//           valid: true,
//         };
//       }
//       return {
//         valid: false
//       }
//     },
//     computesRequired: true,
//   }
// );

// extend('email', email => {
// if(email) {
//   return true
// }
// return "1"
// })

import { extend } from "vee-validate";

extend ('required', required => {
  if(!required) {
    return "Обязательное поле, друг"
  }
})

export default {
  data() {
    return {
      formData: {
        login: "",
        email: "",
        password: "",
        tel: "",
      },
    };
  },

  methods: {
    onSubmit() {
      alert("Form has been submitted!");
    },
    onReset() {
      this.formData.login = "",
        this.formData.email = "",
        this.formData.password = "",
        this.formData.tel = ""
    },
    onInputChange(evt) {
      this.login = evt.target.value;
      this.email = evt.target.value;
      this.password = evt.target.value;
      this.tel = evt.target.value;
    },
  },
};
</script>

<style scoped>
#form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 800px;
  margin: 20px auto;
  border: 1px solid brown;
  border-radius: 20px;
  font-size: 20px;
  background-color: white;
  box-shadow: 0px 0px 20px 5px brown;
}

label {
  display: flex;
  justify-content: space-between;
  margin: 20px 10px;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
}

fieldset {
  padding: 0;
  margin: 0;
  text-align: left;
  background-color: brown;
  color: white;
  border-color: brown;
  border-radius: 5px;
}

legend {
  /* color: transparent;
  background-clip: text;
  background-image: linear-gradient(to bottom, black 35%, white 55%); */
  color: black;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 20px;
}

input {
  margin: 0 10px;
  padding: 0;
}

.error-message {
  display: block;
  margin: 0 10px;
  font-size: 15px;
}

button {
  width: 200px;
  margin: 20px;
  padding: 10px 0;
  font-size: 15px;
  background-color: brown;
  color: white;
  font-weight: bold;
}

button:hover {
  color: rgb(84, 146, 175);
}
</style>
