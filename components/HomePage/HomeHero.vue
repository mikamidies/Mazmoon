<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xs-12 p-0">
          <h2 class="title">
            <span class="one">
              {{ $store.state.translations["main.title-1"] }}</span>
            <span class="two">
              {{ $store.state.translations["main.title-2"] }}
            </span>
            <span class="three">{{
              $store.state.translations["main.title-3"]
            }}</span>
          </h2>
          <div class="tags">
            <p class="tag">{{ $store.state.translations["main.service-1"] }}</p>
            <p class="dot"></p>
            <p class="tag">{{ $store.state.translations["main.service-2"] }}</p>
            <p class="dot"></p>
            <p class="tag">{{ $store.state.translations["main.service-3"] }}</p>
            <p class="dot"></p>
            <p class="tag">{{ $store.state.translations["main.service-4"] }}</p>
            <p class="dot"></p>
            <p class="tag">{{ $store.state.translations["main.service-5"] }}</p>
          </div>
        </div>
        <div class="col-lg-2 col-xs-12 right">
          <div class="cardo first">
            <ICountUp class="num" :delay="delay" :endVal="endVal" :options="options" />
            <p class="sub">{{ $store.state.translations["main.sites"] }}</p>
          </div>

          <div class="cardo">
            <ICountUp class="num" :delay="delay" :endVal="endVal2" :options="options" />
            <p class="sub">{{ $store.state.translations["main.mobiles"] }}</p>
          </div>
        </div>
        <button @click="modalHandle = true" class="sender">
          Ariza yuborish
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_1812_149)">
              <path
                d="M1.66602 18.3332L10.0554 9.94372M14.9237 9.71068C15.3402 9.71068 15.7377 9.52412 15.9816 9.18645C17.1931 7.50883 18.0157 5.53175 18.3171 3.38742C18.4585 2.3817 17.6169 1.54067 16.6112 1.68209C10.8711 2.48926 6.32962 7.03072 5.52246 12.7708C5.38104 13.7765 6.22206 14.6182 7.22778 14.4768C9.37211 14.1754 11.3492 13.3528 13.0268 12.1413C13.3645 11.8974 13.551 11.4999 13.551 11.0833C13.551 10.3252 14.1656 9.71068 14.9237 9.71068Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1812_149">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div class="blue">
        <img src="@/assets/video/gif.gif" alt="" />
        <div class="up">
          <div class="left">
            <h4 class="blue-title">
              {{ $store.state.translations["new.contact-us"] }}
            </h4>
            <p class="blue-sub">
              {{ $store.state.translations["new.con-sub"] }}
            </p>
          </div>
          <div class="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="58" viewBox="0 0 80 58" fill="none">
              <path
                d="M78.9974 8.70806C78.9974 13.5174 75.1463 17.4161 70.3957 17.4161C65.6451 17.4161 61.7939 13.5174 61.7939 8.70806C61.7939 3.89873 65.6451 0 70.3957 0C75.1463 0 78.9974 3.89873 78.9974 8.70806Z"
                fill="#F5F5F7" />
              <path
                d="M10.7911 23.7222H13.3292V36.3885H10.8805V28.1735L7.35936 34.0542H7.07338L3.55226 28.1916V36.3885H1.08568V23.7222H3.62375L7.21637 29.7115L10.7911 23.7222Z"
                fill="#F5F5F7" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M22.3452 28.4087V27.3411H24.6509V36.3885H22.3452V35.3209C21.6541 36.2015 20.683 36.6418 19.4318 36.6418C18.2402 36.6418 17.2155 36.1834 16.3575 35.2666C15.5115 34.3377 15.0885 33.2038 15.0885 31.8648C15.0885 30.5379 15.5115 29.41 16.3575 28.4811C17.2155 27.5522 18.2402 27.0878 19.4318 27.0878C20.683 27.0878 21.6541 27.5281 22.3452 28.4087ZM18.0913 33.7104C18.556 34.1809 19.1458 34.4161 19.8608 34.4161C20.5757 34.4161 21.1656 34.1809 21.6303 33.7104C22.1069 33.2279 22.3452 32.6127 22.3452 31.8648C22.3452 31.1169 22.1069 30.5077 21.6303 30.0372C21.1656 29.5547 20.5757 29.3134 19.8608 29.3134C19.1458 29.3134 18.556 29.5547 18.0913 30.0372C17.6266 30.5077 17.3942 31.1169 17.3942 31.8648C17.3942 32.6127 17.6266 33.2279 18.0913 33.7104Z"
                fill="#F5F5F7" />
              <path
                d="M29.5479 34.199L33.3371 28.8973V27.3411H26.6345V29.5306H30.2271L26.4558 34.8323V36.3885H33.5159V34.199H29.5479Z"
                fill="#F5F5F7" />
              <path
                d="M45.0915 27.0878C46.1163 27.0878 46.9325 27.4256 47.5402 28.1011C48.1598 28.7766 48.4696 29.6814 48.4696 30.8153V36.3885H46.1639V30.9782C46.1639 30.4353 46.0328 30.0131 45.7707 29.7115C45.5085 29.41 45.1392 29.2592 44.6625 29.2592C44.1382 29.2592 43.7271 29.4341 43.4292 29.7839C43.1433 30.1337 43.0003 30.6404 43.0003 31.3039V36.3885H40.6946V30.9782C40.6946 30.4353 40.5635 30.0131 40.3013 29.7115C40.0392 29.41 39.6698 29.2592 39.1932 29.2592C38.6808 29.2592 38.2697 29.4401 37.9599 29.802C37.662 30.1518 37.513 30.6525 37.513 31.3039V36.3885H35.2073V27.3411H37.513V28.3001C38.0492 27.4919 38.8774 27.0878 39.9975 27.0878C41.1057 27.0878 41.9159 27.5221 42.4283 28.3906C43.0122 27.5221 43.8999 27.0878 45.0915 27.0878Z"
                fill="#F5F5F7" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M54.6819 36.6418C56.0164 36.6418 57.1365 36.1834 58.0421 35.2666C58.9596 34.3377 59.4184 33.2038 59.4184 31.8648C59.4184 30.5379 58.9596 29.41 58.0421 28.4811C57.1246 27.5522 56.0045 27.0878 54.6819 27.0878C53.3592 27.0878 52.2391 27.5522 51.3216 28.4811C50.416 29.3979 49.9632 30.5258 49.9632 31.8648C49.9632 33.2159 50.416 34.3498 51.3216 35.2666C52.2272 36.1834 53.3473 36.6418 54.6819 36.6418ZM54.6819 34.3619C53.9908 34.3619 53.4128 34.1266 52.9481 33.6562C52.4953 33.1736 52.2689 32.5765 52.2689 31.8648C52.2689 31.1531 52.4953 30.5559 52.9481 30.0734C53.4128 29.603 53.9908 29.3677 54.6819 29.3677C55.373 29.3677 55.9509 29.603 56.4156 30.0734C56.8803 30.5439 57.1127 31.141 57.1127 31.8648C57.1127 32.5886 56.8803 33.1857 56.4156 33.6562C55.9509 34.1266 55.373 34.3619 54.6819 34.3619Z"
                fill="#F5F5F7" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M68.6547 35.2666C67.7491 36.1834 66.629 36.6418 65.2944 36.6418C63.9598 36.6418 62.8397 36.1834 61.9341 35.2666C61.0285 34.3498 60.5757 33.2159 60.5757 31.8648C60.5757 30.5258 61.0285 29.3979 61.9341 28.4811C62.8516 27.5522 63.9717 27.0878 65.2944 27.0878C66.6171 27.0878 67.7371 27.5522 68.6547 28.4811C69.5722 29.41 70.0309 30.5379 70.0309 31.8648C70.0309 33.2038 69.5722 34.3377 68.6547 35.2666ZM63.5606 33.6562C64.0254 34.1266 64.6033 34.3619 65.2944 34.3619C65.9855 34.3619 66.5634 34.1266 67.0281 33.6562C67.4929 33.1857 67.7252 32.5886 67.7252 31.8648C67.7252 31.141 67.4929 30.5439 67.0281 30.0734C66.5634 29.603 65.9855 29.3677 65.2944 29.3677C64.6033 29.3677 64.0254 29.603 63.5606 30.0734C63.1078 30.5559 62.8814 31.1531 62.8814 31.8648C62.8814 32.5765 63.1078 33.1736 63.5606 33.6562Z"
                fill="#F5F5F7" />
              <path
                d="M79.0348 28.083C78.4152 27.4195 77.6109 27.0878 76.6219 27.0878C75.3945 27.0878 74.5068 27.51 73.9587 28.3544V27.3411H71.653V36.3885H73.9587V31.5029C73.9587 30.7671 74.1315 30.2121 74.477 29.8382C74.8345 29.4522 75.3171 29.2592 75.9248 29.2592C76.4729 29.2592 76.9019 29.422 77.2117 29.7477C77.5334 30.0734 77.6943 30.5318 77.6943 31.1229V36.3885H80V30.8334C80 29.6753 79.6783 28.7585 79.0348 28.083Z"
                fill="#F5F5F7" />
              <path
                d="M7.8062 47.5775H14.0799V48.5546C14.0799 50.364 13.5079 51.8297 12.364 52.9516C11.2201 54.0735 9.74252 54.6344 7.93132 54.6344C6.00096 54.6344 4.39828 54.0011 3.12329 52.7344C1.86021 51.4558 1.22867 49.8996 1.22867 48.066C1.22867 46.2204 1.85425 44.6582 3.10541 43.3795C4.36849 42.1008 5.92946 41.4615 7.78833 41.4615C8.94416 41.4615 10.0047 41.7269 10.9699 42.2576C11.935 42.7884 12.6917 43.5062 13.2398 44.4109L11.1307 45.6413C10.8328 45.1226 10.38 44.7004 9.77232 44.3747C9.16461 44.049 8.49732 43.8862 7.77046 43.8862C6.56696 43.8862 5.5839 44.2842 4.82129 45.0804C4.05868 45.8524 3.67737 46.8476 3.67737 48.066C3.67737 49.2603 4.06464 50.2494 4.83917 51.0336C5.61369 51.8056 6.65037 52.1916 7.94919 52.1916C8.89054 52.1916 9.67699 51.9805 10.3085 51.5583C10.9401 51.1361 11.369 50.545 11.5954 49.785H7.8062V47.5775Z"
                fill="white" />
              <path
                d="M18.0328 46.8899V45.3337H15.7271V54.3811H18.0328V50.0564C18.0328 49.1879 18.3068 48.5666 18.855 48.1927C19.415 47.8067 20.0465 47.6619 20.7496 47.7584V45.1528C20.118 45.1528 19.558 45.3036 19.0694 45.6051C18.5809 45.8947 18.2353 46.3229 18.0328 46.8899Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M29.3806 53.2592C28.475 54.176 27.3549 54.6344 26.0204 54.6344C24.6858 54.6344 23.5657 54.176 22.6601 53.2592C21.7545 52.3424 21.3017 51.2085 21.3017 49.8574C21.3017 48.5184 21.7545 47.3905 22.6601 46.4737C23.5776 45.5448 24.6977 45.0804 26.0204 45.0804C27.343 45.0804 28.4631 45.5448 29.3806 46.4737C30.2981 47.4026 30.7569 48.5305 30.7569 49.8574C30.7569 51.1964 30.2981 52.3303 29.3806 53.2592ZM24.2866 51.6488C24.7513 52.1192 25.3293 52.3545 26.0204 52.3545C26.7115 52.3545 27.2894 52.1192 27.7541 51.6488C28.2188 51.1783 28.4512 50.5812 28.4512 49.8574C28.4512 49.1336 28.2188 48.5365 27.7541 48.066C27.2894 47.5956 26.7115 47.3603 26.0204 47.3603C25.3293 47.3603 24.7513 47.5956 24.2866 48.066C23.8338 48.5485 23.6074 49.1457 23.6074 49.8574C23.6074 50.5691 23.8338 51.1662 24.2866 51.6488Z"
                fill="white" />
              <path
                d="M38.2773 45.3337V50.2193C38.2773 50.9551 38.0985 51.5161 37.7411 51.9021C37.3955 52.2761 36.9189 52.463 36.3112 52.463C35.763 52.463 35.3281 52.3002 35.0064 51.9745C34.6966 51.6488 34.5417 51.1904 34.5417 50.5993V45.3337H32.236V50.8888C32.236 52.0468 32.5517 52.9636 33.1833 53.6392C33.8267 54.3027 34.637 54.6344 35.6141 54.6344C36.8414 54.6344 37.7291 54.2122 38.2773 53.3678V54.3811H40.583V45.3337H38.2773Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M47.896 45.0804C49.0995 45.0804 50.1243 45.5448 50.9703 46.4737C51.8282 47.4026 52.2572 48.5305 52.2572 49.8574C52.2572 51.2085 51.8282 52.3424 50.9703 53.2592C50.1362 54.176 49.1114 54.6344 47.896 54.6344C46.6448 54.6344 45.6797 54.1941 45.0005 53.3135V58H42.6947V45.3337H45.0005V46.4013C45.6797 45.5207 46.6448 45.0804 47.896 45.0804ZM45.6975 51.7031C46.1622 52.1735 46.7521 52.4087 47.467 52.4087C48.182 52.4087 48.7718 52.1735 49.2365 51.7031C49.7132 51.2205 49.9515 50.6053 49.9515 49.8574C49.9515 49.1095 49.7132 48.5003 49.2365 48.0298C48.7718 47.5473 48.182 47.306 47.467 47.306C46.7521 47.306 46.1622 47.5473 45.6975 48.0298C45.2328 48.5003 45.0005 49.1095 45.0005 49.8574C45.0005 50.6053 45.2328 51.2205 45.6975 51.7031Z"
                fill="white" />
              <path
                d="M14.6995 8.25074C15.2594 7.76015 16.0972 7.79147 16.62 8.32256L22.0249 13.8124C25.1492 16.9858 30.2147 16.9858 33.3389 13.8124L38.7438 8.32256C39.2667 7.79148 40.1044 7.76015 40.6643 8.25075L51.0603 17.36L55.3638 12.2929L44.9679 3.18363C41.7951 0.40358 37.048 0.5811 34.0851 3.59059L28.6802 9.08045C28.1289 9.64047 27.235 9.64047 26.6836 9.08045L21.2787 3.59059C18.3158 0.581102 13.5688 0.403574 10.396 3.18362L0 12.2929L4.30354 17.36L14.6995 8.25074Z"
                fill="#F5F5F7" />
            </svg>
          </div>
        </div>
        <div class="down">
          <form>
            <input readonly type="text" :placeholder="$store.state.translations['main.your-phone']" />
            <button type="button" @click="modalHandle = !modalHandle">
              {{ $store.state.translations["main.application"] }}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333Z"
                  stroke="white" stroke-width="1.5" stroke-linejoin="round" />
              </svg>
            </button>
          </form>
          <a :href="`tel:${info.nbm}`">{{ info.nbm }}</a>
        </div>
      </div>
    </div>

    <div class="wrep modal" :class="{ show: modalHandle == true }">
      <div class="x" @click="modalHandle = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M32.4862 15.5148L15.5156 32.4853M32.4862 32.4852L15.5156 15.5146" stroke="#28303F" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="cont small">
        <h4 class="tite">
          {{ $store.state.translations["main.modal-title"] }}
        </h4>
        <p class="sub">
          {{ $store.state.translations["main.modal-sub"] }}
        </p>
        <form @submit.prevent="onSubmit">
          <div class="type">
            <p class="top">
              {{ $store.state.translations["main.project-type"] }}
            </p>
            <div class="items buttons">
              <button @click="type = 'web'" :class="{ active: type == 'web' }" type="button">
                {{ $store.state.translations["main.type-1"] }}
              </button>
              <button @click="type = 'corp'" :class="{ active: type == 'corp' }" type="button">
                {{ $store.state.translations["main.type-2"] }}
              </button>
              <button @click="type = 'crm'" :class="{ active: type == 'crm' }" type="button">
                {{ $store.state.translations["main.type-3"] }}
              </button>
              <button @click="type = 'mobil'" :class="{ active: type == 'mobil' }" type="button">
                {{ $store.state.translations["main.type-4"] }}
              </button>
              <button @click="type = 'lending'" :class="{ active: type == 'lending' }" type="button">
                {{ $store.state.translations["main.type-5"] }}
              </button>
              <button @click="type = 'e-shop'" :class="{ active: type == 'e-shop' }" type="button">
                {{ $store.state.translations["main.type-6"] }}
              </button>
            </div>
          </div>
          <div class="budget">
            <p class="top">
              {{ $store.state.translations["main.project-budget"] }}
            </p>
            <div class="items buttons">
              <button @click="price = 4000000" :class="{ active: price == 4000000 }" type="button">
                {{ $store.state.translations["main.budget-1"] }}
              </button>
              <button @click="price = 12000000" :class="{ active: price == 12000000 }" type="button">
                {{ $store.state.translations["main.budget-2"] }}
              </button>
              <button @click="price = 18000000" :class="{ active: price == 18000000 }" type="button">
                {{ $store.state.translations["main.budget-3"] }}
              </button>
              <button @click="price = 20000000" :class="{ active: price == 20000000 }" type="button">
                {{ $store.state.translations["main.budget-4"] }}
              </button>
              <button @click="price = 26000000" :class="{ active: price == 26000000 }" type="button">
                {{ $store.state.translations["main.budget-5"] }}
              </button>
              <button @click="price = NaN" :class="{ active: price == NaN }" type="button">
                {{ $store.state.translations["main.budget-6"] }}
              </button>
            </div>
          </div>
          <div class="form">
            <p class="top">
              {{ $store.state.translations["main.form-title"] }}
            </p>
            <div class="inputs">
              <input v-model="full_name" required type="text"
                :placeholder="$store.state.translations['main.your-name']" />
              <input v-mask="'+998 (##) ###-##-##'" v-model="number" required type="text"
                :placeholder="$store.state.translations['main.your-phone']" />
              <textarea v-model="message" :placeholder="$store.state.translations['main.your-comment']"></textarea>
            </div>
          </div>
          <div class="butn">
            <button type="submit" class="submit">
              <span class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M4 44L24.1346 23.8653M35.8184 23.306C36.818 23.306 37.7721 22.8583 38.3574 22.0479C41.265 18.0216 43.2392 13.2766 43.9626 8.13019C44.3019 5.71647 42.2821 3.698 39.8684 4.03741C26.0921 5.97461 15.1927 16.8741 13.2555 30.6504C12.916 33.0641 14.9345 35.084 17.3482 34.7447C22.4946 34.0212 27.2396 32.0471 31.2659 29.1394C32.0763 28.5542 32.524 27.6 32.524 26.6004C32.524 24.781 33.999 23.306 35.8184 23.306Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              {{ $store.state.translations["main.send-app"] }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
import formApi from "@/api/form.js";

export default {
  props: ["info"],

  components: {
    ICountUp,
  },

  data() {
    return {
      delay: 1000,
      endVal: 400,
      endVal2: 67,
      options: {
        useEasing: true,
        enableScrollSpy: true,
        scrollSpyDelay: 100,
        scrollSpyOnce: true,
      },

      modalHandle: false,
      type: "",
      price: "",
      full_name: "",
      number: "",
      message: "",

      token: "6634150070:AAEKuBPXKTxnw47yxkMt1TLQ-ZxBQPOPqvc",
      chatId: "-1001823370666",
    };
  },

  watch: {
    modalHandle(val) {
      if (val) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
      } else {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      }
    },
  },

  methods: {
    async onSubmit() {
      const formData = {
        type: this.type,
        price: this.price,
        full_name: this.full_name,
        number: this.number,
        message: this.message,
      };

      if (this.number.length > 1) {
        const res = await formApi.sendApplication(formData);

        if (res && res.status === 201) {
          this.$toast.success("Successfully sent");
        } else {
          this.$toast.error("Error");
        }

        const message = `Name: ${this.full_name}%0APhone Number: ${this.number}%0AMessage: ${this.message}%0AType: ${this.type}%0APrice: ${this.price}`;

        this.$axios
          .post(
            `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`
          )
          .then((response) => {
            console.log("Successfully", response);

            this.type = "";
            this.price = "";
            this.full_name = "";
            this.number = "";
            this.message = "";
          });

        this.modalHandle = false;
      }
    },
  },
};
</script>

<style scoped>
@import url(@/assets/css/modal.css);

.blue {
  border-radius: 24px;
  background: var(--Linear,
      linear-gradient(105deg, #3c4bdc -9.99%, #7b7dff 109.77%));
  box-shadow: 0px 24px 64px -8px rgba(60, 75, 220, 0.16);
  margin-top: 72px;
  overflow: hidden;
  padding: 24px 32px 28px 32px;
  position: relative;
}

.blue img {
  opacity: 0.7;
  position: absolute;
  top: 50%;
  transform: translateY(-35%);
  left: 0;
  mix-blend-mode: lighten;
  width: 100%;
  z-index: 1;
}

.up,
.down {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.blue-title {
  margin-bottom: 16px;
  color: var(--White, #fff);
  font-family: var(--semi);
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 38.4px */
}

.blue-sub {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
}

.up {
  margin-bottom: 56px;
}

.down form {
  border-radius: 54px;
  background: var(--White, #fff);
  padding: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.down input {
  border: 0;
  color: var(--grey-40, #9a999b);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
  height: 100%;
  padding-left: 24px;
}

.down input:focus {
  outline: none;
}

.down button {
  border-radius: 49px;
  background: var(--Linear,
      linear-gradient(105deg, #3c4bdc -9.99%, #7b7dff 109.77%));
  padding: 12px 32px 12px 40px;
  color: var(--White, #fff);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
  border: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.down a {
  color: var(--White, #fff);
  text-align: right;
  font-family: var(--medium);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 30px */
}

.wrap {
  padding: 240px 0 80px 0;
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
  line-height: 140%;
  /* 33.6px */
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
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  line-height: 120%;
  /* 48px */
  margin-bottom: 8px;
}

.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 27px */
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

@media screen and (max-width: 1024px) {
  .wrap {
    padding: 140px 0 40px 0;
  }

  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
    margin-bottom: 24px;
  }

  .tags {
    gap: 16px;
    flex-wrap: wrap;
    max-width: 80%;
  }

  .tag {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .right {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 16px;
    margin-top: 48px;
  }

  .first {
    margin: 0;
  }

  .cardo {
    min-height: 114px;
    max-width: none;
    width: 100%;
    padding: 16px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .num {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    margin: 0;
  }

  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  .blue {
    margin-top: 24px;
    padding: 20px;
    border-radius: 16px;
  }

  .down {
    flex-direction: column;
  }

  .up {
    flex-direction: column-reverse;
    gap: 24px;
    margin-bottom: 32px;
  }

  .blue-title {
    font-size: 24px;
    text-align: center;
  }

  .blue-sub {
    font-size: 14px;
    text-align: center;
  }

  .down form {
    width: 100%;
    margin-bottom: 16px;
  }

  .down input {
    padding-left: 16px;
    width: 60%;
    font-size: 14px;
  }

  .down button {
    padding: 10px 12px;
    font-size: 14px;
    white-space: nowrap;
    width: 40%;
  }

  .down button svg {
    display: none;
  }
}
</style>
