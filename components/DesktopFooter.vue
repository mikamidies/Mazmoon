<template>
  <div class="wrap">
    <div class="container">
      <div class="cardo">
        <div class="left">
          <h4 class="title">
            <span>
              {{ $store.state.translations["main.form-title-1"] }}
            </span>
            {{ $store.state.translations["main.form-title-2"] }}
          </h4>
        </div>
        <div class="right">
          <button @click="modalHandle = true" class="big">
            <span class="logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M4 44L24.1346 23.8653M35.8184 23.306C36.818 23.306 37.7721 22.8583 38.3574 22.0479C41.265 18.0216 43.2392 13.2766 43.9626 8.13019C44.3019 5.71647 42.2821 3.698 39.8684 4.03741C26.0921 5.97461 15.1927 16.8741 13.2555 30.6504C12.916 33.0641 14.9345 35.084 17.3482 34.7447C22.4946 34.0212 27.2396 32.0471 31.2659 29.1394C32.0763 28.5542 32.524 27.6 32.524 26.6004C32.524 24.781 33.999 23.306 35.8184 23.306Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            {{ $store.state.translations["main.send-app"] }}
          </button>
          <p class="txt">{{ $store.state.translations["main.prepaid"] }}</p>
        </div>
      </div>
      <div class="bottom">
        <div class="items">
          <div class="item">
            <p class="sup">
              {{ $store.state.translations["main.our-address"] }}
            </p>
            <p class="sub">{{ info.adres }}</p>
          </div>
          <div class="item">
            <p class="sup">{{ $store.state.translations["main.our-phone"] }}</p>
            <p class="sub">{{ info.nbm }}</p>
          </div>
          <div class="item">
            <p class="sup">{{ $store.state.translations["main.our-email"] }}</p>
            <p class="sub">{{ info.email }}</p>
          </div>
        </div>
        <div class="socs">
          <div class="soc">
            <a :href="info.instagram" rel="”nofollow”">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.0007 4C9.82806 4 9.55539 4.0095 8.70205 4.04833C7.85037 4.08733 7.26903 4.22217 6.76036 4.42C6.23419 4.62433 5.78785 4.89767 5.34318 5.3425C4.89818 5.78717 4.62484 6.2335 4.41984 6.7595C4.2215 7.26833 4.0865 7.84983 4.04817 8.70117C4.01 9.5545 4 9.82733 4 12C4 14.1727 4.00967 14.4445 4.04833 15.2978C4.0875 16.1495 4.22234 16.7308 4.42 17.2395C4.62451 17.7657 4.89784 18.212 5.34268 18.6567C5.78719 19.1017 6.23352 19.3757 6.75936 19.58C7.26837 19.7778 7.84987 19.9127 8.70138 19.9517C9.55472 19.9905 9.82723 20 11.9998 20C14.1726 20 14.4444 19.9905 15.2978 19.9517C16.1495 19.9127 16.7315 19.7778 17.2405 19.58C17.7665 19.3757 18.2121 19.1017 18.6567 18.6567C19.1017 18.212 19.375 17.7657 19.58 17.2397C19.7767 16.7308 19.9117 16.1493 19.9517 15.298C19.99 14.4447 20 14.1727 20 12C20 9.82733 19.99 9.55467 19.9517 8.70133C19.9117 7.84967 19.7767 7.26833 19.58 6.75967C19.375 6.2335 19.1017 5.78717 18.6567 5.3425C18.2116 4.8975 17.7666 4.62417 17.24 4.42C16.73 4.22217 16.1483 4.08733 15.2966 4.04833C14.4433 4.0095 14.1716 4 11.9982 4H12.0007ZM11.2831 5.44167C11.4961 5.44133 11.7337 5.44167 12.0007 5.44167C14.1368 5.44167 14.3899 5.44933 15.2335 5.48767C16.0135 5.52333 16.4368 5.65367 16.7188 5.76317C17.0921 5.90817 17.3583 6.0815 17.6381 6.3615C17.9181 6.6415 18.0915 6.90817 18.2368 7.2815C18.3463 7.56317 18.4768 7.9865 18.5123 8.7665C18.5507 9.60983 18.559 9.86317 18.559 11.9982C18.559 14.1332 18.5507 14.3865 18.5123 15.2298C18.4767 16.0098 18.3463 16.4332 18.2368 16.7148C18.0918 17.0882 17.9181 17.354 17.6381 17.6338C17.3581 17.9138 17.0923 18.0872 16.7188 18.2322C16.4371 18.3422 16.0135 18.4722 15.2335 18.5078C14.3901 18.5462 14.1368 18.5545 12.0007 18.5545C9.86456 18.5545 9.61139 18.5462 8.76805 18.5078C7.98804 18.4718 7.5647 18.3415 7.28253 18.232C6.9092 18.087 6.64253 17.9137 6.36252 17.6337C6.08252 17.3537 5.90919 17.0877 5.76385 16.7142C5.65435 16.4325 5.52385 16.0092 5.48835 15.2292C5.45002 14.3858 5.44235 14.1325 5.44235 11.9962C5.44235 9.85983 5.45002 9.60783 5.48835 8.7645C5.52402 7.9845 5.65435 7.56117 5.76385 7.27917C5.90885 6.90583 6.08252 6.63917 6.36252 6.35917C6.64253 6.07917 6.9092 5.90583 7.28253 5.7605C7.56454 5.6505 7.98804 5.5205 8.76805 5.48467C9.50606 5.45133 9.79206 5.44133 11.2831 5.43967V5.44167ZM16.2711 6.77C15.7411 6.77 15.3111 7.1995 15.3111 7.72967C15.3111 8.25967 15.7411 8.68967 16.2711 8.68967C16.8011 8.68967 17.2311 8.25967 17.2311 7.72967C17.2311 7.19967 16.8011 6.77 16.2711 6.77ZM12.0007 7.89167C9.73189 7.89167 7.89237 9.73117 7.89237 12C7.89237 14.2688 9.73189 16.1075 12.0007 16.1075C14.2696 16.1075 16.1085 14.2688 16.1085 12C16.1085 9.73117 14.2695 7.89167 12.0007 7.89167ZM12.0007 9.33333C13.4734 9.33333 14.6674 10.5272 14.6674 12C14.6674 13.4727 13.4734 14.6667 12.0007 14.6667C10.5279 14.6667 9.33406 13.4727 9.33406 12C9.33406 10.5272 10.5279 9.33333 12.0007 9.33333Z"
                  fill="#353437" />
              </svg>
            </a>
          </div>
          <div class="stick"></div>
          <div class="soc">
            <a :href="info.youtube" rel="”nofollow”">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12.3988 18.4349L8.70588 18.3674C7.5102 18.3439 6.31154 18.3908 5.13931 18.147C3.35607 17.7827 3.22973 15.9965 3.09754 14.4982C2.91539 12.3918 2.98591 10.2471 3.32964 8.15831C3.52369 6.98626 4.28736 6.28688 5.46834 6.21078C9.45503 5.93458 13.4682 5.96731 17.4461 6.09617C17.8662 6.10798 18.2892 6.17255 18.7034 6.24604C20.7483 6.60447 20.7981 8.62865 20.9307 10.3326C21.0629 12.0542 21.007 13.7846 20.7544 15.4944C20.5517 16.9101 20.1638 18.0973 18.5271 18.2119C16.4764 18.3618 14.4728 18.4825 12.4164 18.444C12.4165 18.4349 12.4046 18.4349 12.3988 18.4349ZM10.2277 14.8508C11.7731 13.9635 13.289 13.091 14.8255 12.2096C13.2772 11.3224 11.7642 10.4499 10.2277 9.56851V14.8508Z"
                  fill="#353437" />
              </svg>
            </a>
          </div>
          <div class="stick"></div>
          <div class="soc">
            <a :href="info.telegram" rel="”nofollow”">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path
                  d="M1.90891 8.0952L17.2976 1.44458C18.0212 1.13183 18.8054 1.74041 18.682 2.51906L16.5779 15.795C16.448 16.6151 15.4331 16.9287 14.8631 16.325L11.5295 12.7699C10.8523 12.0526 10.7992 10.9488 11.4045 10.1698L13.7232 6.92966C13.8626 6.75029 13.6425 6.51431 13.4538 6.64086L8.60651 9.89269C7.78393 10.4445 6.78586 10.6715 5.80554 10.5297L2.16248 10.0028C1.16449 9.8585 0.98328 8.49523 1.90891 8.0952Z"
                  stroke="#28303F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div class="stick"></div>
          <div class="soc">
            <a :href="info.facebook" rel="”nofollow”">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                  stroke="#28303F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
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
              <input v-model="full_name" required type="text" :placeholder="$store.state.translations['main.your-name']"
                minlength="3" />
              <input v-mask="'+998 (##) ###-##-##'" v-model="number" required type="text"
                :placeholder="$store.state.translations['main.your-phone']" ref="maskedInput"
                @input="checkMaskValidity" />
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

  mounted() { },

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
.cardo {
  border-radius: 40px;
  background: var(--Black, #292929);
  padding: 64px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
}

.title {
  max-width: 700px;
  color: #5d5d5f;
  font-family: var(--bold);
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
  /* 62.4px */
}

.title span {
  color: white;
}

.big {
  border: none;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 310px;
  border-radius: 50%;
  background: linear-gradient(105deg, #3c4bdc -9.99%, #7b7dff 109.77%);
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--semi);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* 33.6px */
  margin-bottom: 24px;
}

.txt {
  color: var(--grey-64, #5d5d5f);
  text-align: center;
  font-family: var(--semi);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  /* 27px */
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.items {
  display: flex;
  align-items: center;
  gap: 100px;
}

.sup {
  color: var(--grey-40, #9a999b);
  margin-bottom: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 19.6px */
}

.sub {
  color: var(--Black, #292929);
  font-family: var(--semi);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  /* 27px */
}

.socs {
  display: flex;
  align-items: center;
  gap: 28px;
}

.stick {
  width: 1px;
  height: 24px;
  background: #ebebeb;
}

.modal {
  display: none;
}

.modal.show {
  display: block;
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

.tite {
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

.top {
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
  .title {
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 48px;
  }

  .cardo {
    flex-direction: column;
    padding: 24px;
    border-radius: 24px;
  }

  .bottom {
    flex-direction: column;
  }

  .items {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 32px;
  }

  .right {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .big {
    width: 248px;
    height: 248px;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }

  .txt {
    margin-bottom: 24px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }

  .item {
    text-align: center;
  }

  /* =========================================================================================================== */

  .tite {
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
