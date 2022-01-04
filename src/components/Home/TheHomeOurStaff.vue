<template>
  <section class="garden-home-staff" ref="staff">
    <div class="home-staff-content">
      <p class="home-staff-content__subtitle home-subtitle">کارکنان ما</p>
      <h1 class="home-staff-content__title home-title">
        کارکنان ما چه کسانی هستند؟
      </h1>
      <div class="home-staff-content__information" ref="informCotainer">
        <div class="home-staff-inform">
          <div
            :class="[
              { active: activeClass1 },
              'home-staff-inform__img-container',
            ]"
          >
            <img
              src="../../../public/gardenImages/grand-home-staff-1.jpg"
              class="home-staff-inform__img"
            />
            <div
              :class="[
                'home-staff-inform__icon-container',
                { active: activeClass1 },
              ]"
            >
              <label
                class="home-staff-inform__label"
                @click="setActiveClass(1)"
              >
                <i class="fas fa-plus"></i>
              </label>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-telegram"></i
              ></a>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-whatsapp"></i
              ></a>
            </div>
          </div>
          <div class="home-staff-inform__content">
            <h2 class="home-staff-inform__title">علی رشیدی</h2>
            <p class="home-staff-inform__text">کارشناس گل و گیاه</p>
          </div>
        </div>
        <div class="home-staff-inform">
          <div
            :class="[
              { active: activeClass2 },
              'home-staff-inform__img-container',
            ]"
          >
            <img
              src="../../../public/gardenImages/grand-home-staff-2.png"
              class="home-staff-inform__img"
            />
            <div
              :class="[
                'home-staff-inform__icon-container',
                { active: activeClass2 },
              ]"
            >
              <label
                class="home-staff-inform__label"
                @click="setActiveClass(2)"
              >
                <i class="fas fa-plus"></i>
              </label>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-telegram"></i
              ></a>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-whatsapp"></i
              ></a>
            </div>
          </div>
          <div class="home-staff-inform__content">
            <h2 class="home-staff-inform__title">محمد آقازاده</h2>
            <p class="home-staff-inform__text">کارشناس آزمایش خاک</p>
          </div>
        </div>
        <div class="home-staff-inform">
          <div
            :class="[
              { active: activeClass3 },
              'home-staff-inform__img-container',
            ]"
          >
            <img
              src="../../../public/gardenImages/grand-home-staff-3.jpg"
              class="home-staff-inform__img"
            />
            <div
              :class="[
                'home-staff-inform__icon-container',
                { active: activeClass3 },
              ]"
            >
              <label
                class="home-staff-inform__label"
                @click="setActiveClass(3)"
              >
                <i class="fas fa-plus"></i>
              </label>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-telegram"></i
              ></a>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-instagram"></i
              ></a>
              <a href="#" class="home-staff-inform__link"
                ><i class="fab fa-whatsapp"></i
              ></a>
            </div>
          </div>
          <div class="home-staff-inform__content">
            <h2 class="home-staff-inform__title">داریوش آذرنیا</h2>
            <p class="home-staff-inform__text">کارشناس مهندسی آب</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeClass1: false,
      activeClass2: false,
      activeClass3: false,
      staff: null,
      informs: null,
      informContainer: null,
    };
  },
  methods: {
    setActiveClass(id) {
      if (id === 1) {
        this.activeClass1 = !this.activeClass1;
        this.activeClass2 = false;
        this.activeClass3 = false;
      } else if (id === 2) {
        this.activeClass2 = !this.activeClass2;
        this.activeClass1 = false;
        this.activeClass3 = false;
      } else if (id === 3) {
        this.activeClass3 = !this.activeClass3;
        this.activeClass1 = false;
        this.activeClass2 = false;
        console.log(this.activeClass3);
      }
    },
  },
  mounted() {
    this.informs = document.querySelectorAll(".home-staff-inform");
    this.informContainer = document.querySelector(
      ".home-staff-content__information"
    );
    this.staff = this.$refs.staff;
    let informTopPoint = null;
    let informContainerTopPoint = null;
    let staffTopPoint = null;
    window.addEventListener("scroll", () => {
      this.informs.forEach((inform) => {
        informTopPoint = inform.getBoundingClientRect().top;
        if (informTopPoint < this.$store.getters.getTriggerPoint) {
          inform.classList.add("active");
        }
      });
      informContainerTopPoint = this.informContainer.getBoundingClientRect()
        .top;
      staffTopPoint = this.staff.getBoundingClientRect().top;
      if (informContainerTopPoint < this.$store.getters.getTriggerPoint) {
        this.informContainer.classList.add("active");
      }
      if (staffTopPoint < this.$store.getters.getTriggerPoint) {
        this.staff.classList.add("active");
      }
    });
  },
};
</script>

<style></style>
