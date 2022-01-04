<template>
  <section
    :class="[{ active: activeServiceContainer }, 'garden-home-service']"
    ref="service"
  >
    <div
      :class="[{ active: activeLineService }, 'garden-home-service__line']"
      ref="lineService"
    ></div>
    <div
      class="garden-home-service__circle garden-home-service__circle-1"
    ></div>
    <div
      class="garden-home-service__circle garden-home-service__circle-2"
    ></div>
    <div
      class="garden-home-service__circle garden-home-service__circle-3"
    ></div>
    <h4 class="garden-home-service__subtitle home-subtitle">خدمات ما</h4>
    <h1 class="garden-home-service__title home-title">ما چه کار میکنیم؟</h1>
    <div class="garden-home-service__content">
      <div
        class="garden-home-box-service"
        v-for="information in informations"
        :key="information.title"
      >
        <div class="garden-home-box-service__content">
          <div class="garden-home-container-img-service">
            <img
              :src="require('../../../public/gardenImages/' + information.img)"
              alt="گیاه"
              class="garden-home-container-img-service__img"
            />
          </div>
          <div class="garden-home-container-text-service">
            <h4 class="garden-home-container-text-service__title">
              {{ information.title }}
            </h4>
            <p class="garden-home-container-text-service__describe">
              {{ information.describe }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="garden-home-service__btn">بیشتر بخوانید</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeServiceContainer: false,
      activeLineService: false,
      serviceContainer: null,
      lineService: null,
      informations: [
        {
          title: "اجرای خدمات باغبانی و فضای سبز",
          describe:
            "کاشت و احداث باغ دارای اهمیت ویژه ای می باشد. به دلیل اینکه طراح فضای سبز باید به خوبی از فضای موجود، بهترین استفاده را کند و همچنین بهترین گیاهان را بسته به رفتار و نیازهای تغذیه ای، سم پاشی، بیماری، آفات و عملیات باغبانی انتخاب کند.",
          img: "garden-home-service-1.png",
        },
        {
          title: "اجرای خدمات سمپاشی با پهپاد ",
          describe:
            "اجرای خدمات سم پاشی در بعضی از مناطق یا به‌سختی انجام می‌شود یا مدت ‌زمان زیادی طول می‌کشد. درحالی‌که امروزه با پیشرفت علم و تکنولوژی در تمام زمینه‌های زندگی بشر، بخش کشاورزی نیز از این پیشرفت بی‌نصیب نمانده و با ورود تکنولوژی به این بخش، بعضی از عملیات زراعی آسان تر از گذشته شده است.",
          img: "garden-home-service-2.png",
        },
        {
          title: "نصب و اجرای سیستم آبیاری قطره‌ای",
          describe:
            "سیستم آبیاری قطره‌ای از کم‌مصرف‌ترین روش‌های آبیاری در باغات و مزارع و باغچه است. سیستم آبیاری قطره‌ای مزایای بسیاری دارد و در صورت اجرای صحیح می‌تواند هزینه‌ها را کاهش دهد.",
          img: "garden-home-service-3.png",
        },
        {
          title: " تولید و سفارش نشاء",
          describe:
            "با توجه به رشد روزافزون جمعیت و نیاز مبرم به ایجاد راه‌هایی جهت افزایش بهره‌وری از زمین‌های کشاورزی و تولید مواد غذایی یکی از مؤثرترین و مفیدترین راه‌ها جهت افزایش عملکرد و کیفیت محصولات کشاورزی در دنیا استفاده از نشاء به‌جای کشت مستقیم بذر در مزرعه یا گلخانه می‌باشد.",
          img: "garden-home-service-4.png",
        },
      ],
    };
  },
  mounted() {
    this.serviceContainer = this.$refs.service;
    this.lineService = this.$refs.lineService;
    let serviceContainerTopPoint = null;
    let lineServiceTopPoint = null;

    window.addEventListener("scroll", () => {
      serviceContainerTopPoint = this.serviceContainer.getBoundingClientRect()
        .top;
      lineServiceTopPoint = this.lineService.getBoundingClientRect().top;

      if (serviceContainerTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeServiceContainer = true;
      }
      if (lineServiceTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeLineService = true;
      }
    });
  },
};
</script>

<style></style>
