<template>
  <section :class="[{active:activeWhyUsContainer},'garden-home-whyus']" ref="whyus">
    <h4 class="garden-home-whyus__subtitle home-subtitle">چرا ما</h4>
    <h1 class="garden-home-whyus__title home-title">مزیت کار با ما چیست؟</h1>
    <div class="garden-home-whyus__content">
      <div
        class="garden-home-box-whyus"
        v-for="data in datas"
        :key="data.title"
      >
        <div class="garden-home-container-text-whyus">
          <h4 class="garden-home-container-text-whyus__title">
            {{ data.title }}
          </h4>
          <p class="garden-home-container-text-whyus__describe">
            {{ data.describe }}
          </p>
        </div>
        <div class="garden-home-container-icon-whyus">
          <i
            class="garden-home-container-icon-whyus__icon 
            fa fa-leaf"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      boxes: null,
      boxTopPoint: null,
      whyUsContainer: null,
      activeWhyUsContainer: false,
      datas: [
        {
          title: "بیش از 30 سال تجربه",
          describe:
            "سهولت حل مشکلات تغذیه ای و آفات و بیماری های گیاهی برای کشاورزان با وجود تیم کارشناسان خبره , سهولت دسترسی سریع و آسان برای خرید نهاده ها و محصولات کشاورزی , حل مشکلات سم پاشی مزارع با پهباد ",
        },
        {
          title: "بهبود کیفیت",
          describe:
            "بزرگترین مزیت استفاده از خدمات باغبانی ما این است که متخصصان دارای تجهیزات تخصصی هستند. با همکاری با باغبانان واجد شرایط می توانید مطمئن شوید که از ابزار و روش های مناسب برای کار استفاده می شود. ",
        },
        {
          title: "حفظ امنیت منزل",
          describe:
            "متخصصین ما تبحر خاصی در ارائه خدمات باغبانی حرفه ای دارند و از این امنیت خانه را برای صاحبان خانه فراهم می کنند. باغبانان شایسته شرکت باغبانی ما خانه شما را به درستی ارزیابی می کنند تا بتوانند مناطقی را شناسایی کرده و با افزودن و یا حذف برخی خصوصیات مانع ورود مزاحمین به باغ شما شوند.",
        },
        {
          title: "صرفه جویی در هزینه",
          describe:
            " ، علاوه بر مهارت شما برای دانش او نیز هزینه پرداخت می کنید. متخصصین ما آموزش های لازم برای امور باغبانی را دیده و تجربه کافی در این زمینه دارند. علاوه بر این مراقبت و نگهداری از باغبانی مقرون به صرفه تر است ، زیرا نیازی به خرید تجهیزات گران قیمت نیست.",
        },
      ],
    };
  },
  mounted() {
    this.boxes = document.querySelectorAll(".garden-home-box-whyus");
    this.whyUsContainer = this.$refs.whyus;
    let whyUsTopPoint = null;

    window.addEventListener("scroll", () => {
      this.boxes.forEach((box) => {
        this.boxTopPoint = box.getBoundingClientRect().top;
   
        if (this.boxTopPoint < this.$store.getters.getTriggerPoint) {
          box.classList.add("active");
        }
      });

      whyUsTopPoint = this.whyUsContainer.getBoundingClientRect().top;

      if (whyUsTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeWhyUsContainer = true;
      }
    });
  },
};
</script>

<style></style>
