<template>
  <div class="wrap" id="navbar">
    <div class="container">
      <div class="left">
        <NuxtLink to="/">
          <img src="@/assets/img/logo/brand.svg" alt="Mazmoon Logo" title="Mazmoon Logo" width="100%" height="100%" />
        </NuxtLink>
      </div>
      <div class="right">
        <a target="_blank" :href="`mailto:${info.email}`" class="mail">
          {{ info.email }}
        </a>
        <a target="_blank" :href="info.telegram" class="telegram">{{
          $store.state.translations["main.telegram"]
        }}</a>
        <button @click="modalHandle = true" class="button">
          <span> {{ $store.state.translations["main.application"] }} </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_1073_72)">
              <path
                d="M1.66602 18.3332L10.0554 9.94372M14.9237 9.71068C15.3402 9.71068 15.7377 9.52412 15.9816 9.18645C17.1931 7.50883 18.0157 5.53175 18.3171 3.38742C18.4585 2.3817 17.6169 1.54067 16.6112 1.68209C10.8711 2.48926 6.32962 7.03072 5.52246 12.7708C5.38104 13.7765 6.22206 14.6182 7.22778 14.4768C9.37211 14.1754 11.3492 13.3528 13.0268 12.1413C13.3645 11.8974 13.551 11.4999 13.551 11.0833C13.551 10.3252 14.1656 9.71068 14.9237 9.71068Z"
                stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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

    <div class="wrep modal" :class="{ show: modalHandle == true }">
      <div class="x" @click="modalHandle = false">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M32.4862 15.5148L15.5156 32.4853M32.4862 32.4852L15.5156 15.5146" stroke="#28303F" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="cont small">
        <h4 class="title">
          {{ $store.state.translations["main.modal-title"] }}
        </h4>
        <p class="sub">
          {{ $store.state.translations["main.modal-sub"] }}
        </p>
        <form @submit.prevent="onSubmit">
          <div class="type">
            <p class="sup">
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
            <p class="sup">
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
            <p class="sup">
              {{ $store.state.translations["main.form-title"] }}
            </p>
            <div class="inputs">
              <input v-model="full_name" required type="text" :placeholder="$store.state.translations['main.your-name']"
                minlength="3" />
              <input v-mask="'+998 (##) ###-##-##'" v-model="number" required type="text"
                :placeholder="$store.state.translations['main.your-phone']" ref="maskedInput"
                @input="checkMaskValidity" />
              <textarea v-model="message" :placeholder="$store.state.translations['main.your-comment']"></textarea>
            </div>
          </div>
          <div class="butn">
            <button type="submit" name="submit" class="submit">
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
import infoApi from "@/api/info.js";

export default {
  data() {
    return {
      modalHandle: false,
      type: "",
      price: "",
      full_name: "",
      number: "",
      message: "",

      info: {},

      token: "6634150070:AAEKuBPXKTxnw47yxkMt1TLQ-ZxBQPOPqvc",
      chatId: "-1001823370666",
    };
  },

  async fetch() {
    const info = await infoApi.getInfo(this.$axios);

    this.info = info;
  },

  mounted() {
    function scrollHeader() {
      const navbar = document.getElementById("navbar");
      if (this.scrollY >= 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
    window.addEventListener("scroll", scrollHeader);
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
    checkMaskValidity() {
      const inputElement = this.$refs.maskedInput;

      const inputValue = inputElement.value;

      const isValid = inputValue.length >= 19;

      inputElement.setCustomValidity(isValid ? '' : 'Заполните поле правильно.');
    },

    async onSubmit() {
      const formData = {
        type: this.type,
        price: this.price,
        full_name: this.full_name,
        number: this.number,
        message: this.message,
      };

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
    },
  },
};
</script>

<style scoped>
.wrap {
  padding: 32px 0;
  transition: 0.4s;
  z-index: 99;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
}

.wrap.scroll {
  background: white;
  -webkit-box-shadow: 0px 0px 26px -14px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 26px -14px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 26px -14px rgba(34, 60, 80, 0.2);
  padding: 16px 0;
}

.modal {
  display: none;
}

.modal.show {
  display: block;
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
  background: radial-gradient(1291.81% 268.77% at -13.41% -16.67%,
      #cef3fc 0%,
      #00a5ff 28.13%,
      #0053dc 64.06%,
      #0027dc 100%);
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
  line-height: 150%;
  /* 24px */
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.wrep {
  background: white;
  position: fixed;
  z-index: 100;
  top: 0;
  padding: 120px 0;
  height: 100vh;
  overflow: auto;
  width: 100%;
}

.x {
  position: absolute;
  top: 40px;
  right: 20%;
  cursor: pointer;
}

.title {
  color: var(--Black, #292929);
  font-family: var(--bold);
  font-size: 80px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  /* 96px */
  margin-bottom: 24px;
}

.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
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
  line-height: 150%;
  /* 27px */
  transition: 0.1s;
}

.type button.active,
.budget button.active {
  background: linear-gradient(105deg, #3c4bdc -9.99%, #7b7dff 109.77%);
  color: white;
  border-color: #3c4bdc;
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
  line-height: 140%;
  /* 33.6px */
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
  line-height: 150%;
  /* 27px */
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

.butn {
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
  line-height: 140%;
  /* 33.6px */
}

@media screen and (max-width: 1024px) {

  .telegram,
  .mail,
  .button span {
    display: none;
  }

  .button {
    width: 52px;
    height: 52px;
    padding: 16px;
  }

  .left img {
    width: 68px;
  }

  /* =========================================================================================================== */

  .title {
    margin-bottom: 8px;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%;
  }

  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .type {
    margin: 56px 0;
  }

  .top {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 32px;
  }

  .buttons {
    flex-direction: row !important;
    gap: 8px !important;
    margin: 0 !important;
  }

  .type button,
  .budget button {
    padding: 12px 24px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }

  .budget {
    margin-bottom: 56px;
  }

  .x {
    top: 24px;
    right: 24px;
  }

  .form input,
  .form textarea {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    padding: 12px 0;
  }

  .submit {
    width: 248px;
    height: 248px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
}
</style>
