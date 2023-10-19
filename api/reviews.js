export default {
  async getReviews(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/reviews", {});
      }
      return res.data.results;
    } catch (e) {
      console.log(e);
    }
  },
};
