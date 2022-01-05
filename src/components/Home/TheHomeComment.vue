<template>
  <section
    :class="[{ active: activeCommentContainer }, 'garden-home-comment']"
    ref="comment"
  >
    <div class="garden-home-comment__bg"></div>
    <h4
      :class="[
        { active: activeSubtitle },
        'garden-home-comment__subtitle home-subtitle',
      ]"
      ref="subtitle"
    >
      نظرات شما
    </h4>
    <h1 class="garden-home-comment__title home-title">
      مردم درباره ما چه می گویند؟
    </h1>

    <div class="garden-home-comment__content">
      <div class="comment-container">
        <swiper
          :loop="true"
          :loopFillGroupWithBlank="true"
          :speed="800"
          :breakpoints="breakpoint"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          class="mySwiper"
        >
          <swiper-slide v-for="data in datas" :key="data">
            <div class="comment-slide">
              <div class="comment-image-part">
                <div class="comment-container-image">
                  <div class="comment-image">
                    <img
                      class="comment-image__img"
                      :src="
                        require('../../../public/gardenImages/comment/' +
                          data.image)
                      "
                      alt="user"
                    />
                    <!-- <img src="../../../public/gardenImages/comment/user-face-1.jpg" alt=""> -->
                  </div>
                </div>
              </div>
              <div class="comment-text-part">
                <div class="comment-text">
                  <i class="comment-text__icon fas fa-quote-left"></i>
                  <p class="comment-text__describe">{{ data.describe }}</p>
                  <h5 class="comment-text__name">{{ data.name }}</h5>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper-bundle.css";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
// import Card from './Card.vue';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      commentContainer: null,
      activeCommentContainer: null,
      subtitle: null,
      activeSubtitle: null,
      datas: [
        {
          image: "user-face-1.jpg",
          describe:
            " سرتاسر باغچه را به صورت مرتب و منظم حرس کردند و خاک گلدان های زینتی نیز عوض گردید عملکرد این تیم بسیار عالی بود .",
          name: "سوشا رفیعی",
        },
        {
          image: "user-face-2.jpg",
          describe:
            " مدت ها بود آفت به  جان درخت های باغم افتاده بود و هر ترفند سمپاشی را روی آن امتحان کردم ولی تاکنون سمپاشی با پهپاد را امتحان نکرده بودم. ",
          name: "علی رحمانی",
        },
        {
          image: "user-face-3.jpg",
          describe:
            "در فضای کارم سال ها بود که نیاز به یک چشم انداز سرسبز میکردم که این تیم طرح این چشم انداز را برایم به صورت عالی پیاده سازی کردند.",
          name: "رضا خاکپور",
        },
        {
          image: "user-face-4.jpg",
          describe:
            "در فضای کارم سال ها بود که نیاز به یک چشم انداز سرسبز میکردم که این تیم طرح این چشم انداز را برایم به صورت عالی پیاده سازی کردند.",
          name: "احمد حسینی",
        },
      ],
      breakpoint: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
        // when window width is >= 1300px
        1300: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
      },
    };
  },
  mounted() {
    this.commentContainer = this.$refs.comment;
    this.subtitle = this.$refs.subtitle;
    let subtitleTopPoint = null;
    let commentContaineTopPoint = null;

    window.addEventListener("scroll", () => {
      subtitleTopPoint = this.subtitle.getBoundingClientRect().top;
      commentContaineTopPoint = this.commentContainer.getBoundingClientRect()
        .top;

      if (subtitleTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeSubtitle = true;
      }

      if (commentContaineTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeCommentContainer = true;
      }else{
        this.activeCommentContainer = false;
      }
    });
  },
};
</script>

<style></style>
