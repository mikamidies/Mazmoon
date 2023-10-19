export default {
  async getProjects(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/projects", {});
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
