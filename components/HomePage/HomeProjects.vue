<template>
  <div class="wrap projekts">
    <div class="container">
      <h4 class="title">{{ $store.state.translations["main.projects"] }}</h4>
      <div class="items">
        <div data-aos="fade-up" :data-aos-duration="`${item.index * 5}`" class="item" v-for="item in projects"
          :key="item.id">
          <a target="_blank" :href="item.url">
            <img :src="item.image" :alt="item.title + ' by Mazmoon Group'" :title="item.title + ' by Mazmoon Group'"
              class="pic" width="100%" height="100%" loading="lazy" />
            <p class="name">
              {{ item.title }}
            </p>

            <button class="to">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.6563 5.34314C17.6563 4.79086 17.2086 4.34314 16.6563 4.34314L9.11387 4.34314C8.56159 4.34314 8.11387 4.79086 8.11387 5.34314C8.11387 5.89543 8.56159 6.34314 9.11387 6.34314L14.2421 6.34314L4.63553 15.9497C4.24501 16.3403 4.24501 16.9734 4.63553 17.364C5.02605 17.7545 5.65922 17.7545 6.04974 17.364L15.6563 7.75736L15.6563 12.8856C15.6563 13.4379 16.1041 13.8856 16.6563 13.8856C17.2086 13.8856 17.6563 13.4379 17.6563 12.8856L17.6563 5.34314Z"
                  fill="#5D5FEF" />
              </svg>
            </button>
          </a>
          <div class="cover" :style="`background: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${item.color})`"></div>
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

  props: ["projects"],

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
@import url(@/assets/css/modal.css);

.wrap {
  padding-bottom: 120px;
}

.title {
  margin-bottom: 40px;
  color: var(--Black, #292929);
  font-family: var(--bold);
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  /* 76.8px */
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

.item a {
  display: flex;
}

.cover {
  pointer-events: none;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  transition: 0.6s;
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
  line-height: 150%;
  /* 30px */
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 2;
}

.to {
  z-index: 9;
  border: none;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--White, #fff);
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.4s;
}

.item:hover .to {
  top: 50%;
}

@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 80px;
  }

  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    padding-top: 40px;
    margin-bottom: 32px;
  }

  .items {
    grid-template-columns: repeat(1, 1fr);
  }

  .item:nth-child(3n) {
    grid-column: initial;
  }

  .item {
    border-radius: 24px;
  }

  .pic {
    height: 280px;
  }

  .name {
    bottom: 24px;
    left: 24px;
  }
}
</style>
