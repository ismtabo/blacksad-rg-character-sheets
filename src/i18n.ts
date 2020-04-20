import { addMessages, init, getLocaleFromNavigator, _ } from "svelte-i18n";
import en from "./i18n/en.json";
import es from "./i18n/es.json";

function setupI18n({ withLocale: _locale } = { withLocale: "en" }) {
  addMessages("en", en);
  addMessages("es", es);
  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
}

export { _, setupI18n };
