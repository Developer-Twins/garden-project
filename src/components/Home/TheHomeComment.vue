<template>
  <section
    class='garden-home-comment'
    ref="comment"
  >
    <h4 :class="[{active: activeSubtitle },'garden-home-comment__subtitle home-subtitle']" ref="subtitle">نظرات شما</h4>
    <h1 class="garden-home-comment__title home-title">
      مردم درباره ما چه می گویند؟
    </h1>

    <div class="garden-home-comment__content">
      <div class="garden-home-box-comment" v-for="data in datas" :key="data.name">
        <div class="garden-home-container-text-comment">
          <p class="garden-home-container-text-comment__describe">{{data.describe}}</p>
          <p class="garden-home-container-text-comment__name">{{data.name}}</p>
        </div>
        <div class="garden-home-container-img-comment">
          <img
            class="garden-home-container-icon-commnet__img"
            src=""
            alt="someone"
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
      subtitle: null,
      activeSubtitle: null,
      datas:[
        {
          describe:" سرتاسر باغچه را به صورت مرتب و منظم حرس کردند و خاک گلدان های زینتی نیز عوض گردید عملکرد این تیم بسیار عالی بود.",
          name:"سوشا رفیعی",
        },
        {
          describe:" مدت ها بود آفت به  جان درخت های باغم افتاده بود و هر ترفند سمپاشی را روی آن امتحان کردم ولی تاکنون سمپاشی با پهپاد را امتحان نکرده بودم. ",
          name:"ستاره رحمانی",

        },
        {
          describe:"در فضای کارم سال ها بود که نیاز به یک چشم انداز سرسبز میکردم که این تیم طرح این چشم انداز را برایم به صورت عالی پیاده سازی کردند.",
          name:"رضا خاکپور",
        }
      ]
    };
  },
  mounted() {
    this.subtitle = this.$refs.subtitle;
    let subtitleTopPoint = null;

    window.addEventListener("scroll", () => {
      subtitleTopPoint = this.subtitle.getBoundingClientRect()
        .top;

      if (subtitleTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeSubtitle = true;
      }
    });
  },
};
</script>

<style></style>
