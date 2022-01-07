<template>
  <the-home-header></the-home-header>
  <the-home-about-us></the-home-about-us>
  <the-home-our-service></the-home-our-service>
  <the-home-why-us></the-home-why-us>
  <the-home-our-staff></the-home-our-staff>
  <the-home-counter></the-home-counter>
  <the-home-comment></the-home-comment>
  <the-home-contact-us></the-home-contact-us>
  <the-home-footer></the-home-footer>
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
import TheHomeFooter from './TheHomeFooter.vue';

export default {
  components:{
    TheHomeHeader,
    TheHomeAboutUs,
    TheHomeOurService,
    TheHomeWhyUs,
    TheHomeOurStaff,
    TheHomeCounter,
    TheHomeComment,
    TheHomeContactUs,
    TheHomeFooter
  }
}
</script>

<style>

</style>