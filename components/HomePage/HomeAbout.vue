<template>
  <div class="wrap">
    <div class="container">
      <h4 class="some">
        {{ $store.state.translations["new.some-title"] }}
      </h4>
      <div class="cards">
        <div class="cardo">
          <h4 class="card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0.666016 4.66675C0.666016 2.45761 2.45688 0.666748 4.66602 0.666748H23.3327C25.5418 0.666748 27.3327 2.45761 27.3327 4.66675V15.6667H0.666016V4.66675ZM0.666016 17.6667H27.3327V18.0001C27.3327 20.2092 25.5418 22.0001 23.3327 22.0001H14.9993V25.3334H17.9993C18.5516 25.3334 18.9993 25.7811 18.9993 26.3334C18.9993 26.8857 18.5516 27.3334 17.9993 27.3334H9.99935C9.44706 27.3334 8.99935 26.8857 8.99935 26.3334C8.99935 25.7811 9.44706 25.3334 9.99935 25.3334H12.9993V22.0001H4.66602C2.45688 22.0001 0.666016 20.2092 0.666016 18.0001V17.6667Z"
                fill="#3C4BDC" />
            </svg>
            {{ $store.state.translations["new.card-title-1"] }}
          </h4>
          <p class="card-txt">
            {{ $store.state.translations["new.card-txt-1"] }}
          </p>
          <button @click="modalHandle = true">
            {{ $store.state.translations["new.card-order"] }}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#3C4BDC" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="cardo">
          <h4 class="card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M24 21.9559V11.5339C24 9.91924 23.2805 8.39008 22.0402 7.36878L15.3735 1.87921C13.4103 0.262592 10.5897 0.262596 8.62648 1.87921L1.95982 7.36878C0.719527 8.39008 0 9.91924 0 11.5339V21.9559C0 24.9258 2.38781 27.3334 5.33333 27.3334H18.6667C21.6122 27.3334 24 24.9258 24 21.9559ZM12.5657 11.3334H11.4343C10.8095 11.3334 10.303 11.811 10.303 12.4001C10.303 13.0742 9.58172 13.5028 8.98962 13.1805L8.92949 13.1478C8.38839 12.8532 7.69649 13.028 7.38408 13.5382L6.81842 14.462C6.50602 14.9721 6.69141 15.6245 7.23251 15.9191C7.82489 16.2415 7.8249 17.092 7.23253 17.4144C6.69143 17.709 6.50603 18.3614 6.81844 18.8715L7.3841 19.7953C7.6965 20.3055 8.3884 20.4803 8.9295 20.1857L8.98963 20.153C9.58173 19.8307 10.303 20.2593 10.303 20.9334C10.303 21.5225 10.8095 22.0001 11.4343 22.0001H12.5657C13.1905 22.0001 13.697 21.5225 13.697 20.9334C13.697 20.2593 14.4183 19.8307 15.0104 20.153L15.0705 20.1857C15.6116 20.4803 16.3035 20.3055 16.6159 19.7953L17.1816 18.8715C17.494 18.3614 17.3086 17.709 16.7675 17.4144C16.1751 17.092 16.1751 16.2415 16.7675 15.9191C17.3086 15.6245 17.494 14.9721 17.1816 14.462L16.6159 13.5382C16.3035 13.028 15.6116 12.8532 15.0705 13.1478L15.0104 13.1805C14.4183 13.5028 13.697 13.0742 13.697 12.4001C13.697 11.811 13.1905 11.3334 12.5657 11.3334ZM12 18.6667C13.1046 18.6667 14 17.7713 14 16.6667C14 15.5622 13.1046 14.6667 12 14.6667C10.8954 14.6667 10 15.5622 10 16.6667C10 17.7713 10.8954 18.6667 12 18.6667Z"
                fill="#3C4BDC" />
            </svg>
            {{ $store.state.translations["new.card-title-2"] }}
          </h4>
          <p class="card-txt">
            {{ $store.state.translations["new.card-txt-2"] }}
          </p>
          <button @click="modalHandle = true">
            {{ $store.state.translations["new.card-order"] }}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#3C4BDC" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="cardo">
          <h4 class="card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 20 28" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M3.66602 0.666748C2.00916 0.666748 0.666016 2.00989 0.666016 3.66675V24.3334C0.666016 25.9903 2.00916 27.3334 3.66601 27.3334H16.3327C17.9895 27.3334 19.3327 25.9903 19.3327 24.3334V3.66675C19.3327 2.00989 17.9895 0.666748 16.3327 0.666748H3.66602ZM8.66602 22.5834C8.2518 22.5834 7.91602 22.9192 7.91602 23.3334C7.91602 23.7476 8.2518 24.0834 8.66602 24.0834H11.3327C11.7469 24.0834 12.0827 23.7476 12.0827 23.3334C12.0827 22.9192 11.7469 22.5834 11.3327 22.5834H8.66602Z"
                fill="#3C4BDC" />
            </svg>
            {{ $store.state.translations["new.card-title-3"] }}
          </h4>
          <p class="card-txt">
            {{ $store.state.translations["new.card-txt-3"] }}
          </p>
          <button @click="modalHandle = true">
            {{ $store.state.translations["new.card-order"] }}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#3C4BDC" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="cardo">
          <h4 class="card-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M7.64195 0.666748H20.3586C22.7817 0.666748 24.9608 2.32642 25.8607 4.85748L26.8713 7.69991C27.1773 8.56034 27.3887 9.48107 27.1656 10.3666C26.6371 12.4638 24.9226 14.0001 22.8892 14.0001C20.4346 14.0001 18.4447 11.7615 18.4447 9.00008C18.4447 11.7615 16.4549 14.0001 14.0003 14.0001C11.5457 14.0001 9.55583 11.7615 9.55583 9.00008C9.55583 11.7615 7.56599 14.0001 5.11139 14.0001C3.07793 14.0001 1.36342 12.4638 0.834962 10.3666C0.611824 9.48107 0.823295 8.56034 1.12922 7.69991L2.13987 4.85748C3.0398 2.32642 5.21881 0.666748 7.64195 0.666748ZM3.33366 15.7341V22C3.33366 24.9455 5.72147 27.3333 8.66699 27.3333H19.3337C22.2792 27.3333 24.667 24.9455 24.667 22V15.7341C24.1086 15.9064 23.5134 16 22.8893 16C21.1065 16 19.57 15.2498 18.4449 14.0746C17.3198 15.2498 15.7833 16 14.0004 16C12.2176 16 10.6811 15.2498 9.55598 14.0746C8.43089 15.2498 6.89436 16 5.11153 16C4.48736 16 3.89215 15.9064 3.33366 15.7341ZM18.8713 20.1754C19.1425 20.6565 18.9724 21.2663 18.4913 21.5376C16.8711 22.4511 15.4755 22.997 14.004 22.9998C12.5306 23.0027 11.1323 22.461 9.50571 21.5357C9.02566 21.2626 8.85789 20.6521 9.13098 20.172C9.40406 19.692 10.0146 19.5242 10.4946 19.7973C12.0096 20.6591 13.043 21.0017 14.0001 20.9998C14.959 20.998 15.9927 20.6503 17.5091 19.7954C17.9901 19.5242 18.6 19.6943 18.8713 20.1754Z"
                fill="#3C4BDC" />
            </svg>
            {{ $store.state.translations["new.card-title-4"] }}
          </h4>
          <p class="card-txt">
            {{ $store.state.translations["new.card-txt-4"] }}
          </p>
          <button @click="modalHandle = true">
            {{ $store.state.translations["new.card-order"] }}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#3C4BDC" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
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
import formApi from "@/api/form.js";

export default {
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

.some {
  margin: 0 auto 40px auto;
  max-width: 782px;
  color: var(--grey-64, #5d5d5f);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 33.6px */
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding-bottom: 120px;
}

.cardo {
  border-radius: 24px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 24px;
}

.logo {
  margin-bottom: 40px;
}

.card-title {
  color: var(--Black, #292929);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  /* 33.6px */
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-txt {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
}

.cardo button {
  border-radius: 62px;
  background: var(--White, #fff);
  gap: 16px;
  padding: 12px 32px;
  color: var(--Black, #292929);
  font-family: var(--medium);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
  border: 0;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.pic {
  width: 100%;
  height: 444px;
  object-fit: cover;
  border-radius: 40px;
}

@media screen and (max-width: 1024px) {
  .some {
    font-size: 18px;
    margin: 0;
  }

  .grid,
  .cards {
    grid-template-columns: repeat(1, 1fr);
  }

  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 16px;
  }

  .sub,
  .card-txt {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  button {}

  .pic {
    height: 230px;
    border-radius: 24px;
  }

  .cards {
    margin-top: 24px;
    padding-bottom: 0;
  }

  .cardo {
    padding: 16px;
    border-radius: 16px;
  }

  .logo {
    margin-bottom: 24px;
  }

  .cardo button {
    margin-top: 24px;
    width: 100%;
    padding: 12px;
  }
}
</style>
