<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        <span> Biz korporatsiyalar bilan </span> qanday ishlashni bilamiz
      </h4>
      <div class="items">
        <div class="splide">
          <div class="splide__track">
            <div class="splide__list">
              <div class="splide__slide">1</div>
              <div class="splide__slide">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@splidejs/splide/dist/css/splide.min.css";

import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default {
  mounted() {
    const splider = new Splide(".splide", {
      perPage: 1,
      pagination: false,
      arrows: false,
      type: "fade",
    });
    splider.mount();

    console.log(AutoScroll);
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
}
.title {
  color: var(--grey-24, #c2c2c3);
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  font-family: var(--bold);
  max-width: 800px;
  margin-bottom: 40px;
}
.title span {
  color: black;
}
</style>
