<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        <span> {{ $store.state.translations["main.vacansy-title-1"] }} </span>
        {{ $store.state.translations["main.vacansy-title-2"] }}
      </h4>
      <div class="items">
        <div
          class="item"
          data-aos="fade-up"
          :data-aos-duration="`${item.id * 200}`"
          v-for="item in vacansies"
          :key="item.id"
        >
          <p class="name">{{ item.title }}</p>
          <p class="skill">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["vacansies"],
};
</script>

<style scoped>
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
  margin-bottom: 40px;
  max-width: 700px;
}
.title span {
  color: black;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  align-items: center;
}
.item {
  border-radius: 24px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 24px;
  min-height: 166px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.name {
  color: var(--Black, #292929);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.skill {
  color: var(--Black, #292929);
  font-family: var(--medium);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
@media screen and (max-width: 1024px) {
  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 32px;
    max-width: 70%;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .item {
    min-height: 0;
    height: 106px;
    padding: 16px;
    border-radius: 16px;
  }
  .name {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .skill {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  .wrap {
    padding: 0 0 80px 0;
  }
}
</style>
