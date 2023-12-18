<template>
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 col-xs-12 p-0">
          <h2 class="title">
            <span class="one">
              {{ $store.state.translations["main.title-1"] }}</span
            >
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
            <ICountUp
              class="num"
              :delay="delay"
              :endVal="endVal"
              :options="options"
            />
            <p class="sub">{{ $store.state.translations["main.sites"] }}</p>
          </div>

          <div class="cardo">
            <ICountUp
              class="num"
              :delay="delay"
              :endVal="endVal2"
              :options="options"
            />
            <p class="sub">{{ $store.state.translations["main.mobiles"] }}</p>
          </div>
        </div>
        <button @click="modalHandle = true" class="sender">
          Ariza yuborish
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1812_149)">
              <path
                d="M1.66602 18.3332L10.0554 9.94372M14.9237 9.71068C15.3402 9.71068 15.7377 9.52412 15.9816 9.18645C17.1931 7.50883 18.0157 5.53175 18.3171 3.38742C18.4585 2.3817 17.6169 1.54067 16.6112 1.68209C10.8711 2.48926 6.32962 7.03072 5.52246 12.7708C5.38104 13.7765 6.22206 14.6182 7.22778 14.4768C9.37211 14.1754 11.3492 13.3528 13.0268 12.1413C13.3645 11.8974 13.551 11.4999 13.551 11.0833C13.551 10.3252 14.1656 9.71068 14.9237 9.71068Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1812_149">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>

    <div class="wrep modal" :class="{ show: modalHandle == true }">
      <div class="x" @click="modalHandle = false">
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
              <button
                @click="type = 'web'"
                :class="{ active: type == 'web' }"
                type="button"
              >
                {{ $store.state.translations["main.type-1"] }}
              </button>
              <button
                @click="type = 'corp'"
                :class="{ active: type == 'corp' }"
                type="button"
              >
                {{ $store.state.translations["main.type-2"] }}
              </button>
              <button
                @click="type = 'crm'"
                :class="{ active: type == 'crm' }"
                type="button"
              >
                {{ $store.state.translations["main.type-3"] }}
              </button>
              <button
                @click="type = 'mobil'"
                :class="{ active: type == 'mobil' }"
                type="button"
              >
                {{ $store.state.translations["main.type-4"] }}
              </button>
              <button
                @click="type = 'lending'"
                :class="{ active: type == 'lending' }"
                type="button"
              >
                {{ $store.state.translations["main.type-5"] }}
              </button>
              <button
                @click="type = 'e-shop'"
                :class="{ active: type == 'e-shop' }"
                type="button"
              >
                {{ $store.state.translations["main.type-6"] }}
              </button>
            </div>
          </div>
          <div class="budget">
            <p class="top">
              {{ $store.state.translations["main.project-budget"] }}
            </p>
            <div class="items buttons">
              <button
                @click="price = 4000000"
                :class="{ active: price == 4000000 }"
                type="button"
              >
                {{ $store.state.translations["main.budget-1"] }}
              </button>
              <button
                @click="price = 12000000"
                :class="{ active: price == 12000000 }"
                type="button"
              >
                {{ $store.state.translations["main.budget-2"] }}
              </button>
              <button
                @click="price = 18000000"
                :class="{ active: price == 18000000 }"
                type="button"
              >
                {{ $store.state.translations["main.budget-3"] }}
              </button>
              <button
                @click="price = 20000000"
                :class="{ active: price == 20000000 }"
                type="button"
              >
                {{ $store.state.translations["main.budget-4"] }}
              </button>
              <button
                @click="price = 26000000"
                :class="{ active: price == 26000000 }"
                type="button"
              >
                {{ $store.state.translations["main.budget-5"] }}
              </button>
              <button
                @click="price = NaN"
                :class="{ active: price == NaN }"
                type="button"
              >
                {{ $store.state.translations["main.budget-6"] }}
              </button>
            </div>
          </div>
          <div class="form">
            <p class="top">
              {{ $store.state.translations["main.form-title"] }}
            </p>
            <div class="inputs">
              <input
                v-model="full_name"
                required
                type="text"
                :placeholder="$store.state.translations['main.your-name']"
              />
              <input
                v-mask="'+998 (##) ###-##-##'"
                v-model="number"
                required
                type="text"
                :placeholder="$store.state.translations['main.your-phone']"
              />
              <textarea
                v-model="message"
                :placeholder="$store.state.translations['main.your-comment']"
              ></textarea>
            </div>
          </div>
          <div class="butn">
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

      info: {},

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
}
</style>
