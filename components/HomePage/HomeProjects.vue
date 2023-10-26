<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Loyihalarimiz</h4>
      <div class="items">
        <div
          data-aos="fade-up"
          :data-aos-duration="`${item.id * 100}`"
          class="item"
          v-for="item in projects"
          :key="item.id"
        >
          <a target="_blank" :href="item.url">
            <img :src="item.image" alt="" class="pic" />
            <p class="name">
              {{ item.title }}
            </p>

            <button class="to">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6563 5.34314C17.6563 4.79086 17.2086 4.34314 16.6563 4.34314L9.11387 4.34314C8.56159 4.34314 8.11387 4.79086 8.11387 5.34314C8.11387 5.89543 8.56159 6.34314 9.11387 6.34314L14.2421 6.34314L4.63553 15.9497C4.24501 16.3403 4.24501 16.9734 4.63553 17.364C5.02605 17.7545 5.65922 17.7545 6.04974 17.364L15.6563 7.75736L15.6563 12.8856C15.6563 13.4379 16.1041 13.8856 16.6563 13.8856C17.2086 13.8856 17.6563 13.4379 17.6563 12.8856L17.6563 5.34314Z"
                  fill="#5D5FEF"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projects"],

  mounted() {},
};
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
}
.title {
  padding-top: 80px;
  border-top: 1px solid #e2e2e2;
  margin-bottom: 40px;
  color: var(--Black, #292929);
  font-family: var(--bold);
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%; /* 76.8px */
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.item {
  border-radius: 40px;
  overflow: hidden;
  position: relative;
}
.item a {
  display: flex;
}
.item::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(255, 69, 69, 0) 0%, #00000090 100%);
  width: 100%;
  height: 100%;
  transition: 0.6s;
}

.item:nth-child(3n) {
  grid-column: 1/3;
}
.pic {
  width: 100%;
  height: 520px;
  object-fit: cover;
}
.name {
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 2;
}
.to {
  z-index: 9;
  border: none;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--White, #fff);
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
}
.item:hover .to {
  top: 50%;
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
    padding-top: 40px;
    margin-bottom: 32px;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
  .item:nth-child(3n) {
    grid-column: initial;
  }
  .item {
    border-radius: 24px;
  }
  .pic {
    height: 280px;
  }
  .name {
    bottom: 24px;
    left: 24px;
  }
}
</style>
