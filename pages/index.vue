<template>
  <div class="master">
    <DesktopHeader />
    <HomeHero />
    <HomeProjects :projects="projects" />
    <HomeCEO />
    <HomeStaff :staff="staff" />
    <HomeVacancies :vacansies="vacansies" />
    <HomeReviews :reviews="reviews" />
    <HomePartners />
    <!-- <HomePartnersVariant /> -->
    <DesktopFooter />
  </div>
</template>

<script>
import projectsApi from "@/api/projects";
import vacansiesApi from "@/api/vacansies";
import staffApi from "@/api/staff";
import reviewsApi from "@/api/reviews";

export default {
  async asyncData({ $axios }) {
    const projects = await projectsApi.getProjects($axios);
    const vacansies = await vacansiesApi.getVacansies($axios);
    const staff = await staffApi.getStaff($axios);
    const reviews = await reviewsApi.getReviews($axios);

    return {
      projects,
      vacansies,
      staff,
      reviews,
    };
  },
};
</script>
