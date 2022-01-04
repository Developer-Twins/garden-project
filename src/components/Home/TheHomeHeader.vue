<template>
  <header class="garden-header">
    <transition name="header-content" mode="out-in">
      <div
        class="garden-header__container-content garden-header__container-content-left"
        v-if="thisContentDisplay"
      >
        <h1 class="garden-header__title garden-header__title-left">
          خدمات باغبانی
        </h1>
        <p class="garden-header__description garden-header__description-left">
          باغبانی دانش بررسی و پژوهش در میوه‌ شناسی ، سبزی شناسی ، گل‌ شناسی ،
          فضای سبز پارک‌ ها و بوستان‌ ها و محیط زیست و همچنین استفاده از محصولات
          باغبانی در صنایع غذایی است.
        </p>
        <button class="garden-header__btn garden-header__btn-left">
          همین حالا شروع کن
        </button>
      </div>
      <div
        class="garden-header__container-content garden-header__container-content-right"
        v-else
      >
        <h1 class="garden-header__title garden-header__title-right">
          طراحی فضای سبز
        </h1>
        <p class="garden-header__description garden-header__description-right">
          امور باغبانی عبارت است از علم کاشت و پرورش گیاهان زینتی و دارویی و
          درختان میوه و طراحی فضای سبز.
        </p>
        <button class="garden-header__btn garden-header__btn-right">
          همین حالا شروع کن
        </button>
      </div>
    </transition>

    <div class="garden-header__container-img">
      <transition name="header-img" mode="out-in">
        <div v-if="thisImgDisplay" class="garden-header__container-img-1">
          <img
            src="../../../public/gardenImages/garden-header-2.png"
            class="garden-header__img-1"
          />
        </div>

        <div v-else class="garden-header__container-img-5">
          <img
            src="../../../public/gardenImages/garden-header-6.png"
            class="garden-header__img-5"
          />
        </div>
      </transition>
      <img
        src="../../../public/gardenImages/garden-header-3.png"
        class="garden-header__img-2"
      />
      <img
        src="../../../public/gardenImages/garden-header-4.png"
        class="garden-header__img-3"
      />
      <img
        src="../../../public/gardenImages/garden-header-5.png"
        class="garden-header__img-4"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      thisImgDisplay: true,
      thisContentDisplay: true,
      header: null,
      img3: null,
      img4: null,
    };
  },
  methods: {
    headerAnimate() {
      let bottomOfHeader = this.header.getBoundingClientRect().bottom;
      let topOfHeader = this.header.getBoundingClientRect().top;
      if (bottomOfHeader > 0) {
        this.img3.style.bottom = `-${bottomOfHeader / 2.9}px`;
      }
      if (topOfHeader < 400) {
        this.img4.style.right = `${topOfHeader / 4}px`;
      }
    },
  },
  mounted() {
    this.img3 = document.querySelector(".garden-header__img-3");
    this.img4 = document.querySelector(".garden-header__img-4");
    this.header = document.querySelector(".garden-header");
    this.headerAnimate();

    window.addEventListener("scroll", () => {
      this.headerAnimate();
    });
    setInterval(() => {
      this.thisImgDisplay = !this.thisImgDisplay;
      this.thisContentDisplay = !this.thisContentDisplay;
    }, 10000);
  },
};
</script>

<style></style>
