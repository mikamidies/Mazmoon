export default {
  async getVacansies(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/vacansies", {});
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
