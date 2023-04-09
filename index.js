const axios = require('axios');

class Client {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.otakuDesuBaseURL = 'https://web.api-kyouka.my.id/api/anime/otakudesu';
    this.igoDesuBaseURL = 'https://web.api-kyouka.my.id/api/nsfw/igodesu';
  }

  async otakusearch(query) {
    try {
      const response = await axios.get(`${this.otakuDesuBaseURL}/search?apikey=${this.apiKey}&query=${query}&result=${result}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search anime: ${error.message}`);
    }
  }

  async otakulatest() {
    try {
      const response = await axios.get(`${this.otakuDesuBaseURL}/latest?apikey=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get latest anime: ${error.message}`);
    }
  }

  async otakudownload(id) {
    try {
      const response = await axios.get(`${this.otakuDesuBaseURL}/downloadv2?apikey=${this.apiKey}&id=${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to download anime: ${error.message}`);
    }
  }
  
 async otakudownload(id) {
    try {
      const episodeUrl = id.replace('https://otakudesu.lol/episode/', '');
      const response = await axios.get(`${this.baseURL}/downloadv2?apikey=${this.apiKey}&id=${episodeUrl}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get episode download URL: ${error.message}`);
    }
  }
  
  async igodesulatest() {
    try {
      const response = await axios.get(`${this.igoDesuBaseURL}/latest?apikey=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get latest releases from IgoDesu: ${error.message}`);
    }
  }
  
  async igodesusearch(query) {
    try {
      const response = await axios.get(`${this.igoDesuBaseURL}/search?apikey=${this.apiKey}&query=${query}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search anime: ${error.message}`);
    }
  }
  
  async igodesudetail(url) {
    try {
      const response = await axios.get(`${this.igoDesuBaseURL}/detail?apikey=${this.apiKey}&url=${url}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search anime: ${error.message}`);
    }
  }
}

module.exports = Client;
