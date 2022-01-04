<template>
  <section :class="[{active:activeCommentContainer},'garden-home-comment']" ref="comment">
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

    <div class="garden-home-comment__content"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      commentContainer: null,
      activeCommentContainer:null,
      subtitle: null,
      activeSubtitle: null,
      datas: [
        {
          describe:
            " سرتاسر باغچه را به صورت مرتب و منظم حرس کردند و خاک گلدان های زینتی نیز عوض گردید عملکرد این تیم بسیار عالی بود.",
          name: "سوشا رفیعی",
        },
        {
          describe:
            " مدت ها بود آفت به  جان درخت های باغم افتاده بود و هر ترفند سمپاشی را روی آن امتحان کردم ولی تاکنون سمپاشی با پهپاد را امتحان نکرده بودم. ",
          name: "ستاره رحمانی",
        },
        {
          describe:
            "در فضای کارم سال ها بود که نیاز به یک چشم انداز سرسبز میکردم که این تیم طرح این چشم انداز را برایم به صورت عالی پیاده سازی کردند.",
          name: "رضا خاکپور",
        },
      ],
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
      }
    });
  },
};
</script>

<style></style>
