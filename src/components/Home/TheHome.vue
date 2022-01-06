<template>
  <the-home-header></the-home-header>
  <the-home-about-us></the-home-about-us>
  <the-home-our-service></the-home-our-service>
  <the-home-why-us></the-home-why-us>
  <the-home-our-staff></the-home-our-staff>
  <the-home-counter></the-home-counter>
  <the-home-comment></the-home-comment>
  <The-home-contact-us></The-home-contact-us>
</template>

<script>
import TheHomeHeader from './TheHomeHeader.vue';
import TheHomeAboutUs from './TheHomeAboutUs.vue';
import TheHomeOurService from './TheHomeOurService.vue';
import TheHomeWhyUs from './TheHomeWhyUs.vue';
import TheHomeOurStaff from './TheHomeOurStaff.vue';
import TheHomeCounter from './TheHomeCounter.vue';
import TheHomeComment from './TheHomeComment.vue';
import TheHomeContactUs from './TheHomeContactUs.vue';

export default {
  components:{
    TheHomeHeader,
    TheHomeAboutUs,
    TheHomeOurService,
    TheHomeWhyUs,
    TheHomeOurStaff,
    TheHomeCounter,
    TheHomeComment,
    TheHomeContactUs
  }
}
</script>

<style>

</style>