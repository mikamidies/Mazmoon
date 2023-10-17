<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Loyihalarimiz</h4>
      <div class="items">
        <div class="item">
          <img src="@/assets/img/project-1.jpg" alt="" class="pic" />
          <p class="name">
            Cavsar tour - turistik agentligi uchun chizilgan web sayt
          </p>
        </div>
        <div class="item">
          <img src="@/assets/img/project-2.jpg" alt="" class="pic" />
          <p class="name">
            Cavsar tour - turistik agentligi uchun chizilgan web sayt
          </p>
        </div>
        <div class="item">
          <img src="@/assets/img/project-3.jpg" alt="" class="pic" />
          <p class="name">
            Cavsar tour - turistik agentligi uchun chizilgan web sayt
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, rgba(255, 69, 69, 0) 0%, #00000090 100%);
  width: 100%;
  height: 100%;
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
</style>
