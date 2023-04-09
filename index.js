const axios = require('axios');

class OtakudesuAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://web.api-kyouka.my.id/api/anime/otakudesu';
  }

  async searchAnime(query, result) {
    try {
      const response = await axios.get(`${this.baseURL}/search?apikey=${this.apiKey}&query=${query}&result=${result}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search anime: ${error.message}`);
    }
  }

  async getLatestAnime() {
    try {
      const response = await axios.get(`${this.baseURL}/latest?apikey=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get latest anime: ${error.message}`);
    }
  }
}

module.exports = OtakudesuAPI;
