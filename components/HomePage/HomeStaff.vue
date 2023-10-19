<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title"><span>Qobilyatli jaydari</span> ishchilarimiz</h4>
      <div class="items">
        <div class="item" v-for="item in staff" :key="item.id">
          <div class="img">
            <img :src="item.image" alt="" class="pic" />
          </div>
          <div class="content">
            <p class="name">{{ item.title }}</p>
            <p class="status">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["staff"],
};
</script>

<style scoped>
.wrap {
  padding: 120px 0;
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
  gap: 40px;
  align-items: center;
}
.item {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}
.pic {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
}
.content {
  text-align: center;
}
.name {
  color: var(--Black, #292929);
  text-align: center;
  font-family: var(--semi);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  margin-bottom: 4px;
}
.status {
  color: var(--grey-40, #9a999b);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
@media screen and (max-width: 1024px) {
  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 32px;
  }
  .wrap {
    padding: 80px 0;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .pic {
    width: 100%;
    height: 164px;
  }
  .item {
    gap: 16px;
  }
  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .status {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
}
</style>
