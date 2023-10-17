<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <NuxtLink to="/">
          <img src="@/assets/img/logo/brand.svg" alt="" />
        </NuxtLink>
      </div>
      <div class="right">
        <a href="mailto:mazmoongr@gmail.com" class="mail">
          mazmoongr@gmail.com
        </a>
        <a href="#" class="telegram">Написать в телеграм</a>
        <button class="button">
          Заявка
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1073_72)">
              <path
                d="M1.66602 18.3332L10.0554 9.94372M14.9237 9.71068C15.3402 9.71068 15.7377 9.52412 15.9816 9.18645C17.1931 7.50883 18.0157 5.53175 18.3171 3.38742C18.4585 2.3817 17.6169 1.54067 16.6112 1.68209C10.8711 2.48926 6.32962 7.03072 5.52246 12.7708C5.38104 13.7765 6.22206 14.6182 7.22778 14.4768C9.37211 14.1754 11.3492 13.3528 13.0268 12.1413C13.3645 11.8974 13.551 11.4999 13.551 11.0833C13.551 10.3252 14.1656 9.71068 14.9237 9.71068Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1073_72">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  padding: 32px 0;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mail {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}
.right {
  display: flex;
  align-items: center;
  gap: 40px;
}
.telegram {
  background: radial-gradient(
    1291.81% 268.77% at -13.41% -16.67%,
    #cef3fc 0%,
    #00a5ff 28.13%,
    #0053dc 64.06%,
    #0027dc 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
}
.button {
  border-radius: 62px;
  background: linear-gradient(105deg, #3c4bdc -9.99%, #7b7dff 109.77%);
  padding: 12px 40px;
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
