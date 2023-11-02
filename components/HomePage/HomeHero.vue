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
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";

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
    };
  },
};
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
