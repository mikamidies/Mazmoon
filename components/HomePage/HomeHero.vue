<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xs-12 p-0">
          <h2 class="title">
            <span class="one"> Millionlab insonlar </span>
            <span class="two"> uchun raqamli </span>
            <span class="three">mahsulotlarni loyihalashtiramiz</span>
          </h2>
          <div class="tags">
            <p class="tag">UX/UI dizayni</p>
            <p class="dot"></p>
            <p class="tag">Tadqiqot</p>
            <p class="dot"></p>
            <p class="tag">Dizaynni qo'llab-quvvatlash</p>
            <p class="dot"></p>
            <p class="tag">Autstaffing</p>
            <p class="dot"></p>
            <p class="tag">Kreativ</p>
          </div>
        </div>
        <div class="col-lg-2 col-xs-12 right">
          <div class="cardo first">
            <p class="num">400</p>
            <p class="sub">Web sayt loyihalarimiz</p>
          </div>

          <div class="cardo">
            <p class="num">67</p>
            <p class="sub">Mobile ilova loyihalarimiz</p>
          </div>
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
  padding: 240px 0 120px 0;
}
.title {
  color: var(--grey-24, #c2c2c3);
  font-family: "Interfaces-Bold";
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  margin-bottom: 40px;
}
.one {
  color: black;
}
.tags {
  display: flex;
  align-items: center;
  gap: 18px;
}
.tag {
  color: var(--grey-64, #5d5d5f);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  font-family: var(--medium);
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--grey-24, #c2c2c3);
}
.cardo {
  border-radius: 24px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 24px 32px;
  max-width: 164px;
}
.first {
  margin-bottom: 16px;
}
.num {
  color: var(--Black, #292929);
  font-family: var(--bold);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
  margin-bottom: 8px;
}
.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  font-family: var(--medium);
}
.row {
  align-items: center;
  margin: 0;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0;
}
</style>
