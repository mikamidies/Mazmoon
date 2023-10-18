<template>
  <div class="wrap">
    <div class="x">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          d="M32.4862 15.5148L15.5156 32.4853M32.4862 32.4852L15.5156 15.5146"
          stroke="#28303F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="container small">
      <h4 class="title">Ishni boshlaymizmi?</h4>
      <p class="sub">
        Yozing, agar biror narsa aniq bo'lmasa ham, biz sizga hamma narsani
        aytib beramiz. Tez javob beramiz)
      </p>
      <form action="">
        <div class="type">
          <p class="sup">Sizning loyihangiz qanday?</p>
          <div class="items">
            <button type="button">Web sayt</button>
            <button type="button">Korporativ sayt</button>
            <button type="button">CRM system</button>
            <button type="button">Mobil ilova</button>
            <button type="button">Lending sayt</button>
            <button type="button">Internet do’kon</button>
          </div>
        </div>
        <div class="budget">
          <p class="sup">Loyihaning taxminiy byudjeti qancha?</p>
          <div class="items">
            <button type="button">4 000 000 sum</button>
            <button type="button">12 000 000 sum</button>
            <button type="button">18 000 000 sum</button>
            <button type="button">20 000 000 sum</button>
            <button type="button">26 000 000 sum</button>
            <button type="button">Kelishamiz</button>
          </div>
        </div>
        <div class="form">
          <p class="sup">Aloqa uchun ma'lumotlarni kiriting</p>
          <div class="inputs">
            <input type="text" placeholder="Ismingiz nima?" />
            <input
              type="text"
              placeholder="Elektron pochtangiz yoki telefon raqamingiz"
            />
            <textarea placeholder="Har qanday izohingiz"></textarea>
          </div>
        </div>
        <div class="button">
          <button type="submit" class="submit">
            <span class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M4 44L24.1346 23.8653M35.8184 23.306C36.818 23.306 37.7721 22.8583 38.3574 22.0479C41.265 18.0216 43.2392 13.2766 43.9626 8.13019C44.3019 5.71647 42.2821 3.698 39.8684 4.03741C26.0921 5.97461 15.1927 16.8741 13.2555 30.6504C12.916 33.0641 14.9345 35.084 17.3482 34.7447C22.4946 34.0212 27.2396 32.0471 31.2659 29.1394C32.0763 28.5542 32.524 27.6 32.524 26.6004C32.524 24.781 33.999 23.306 35.8184 23.306Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Arizangizni yuboring
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  background: white;
  position: fixed;
  z-index: 100;
  top: 0;
  padding-top: 120px;
  height: 100vh;
  overflow: scroll;
}
.x {
  position: absolute;
  top: 40px;
  right: 20%;
}
.title {
  color: var(--Black, #292929);
  font-family: var(--bold);
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%; /* 96px */
  margin-bottom: 24px;
}
.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.type {
  margin: 120px 0;
}
.type button,
.budget button {
  padding: 12px 24px;
  border-radius: 78px;
  border: 1px solid var(--grey-24, #c2c2c3);
  background: var(--White, #fff);
  color: var(--Black, #292929);
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.budget {
  margin-bottom: 120px;
}
.budget .items,
.type .items {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.sup {
  color: var(--Black, #292929);
  font-family: var(--medium);
  font-size: 24px;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
}
.inputs {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
}
.form input {
  padding: 16px 0;
  border: none;
  border-bottom: 1px solid var(--grey-24, #c2c2c3);
  background: var(--White, #fff);
  color: black;
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
}
.form input:focus,
.form textarea:focus {
  outline: none;
}
.form textarea {
  padding: 16px 0;
  border: none;
  border-bottom: 1px solid var(--grey-24, #c2c2c3);
  background: var(--White, #fff);
  color: black;
  font-family: var(--medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  min-height: 135px;
  resize: none;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
.submit {
  width: 310px;
  height: 310px;
  border-radius: 50%;
  background: linear-gradient(105deg, #3c4bdc -9.99%, #7b7dff 109.77%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  gap: 16px;
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--semi);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
}
</style>
