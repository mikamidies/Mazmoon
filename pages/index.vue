<template>
  <div class="master">
    <DesktopHeader />
    <HomeHero :info="info" />
    <HomeAbout />
    <HomeProjects :projects="projects" />
    <HomeWhy :info="info" />
    <HomeCEO />
    <HomeStaff :staff="staff" />
    <HomeVacancies :vacansies="vacansies" />
    <!-- <HomeReviews :reviews="reviews" /> -->
    <HomeOffer />
    <HomePartners />
    <!-- <HomePartnersVariant /> -->
    <DesktopFooter />

    <button @click="scrollToTop()" class="up">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
      >
        <path
          d="M9 9L13 5M13 5L9 1M13 5L1 5"
          stroke="#28303F"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import projectsApi from "@/api/projects";
import vacansiesApi from "@/api/vacansies";
import staffApi from "@/api/staff";
import reviewsApi from "@/api/reviews";
import infoApi from "@/api/info";
import translationsApi from "@/api/translations";

export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.info?.description.replace(/(<([^>]+)>)/gi, ""),
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.info?.description.replace(/(<([^>]+)>)/gi, ""),
        },
        { hid: "og:title", property: "og:title", content: this.title },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://mazmoon.uz",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.info?.description.replace(/(<([^>]+)>)/gi, ""),
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.info?.logo_first,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://mazmoon.uz",
        },
      ],
    };
  },

  data() {
    return {};
  },

  async asyncData({ $axios, store }) {
    const projects = await projectsApi.getProjects($axios);
    const vacansies = await vacansiesApi.getVacansies($axios);
    const staff = await staffApi.getStaff($axios);
    const reviews = await reviewsApi.getReviews($axios);
    const info = await infoApi.getInfo($axios);
    const translations = await translationsApi.getTranslations($axios);

    await store.commit("getTranslations", translations?.data);

    return {
      projects,
      vacansies,
      staff,
      reviews,
      info,
    };
  },

  mounted() {
    function scrollUp() {
      const navbar = document.querySelector(".up");
      if (this.scrollY >= 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
    window.addEventListener("scroll", scrollUp);
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.up {
  position: fixed;
  bottom: 100px;
  right: 26px;
  border: 0;
  border-radius: 50%;
  background: linear-gradient(105deg, #3c4bdc -9.99%, #7b7dff 109.77%);
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 999;
}
.up svg {
  transform: rotate(-90deg);
}
.up path {
  stroke: white;
}
.up.scroll {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
}
</style>
