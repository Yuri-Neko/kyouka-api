const axios = require('axios').default;
const https = require('https');
const { Agent } = require('https');

class Client {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.otakuDesuBaseURL = 'https://web.api-kyouka.my.id/api/anime/otakudesu';
    this.igoDesuBaseURL = 'https://web.api-kyouka.my.id/api/nsfw/igodesu';
    this.hdhentaiBaseURL = 'https://web.api-kyouka.my.id/api/nsfw/hdhentai';

    // konfigurasi https agent untuk menonaktifkan validasi SSL
    this.agent = new https.Agent({
      rejectUnauthorized: false
    });
  }

  async otakusearch(query, result = 10) {
    try {
      const response = await axios.get(`${this.otakuDesuBaseURL}/search?apikey=${this.apiKey}&query=${query}&result=${result}`, {
        httpsAgent: this.agent // gunakan https agent yang telah dikonfigurasi
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search anime: ${error.message}`);
    }
  }

  async otakulatest() {
    try {
      const response = await axios.get(`${this.otakuDesuBaseURL}/latest?apikey=${this.apiKey}`, {
        httpsAgent: this.agent // gunakan https agent yang telah dikonfigurasi
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get latest anime: ${error.message}`);
    }
  }

  async otakudownload(id) {
    try {
      const episodeUrl = id.replace('https://otakudesu.lol/episode/', '');
      const response = await axios.get(`${this.baseURL}/downloadv2?apikey=${this.apiKey}&id=${episodeUrl}`, {
        httpsAgent: this.agent // gunakan https agent yang telah dikonfigurasi
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get episode download URL: ${error.message}`);
    }
  }

  async igodesulatest() {
    try {
      const response = await axios.get(`${this.igoDesuBaseURL}/latest?apikey=${this.apiKey}`, {
        httpsAgent: this.agent // gunakan https agent yang telah dikonfigurasi
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get latest releases from IgoDesu: ${error.message}`);
    }
  }

  async igodesusearch(query) {
    try {
      const response = await axios.get(`${this.igoDesuBaseURL}/search?apikey=${this.apiKey}&query=${query}`, {
        httpsAgent: this.agent // gunakan https agent yang telah dikonfigurasi
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to search bokep: ${error.message}`);
    }
  }
  
  async igodesudetail(url) {
  try {
    const response = await axios.get(`${this.igoDesuBaseURL}/detail?apikey=${this.apiKey}&url=${url}`, {
      httpsAgent: new https.Agent({rejectUnauthorized: false})
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to detail bokep: ${error.message}`);
  }
}

async hdhentailatest() {
  try {
    const response = await axios.get(`${this.hdhentaiBaseURL}/latest?apikey=${this.apiKey}`, {
      httpsAgent: new https.Agent({rejectUnauthorized: false})
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get latest releases from HdHentai: ${error.message}`);
  }
}

async hdhentaiseries() {
  try {
    const response = await axios.get(`${this.hdhentaiBaseURL}/list-series?apikey=${this.apiKey}`, {
      httpsAgent: new https.Agent({rejectUnauthorized: false})
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get series list from HdHentai: ${error.message}`);
  }
}

async hdhentaidetail(url) {
  try {
    const response = await axios.get(`${this.hdhentaiBaseURL}/detail?apikey=${this.apiKey}&url=${url}`, {
      httpsAgent: new https.Agent({rejectUnauthorized: false})
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get Detail hentai: ${error.message}`);
  }
}

async hdhentaiseriesdetail(url) {
  try {
    const response = await axios.get(`${this.hdhentaiBaseURL}/series/detail?apikey=${this.apiKey}&url=${url}`, {
      httpsAgent: new https.Agent({rejectUnauthorized: false})
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to get detail series hentai: ${error.message}`);
  }
}
}

module.exports = Client;
