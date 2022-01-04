<template>
  <section class="garden-home-about">
    <div class="garden-home-about__top-shadow"></div>
    <div
      :class="[
        { active: activeAboutImages },
        'garden-home-about__container-images',
      ]"
      ref="aboutImages"
    >
      <div class="home-about-images">
        <div class="home-about-images__container-img">
          <img
            src="../../../public/gardenImages/garden-home-about-1.jpg"
            class="home-about-images__img"
          />
        </div>
      </div>
    </div>
    <div class="garden-home-about__container-content">
      <article
        :class="[{ active: activeAboutText }, 'home-about-text']"
        ref="aboutText"
      >
        <h4 class="home-about-text__subtitle home-subtitle">
          درباره ی ما
        </h4>
        <h1 class="home-about-text__title home-title">
          تاریخچه ما چیست؟
        </h1>
        <p class="home-about-text__description">
          تیم ما ، توزیع کننده نهاده­ های کشاورزی با بکارگیری تجارب ۱۰ سال در
          صنعت کشاورزی فعالیت رسمی خود را در فروردین ۱۳۹۶ توسط گروهی از فعالان
          این صنعت با انگیزه نوآوری و تکیه بر تجارب ارزشمند خود و به کارگیری
          دانش روز در عرصه کشاورزی با هدف آبادسازی ایران بزرگ فعالیت خود را آغاز
          نمود.
        </p>
      </article>
      <div class=" home-about-guide">
        <div
          :class="[
            { active: activeAboutGuideRight },
            'home-about-guide__content',
            'home-about-guide__content-right',
          ]"
          ref="aboutGuideRight"
        >
          <img
            class="home-about-guide__img"
            src="../../../public/gardenImages/garden-home-about-3.png"
          />
          <h2 class="home-about-guide__title">
            فعالیت های بین المللی
          </h2>
          <p class="home-about-guide__describe">
            صادرات نشاء ملون به شرکت بازرگانی برادران کمالی ابهر (قزاقستان)،
            صادرات نشاء خیار و کدو به امارات (شرکت بازرگانی شیخ برخ اسود)،
            صادرات محصولات کشاورزی به کشورهای روسیه- امارات – قطر- عمان- عراق-
            گرجستان – قزاقستان و...
          </p>
          <button class="home-about-guide__btn">بیشتر بخوانید</button>
        </div>
        <div
          :class="[
            { active: activeAboutGuideLeft },
            'home-about-guide__content',
            'home-about-guide__content-left',
          ]"
          ref="aboutGuideLeft"
        >
          <img
            class="home-about-guide__img"
            src="../../../public/gardenImages/garden-home-about-4.png"
          />
          <h2 class="home-about-guide__title">
            ‌ افتخارات و گواهی‌ها
          </h2>
          <p class="home-about-guide__describe">
            دارای مجوز رسمی تولید نشاء از وزارت کشاورزی (موسسه نهال و بذر)،
            دارای پروانه های تخصصی تولید محصولات گلخانه ای و نشاء از اداره اصناف
            کشاورزی و ...
          </p>
          <button class="home-about-guide__btn">بیشتر بخوانید</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeAboutText: false,
      activeAboutImages: false,
      activeAboutGuideRight: false,
      activeAboutGuideLeft: false,
      aboutText: null,
      aboutImages: null,
      aboutGuideRight: null,
      aboutGuideLeft: null,
    };
  },
  mounted() {
    this.aboutText = this.$refs.aboutText;
    this.aboutImages = this.$refs.aboutImages;
    this.aboutGuideRight = this.$refs.aboutGuideRight;
    this.aboutGuideLeft = this.$refs.aboutGuideLeft;
    let aboutTextTopPoint = null;
    let aboutImagesTopPoint = null;
    let aboutGuideRightTopPoint = null;
    let aboutGuideLeftTopPoint = null;

    window.addEventListener("scroll", () => {
      aboutTextTopPoint = this.aboutText.getBoundingClientRect().top;
      aboutImagesTopPoint = this.aboutImages.getBoundingClientRect().top;
      aboutGuideRightTopPoint = this.aboutGuideRight.getBoundingClientRect()
        .top;
      aboutGuideLeftTopPoint = this.aboutGuideLeft.getBoundingClientRect().top;
      if (aboutTextTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeAboutText = true;
      }

      if (aboutGuideRightTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeAboutGuideRight = true;
      }

      if (aboutGuideLeftTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeAboutGuideLeft = true;
      }

      if (aboutImagesTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeAboutImages = true;
      }
    });
  },
};
</script>

<style></style>
