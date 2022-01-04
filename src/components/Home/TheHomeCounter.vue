<template>
  <section
    :class="[{ active: activeCounter }, 'garden-home-counter']"
    ref="counter"
  >
    <div class="garden-home-conatiner">
      <div class="garden-home-conatiner__img-container">
        <img
          class="garden-home-conatiner__img"
          src="../../../public/gardenImages/garden-home-counter-2.png"
          alt="tree"
        />
      </div>
      <div
        class="garden-home-conatiner__counter-container"
        v-for="counterBox in counterBoxes"
        :key="counterBox.title"
      >
        <i
          :class="[counterBox.icon, 'garden-home-conatiner__counter-icon']"
        ></i>
        <h4
          class="garden-home-conatiner__counter-number"
          :data-target="counterBox.number"
        ></h4>
        <p class="garden-home-conatiner__counter-title">
          {{ counterBox.title }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      counter: null,
      activeCounter: false,
      counterTrigger: 0,
      counterBoxes: [
        {
          icon: "fas fa-chart-line",
          number: 50,
          title: "سال ها تجربه",
        },
        {
          icon: "fas fa-tasks",
          number: 5000,
          title: "پروژهای انجام شده",
        },
        {
          icon: "fas fa-laugh-wink",
          number: 2740,
          title: " مشتری های راضی",
        },
        {
          icon: "fas fa-award",
          number: 796,
          title: "جوایز اهداء شده",
        },
      ],
    };
  },
  methods: {
    startCounter() {
      let numberCounters = document.querySelectorAll(
        ".garden-home-conatiner__counter-number"
      );

      numberCounters.forEach((numberCounter) => {
        numberCounter.innerText = "0";
        let sum = 0;

        function updateCounter() {
          let target = +numberCounter.getAttribute("data-target");
          let increment = target / 450;

          if (sum < target) {
            numberCounter.innerText = `${Math.ceil(sum + increment).toLocaleString('fa-ir')}`;
            sum = sum + increment;
            setTimeout(updateCounter, 1);
          } else {
            numberCounter.innerText = target.toLocaleString('fa-ir');
          }
        }

        updateCounter();
      });
    },
  },
  mounted() {
    this.counter = this.$refs.counter;
    let counterTopPoint = null;

    window.addEventListener("scroll", () => {
      counterTopPoint = this.counter.getBoundingClientRect().top;

      if (counterTopPoint < this.$store.getters.getTriggerPoint) {
        this.activeCounter = true;
      }

      if (counterTopPoint < this.$store.getters.getTriggerPoint) {
        this.counterTrigger++;
        if (this.counterTrigger === 1) {
          setTimeout(() => {
          this.startCounter();
            
          }, 500);
        }
      }
    });
  },
};
</script>

<style></style>
