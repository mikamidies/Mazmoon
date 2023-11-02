<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h4 class="title">
          <span> {{ $store.state.translations["main.reviews-title-1"] }} </span>
          {{ $store.state.translations["main.reviews-title-2"] }}
        </h4>
        <div class="buttons">
          <button class="prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 8L6 12M6 12L10 16M6 12L18 12"
                stroke="#28303F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button class="next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 16L18 12M18 12L14 8M18 12L6 12"
                stroke="#28303F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div data-aos="fade-up" class="swiper" ref="swiper">
        <div class="swiper-wrapper">
          <div v-for="item in reviews" :key="item.id" class="swiper-slide">
            <div class="row">
              <div class="col-lg-3 col-xs-12 left">
                <button @click="playVideo(item.id)" class="play">
                  <span class="logo">
                    <svg
                      class="play_logo"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                    >
                      <path
                        d="M8.62782 8.73632L2.99228 11.9566C1.65896 12.7185 0 11.7558 0 10.2201V6.99984V3.77953C0 2.24389 1.65896 1.28115 2.99228 2.04304L8.62782 5.26335C9.97145 6.03114 9.97145 7.96853 8.62782 8.73632Z"
                        fill="#1878F3"
                      />
                    </svg>
                    <svg
                      class="pause_logo"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H4C5.10457 14 6 13.1046 6 12V2C6 0.895431 5.10457 0 4 0H2ZM12 0C10.8954 0 10 0.89543 10 2V12C10 13.1046 10.8954 14 12 14H14C15.1046 14 16 13.1046 16 12V2C16 0.895431 15.1046 0 14 0H12Z"
                        fill="#1878F3"
                      />
                    </svg>
                  </span>
                  {{ $store.state.translations["main.video"] }}
                </button>
                <video
                  class="video"
                  :ref="`video${item.id}`"
                  :src="item.video"
                ></video>
                <div class="content">
                  <p class="name">{{ item.name }}</p>
                  <p class="status">{{ item.subtitle }}</p>
                </div>
              </div>
              <div class="col-lg-9 col-xs-12 right">
                <div class="cardo">
                  <div class="person">
                    <div class="img">
                      <img
                        :src="item.image"
                        :title="item.name"
                        :alt="item.name"
                        width="100%"
                        height="100%"
                        class="pic"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4>{{ item.name }}</h4>
                      <p>{{ item.subtitle }}</p>
                    </div>
                  </div>
                  <div class="comment">
                    <div v-html="item.text"></div>

                    <button @click="getId(item.id)" class="full">
                      {{ $store.state.translations["main.read-full"] }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modaller" :class="{ show: modalHandle }">
      <div class="carder">
        <div class="x" @click="modalHandle = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="person">
          <div class="img">
            <img
              :src="reviewsId.image"
              :title="reviewsId.name"
              :alt="reviewsId.name"
              width="100%"
              height="100%"
              class="pic"
              loading="lazy"
            />
          </div>
          <div>
            <h4>{{ reviewsId.name }}</h4>
            <p>{{ reviewsId.subtitle }}</p>
          </div>
        </div>
        <div class="comment_data">
          <div v-html="reviewsId.text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  props: ["reviews"],

  data() {
    return {
      modalHandle: false,
      reviewsId: {},
    };
  },

  watch: {
    $route() {
      this.modalHandle = false;
    },
  },

  methods: {
    playVideo(id) {
      let video = this.$refs[`video${id}`][0];

      if (video.paused == true) {
        video.play();
      } else {
        video.pause();
      }
    },

    getId(id) {
      this.reviewsId = this.reviews.find((item) => item.id == id);

      this.modalHandle = true;
    },
  },

  mounted() {
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: {
        prevEl: ".prev",
        nextEl: ".next",
      },
      loop: true,
      speed: 3000,
    });
  },
};
</script>

<style scoped>
.modaller {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 120;
  background: rgba(41, 41, 41, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  display: none;
}
.modaller.show {
  display: flex;
}
.carder {
  border-radius: 40px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 40px;
  position: relative;
  max-width: 1320px;
}
.x {
  background: #292929;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
}
.play_logo {
  display: block;
}
.pause_logo {
  display: none;
  transform: translateX(0px) scale(0.8) !important;
}
.wrap {
  padding: 0 0 120px 0;
}
.title {
  color: var(--grey-24, #c2c2c3);
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  font-family: var(--bold);
  max-width: 700px;
}
.title span {
  color: black;
}
.header {
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
  justify-content: space-between;
}
.prev,
.next {
  height: 52px;
  width: 52px;
  border-radius: 50%;
  background: var(--Apple-Grey, #f5f5f7);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.row {
  margin: 0;
}
.left {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  padding: 0;
  max-height: 454px;
}
.left::after {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0px 0px 24px 24px;
  background: linear-gradient(
    180deg,
    rgba(41, 41, 41, 0) 0%,
    rgba(41, 41, 41, 0.4) 100%
  );
  pointer-events: none;
}
video {
  width: 100%;
  height: 100%;
  min-height: 488px;
  object-fit: cover;
}
.play {
  position: absolute;
  top: 24px;
  left: 24px;
  padding: 8px;
  border-radius: 90px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  z-index: 9;
}
.logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f1f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo svg {
  transform: translateX(2px);
}
.content {
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 9;
}
.name {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 4px;
}
.status {
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.cardo {
  border-radius: 24px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 40px;
  max-height: 454px;
}
.person {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.pic {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
}
.person h4 {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 4px;
}
.person p {
  color: var(--Black, #292929);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
.comment::v-deep p {
  color: var(--Black, #292929);
  font-family: var(--medium);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 38.4px */
  margin-bottom: 40px;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.comment_data::v-deep div,
.comment_data::v-deep p {
  color: var(--Black, #292929);
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
.right {
  padding: 0 0 0 16px;
  max-height: 454px;
}
.full {
  color: var(--Red, #eb5757);
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  padding: 0;
  border: 0;
  background: transparent;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 80px;
  }
  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 24px;
  }
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
  .left {
    max-height: 488px;
  }
  .right {
    padding: 16px 0 0 0;
  }
  .cardo {
    padding: 24px;
  }
  .comment::v-deep p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 24px;
  }
  .full {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .comment_data::v-deep p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 24px;
  }
  .carder {
    padding: 16px;
    border-radius: 16px;
    margin: 0 16px;
  }
  .x {
    top: -8px;
    right: -8px;
  }
  .person {
    margin-bottom: 16px;
  }
  .person h4,
  .person p {
    font-size: 14px;
  }
}
</style>
