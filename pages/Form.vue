<template>
  <div id="form">
    <h1 class="form-title">Регистрация</h1>
    <ValidationObserver v-slot="{ handleSubmit, reset, invalid }">
      <form
        @submit.prevent="handleSubmit(onSubmit)"
        @reset.prevent="reset(onReset)"
      >
        <fieldset class="login">
          <legend>Основная информация</legend>
          <ValidationProvider
            name="Login"
            rules="required|max:10"
            v-slot="{ errors }"
          >
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
          <ValidationProvider
            name="Password"
            rules="required"
            v-slot="{ errors }"
          >
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
          <ValidationProvider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
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
            <input
              type="tel"
              name="tel"
              id="tel"
              v-model="formData.tel"
              icon-left="check"
            />
          </label>
        </fieldset>
        <button type="submit" :disabled="invalid">Отправить</button>
        <button type="reset" @click="onReset">Сброс</button>
      </form>
    </ValidationObserver>
    <router-link to="/tasker" class="link">Go to tasker</router-link>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
// import { mdiCheckCircleOutline } from "@mdi/js";

export default {
  name: "Form",
  components: {
    ValidationObserver,
    ValidationProvider,
  },

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
      this.$buefy.dialog.alert({
        title: "Радуйся, приятель!",
        message: "Форма отправлена!",
        type: "is-success",
      });
      const reload = function() {
        location.reload();
      };
      setTimeout(reload, 5000);
    },
    onReset() {
      (this.formData.login = ""),
        (this.formData.email = ""),
        (this.formData.password = ""),
        (this.formData.tel = "");
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

<style  scoped>
#form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b38014;
  width: 800px;
  margin: 20px auto;
  border: 1px solid rgba(71, 71, 71, 0.596);
  border-radius: 20px;
  font-size: 20px;
  background-color: rgb(41, 40, 40);
  box-shadow: 1px 0px 20px 5px rgb(39, 39, 39);
}

.form-title {
  font-size: 40px;
  font-weight: bold;
  margin: 20px;
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
  background-color: rgba(43, 41, 41, 0.308);
  color: #b38014;
  border-color: rgba(46, 44, 44, 0.493);
  border-radius: 5px;
  box-shadow: 3px 2px 10px 2px rgba(27, 26, 26, 0.26);
}

legend {
  /* color: transparent;
  background-clip: text;
  background-image: linear-gradient(to bottom, black 35%, white 55%); */
  color: #b38014;
  font-size: 25px;
  font-weight: bold;
}

input {
  margin: 0 11px;
  padding: 0;
  background-color: rgba(43, 41, 41, 0.308);
  border: 1px solid rgba(43, 42, 42, 0.493);
  box-shadow: -3px -5px 8px -5px rgba(59, 59, 59, 0.63),
    3px 3px 4px 0 rgba(0, 0, 0, 0.26);
    color: #b38014;
}

/* .text-input {
  margin: 0 11px;
  padding: 0;
  background-color: rgba(43, 41, 41, 0.308);
  border: 1px solid rgba(43, 42, 42, 0.493);
  box-shadow: -3px -5px 8px -5px rgba(59, 59, 59, 0.63),
    3px 3px 4px 0 rgba(0, 0, 0, 0.26);
} */

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
  background-color: rgba(43, 41, 41, 0.308);
  color: #b38014;
  font-weight: bold;
  border: 1px solid rgba(43, 42, 42, 0.493);
  box-shadow: -3px -5px 8px -5px rgba(59, 59, 59, 0.63),
    3px 3px 4px 0 rgba(0, 0, 0, 0.26);
}

button:hover {
  box-shadow: 0 0 15px 5px #b38014 inset;
}

button:disabled {
  color: transparent;
}

.link {
  color: #8b630c;
  font-size: 25px;
  text-decoration: none;
  border: 1px solid rgba(44, 44, 44, 0.466);
  box-shadow: 5px 2px 8px 2px rgba(0, 0, 0, 0.26);
  border-radius: 30px;
  padding: 15px;
  margin: 10px;
  display: inline-block;
}

.link:hover {
  box-shadow: 0 0 15px 5px #b38014 inset;
}
</style>
