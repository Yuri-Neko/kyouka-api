const axios = require('axios');

class OtakudesuAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://web.api-kyouka.my.id/api/anime/otakudesu';
  }

  async otakusearch(query) {
    try {
      const response = await axios.get(`${this.baseURL}/detail?apikey=${this.apiKey}&query=${query}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search anime: ${error.message}`);
    }
  }
  async otakudetail(url) {
    try {
      const response = await axios.get(`${this.baseURL}/detail?apikey=${this.apiKey}&url=${url}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search anime: ${error.message}`);
    }
  }
  async otakudownload(url) {
    try {
      const episodeUrl = url.replace('https://otakudesu.lol/episode/', '');
      const response = await axios.get(`${this.baseURL}/downloadv2?apikey=${this.apiKey}&id=${episodeUrl}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get episode download URL: ${error.message}`);
    }
  }
}
  async otakulatest() {
    try {
      const response = await axios.get(`${this.baseURL}/latest?apikey=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get latest anime: ${error.message}`);
    }
  }
}



module.exports = OtakudesuAPI;
