import { extend, localize } from "vee-validate";
import { required, email, max } from "vee-validate/dist/rules";
import ru from "vee-validate/dist/locale/ru.json";

extend("required", required);
extend("email", email);
extend("max", max);

localize("ru", ru);

localize({
  ru: {
    messages: {
      required: "Обязательное поле, друг",
      max: "Не не, приятель, давай покороче назовись",
      email: "Напиши нормальный адрес с @"
    },
  },
});
