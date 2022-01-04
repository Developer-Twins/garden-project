<template>
  <the-home></the-home>
  <!-- <the-slider></the-slider> -->
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
// import TheSlider from "./components/slider.vue";
export default {
  components: {
    TheHome,
    // TheSlider,
  },
};
</script>

<style lang="sass">
@import "../public/sass/index"
</style>
