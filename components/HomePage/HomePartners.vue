<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        <span> Biz korporatsiyalar bilan </span> qanday ishlashni bilamiz
      </h4>
      <div class="items">
        <div class="swiper swiper-fade" ref="swiper_1">
          <p class="num">1</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-1.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-6.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_2">
          <p class="num">2</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-3.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-4.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_3">
          <p class="num">3</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-5.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-6.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_4">
          <p class="num">4</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-7.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-1.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_5">
          <p class="num">5</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-1.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-6.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_6">
          <p class="num">6</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-3.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-4.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_7">
          <p class="num">7</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-5.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-6.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_8">
          <p class="num">8</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-7.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-1.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_9">
          <p class="num">9</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-1.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-6.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_10">
          <p class="num">10</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-3.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-4.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_11">
          <p class="num">11</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-5.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-6.png" alt="" class="pic" />
            </div>
          </div>
        </div>
        <div class="swiper" ref="swiper_12">
          <p class="num">12</p>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-7.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="@/assets/img/logo/part-1.png" alt="" class="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

export default {
  mounted() {
    new Swiper(this.$refs.swiper_1, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_2, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_3, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_4, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_5, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_6, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_7, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_8, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_9, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_10, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_11, {
      slidesPerView: 1,
      effect: "fade",
    });
    new Swiper(this.$refs.swiper_12, {
      slidesPerView: 1,
      effect: "fade",
    });
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
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.swiper {
  width: 100%;
  height: 176px;
  border-top: 1px solid var(--grey-24, #c2c2c3);
  position: relative;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.num {
  position: absolute;
  top: 20px;
  left: 20px;
  color: var(--Black, #292929);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
</style>
