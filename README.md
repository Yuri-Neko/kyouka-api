npm i github:Yuri-Neko/kyouka-api



const OtakudesuAPI = require('@kyouka-api');

const apiKey = 'YOUR_API_KEY';  [ REGISTER  https://web.api-kyouka.my.id/ ]
const api = new OtakudesuAPI(apiKey);

const query = 'One Piece';
const result = 5;

api.searchAnime(query, result)
  .then((data) => {
    console.log(data);
    return api.getLatestAnime();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
