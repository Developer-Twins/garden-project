<template>
  <nav-part></nav-part>
  <the-home></the-home>
</template>

<script>
String.prototype.toEnglishDigit = function() {
  var find = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  var replace = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var replaceString = this;
  var regex;
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
};

import TheHome from "./components/Home/TheHome.vue";
import navPart from "./components/Nav.vue";
export default {
  components: {
    TheHome,
    navPart,
  },
};
</script>

<style lang="sass">
@import "../public/sass/index"
</style>
