<template>
  <nav class="navigation" ref="navigation">
    <div class="container-nav">
      <div class="nav">
        <ul class="nav-list">
          <li class="nav-list__item">خانه</li>
          <li class="nav-list__item">درباره ما</li>
          <li class="nav-list__item">خدمات ما</li>
          <li class="nav-list__item">ارتباط با ما</li>
          <li class="nav-list__item">نظرات</li>
        </ul>
        <div class="nav-hamberger"  @click="openNavMobile">
          <i class="fas fa-bars nav-hamberger__icon"></i>
        </div>
        <div class="nav-sign">
          <div class="nav-sign__in-out">ورود / ثبت نام</div>
        </div>
      </div>
    </div>
  </nav>
  <div :class="['nav-page',{'active':openNav}]">
    <div class="nav-page-close">
      <span @click="closeNavMobile">
      <i class="fas fa-times nav-page-close__icon"></i>
      </span>
    </div>
    <div class="contaier-nav-page-list">
      <ul class="nav-page-list">
        <li class="nav-page-list__item"><span class="nav-page-list__link"> خانه</span></li>
        <li class="nav-page-list__item"><span class="nav-page-list__link">درباره ما</span></li>
        <li class="nav-page-list__item"><span class="nav-page-list__link">خدمات ما</span></li>
        <li class="nav-page-list__item"><span class="nav-page-list__link">ارتباط با ما</span></li>
        <li class="nav-page-list__item"><span class="nav-page-list__link">نظرات</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      openNav:false,
      body:null
    }
  },
  methods:{
    openNavMobile(){
      this.openNav=true
      this.body.classList.add('active')

    },
    closeNavMobile(){
      this.openNav=false
      this.body.classList.remove('active')

    }
  },
  mounted() {
    this.body=document.body
    let navigation = this.$refs.navigation;
    window.addEventListener("scroll", () => {
      let bottomOfNavigaition = navigation.getBoundingClientRect().bottom;

      if (bottomOfNavigaition < -10) {
        navigation.classList.add("active");
      } else if (window.scrollY < 9) {
        navigation.classList.remove("active");
      }
    });
  },
};
</script>

<style></style>
