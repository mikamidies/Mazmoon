<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-xs-12 left">
          <h4 class="title">
            <span> Zamonaviy raqamli </span> yechimlarni yaratamiz
          </h4>
          <p class="txt">
            Bizning dizayn agentligimiz o'zingizning proyektlaringizni o'z
            ichiga olgan yaratuvchilar jamoasidir. Bizning vazifamiz - sizning
            fikrlaringizni, brandingingizni va innovatsiyalaringizni
            rivojlantirishda yordam beramiz.
          </p>
          <p class="txt">
            Bizning mijozlarimizga unikal, ko'rib chiqaruvchi va turli sohalar
            uchun yaratilgan dizaynlarni taqdim qilish orqali ularning
            muvaffaqiyatini ta'minlashdir.
          </p>
          <div class="items">
            <div class="item">
              <p class="num">2021</p>
              <p class="sub">
                yildan beri biz Markaziy Osiyo va MDH davlatlarida faol
                ishlaymiz
              </p>
            </div>
            <div class="item">
              <p class="num">270+</p>
              <p class="sub">loyihalarni muvaffaqiyat orqali tugatkanmiz</p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-xs-12 right">
          <img src="@/assets/img/akmal.jpg" alt="" class="pic" />
          <img src="@/assets/img/logo/white.svg" alt="" class="brand" />
          <div class="tag">
            <p class="name">Sadulla</p>
            <p class="status">Art Director</p>
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
.title {
  margin-bottom: 24px;
  color: var(--Black, #c2c2c3);
  font-family: var(--bold);
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%; /* 76.8px */
}
.title span {
  color: black;
}
.txt {
  color: var(--grey-64, #5d5d5f);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-bottom: 24px;
}
.items {
  display: flex;
  align-items: center;
  gap: 40px;
}
.num {
  font-family: var(--bold);
  margin-top: 12px;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 57.6px */
  margin-bottom: 16px;
  background: linear-gradient(105deg, #3c4bdc -9.99%, #7b7dff 109.77%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sub {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  max-width: 295px;
}
.pic {
  width: 100%;
  height: 624px;
  object-fit: cover;
  border-radius: 40px;
}
.right,
.left {
  position: relative;
  padding: 0;
}
.row {
  margin: 0;
}
.brand {
  position: absolute;
  top: 32px;
  right: 32px;
}
.tag {
  background: white;
  position: absolute;
  bottom: 32px;
  left: 32px;
  border-radius: 16px;
  padding: 12px 24px;
}
.name {
  color: var(--Black, #292929);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
}
.status {
  color: var(--grey-40, #9a999b);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
</style>
