## Progress

<details>
  <summary>Anime/comic</summary>
  
- [x] Doujindesu
  - [x] latest
  - [x] search
  - [x] detail
- [x] Otakudesu
  - [x] latest
  - [x] search
  - [x] detail
- [x] hdhentai
  - [x] search
  - [x] latest
  - [x] detail

</details>

<details>
  <summary> Nsfw</summary>

- [x] Bokepsin
  - [x] latest
  - [x] search
  - [x] detail
- [x] Igodesu
  - [x] latest
  - [x] search
  - [x] detail

</details>


## Usage

#### Installations.

Using GitHub version to test latest fix/update.

```bash
npm install github:Yuri-Neko/kyouka-api
```

### Notice.

Package name changed to `@kyouka-api`

## Example use CJS
```js
const OtakudesuAPI = require('@kyouka-api');

const apiKey = 'YOUR_API_KEY';
const api = new OtakudesuAPI(apiKey);

```
## Example use ESM
```js
import { OtakudesuAPI } from '@kyouka-api';

const apiKey = 'YOUR_API_KEY';
const api = new OtakudesuAPI(apiKey);

```

### Anime/comic.

#### Otakudesu.

```js
const query = 'One Piece'
const url = 'https://otakudesu.lol/anime/tonikaku-ni-kawaii-s2-sub-indo/'
const episode = 'https://otakudesu.lol/episode/tk-s2-episode-1-sub-indo/'
      
      
api.otakusearch(query)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

api.otakudetail(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

api.otakudownload(episode)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

api.otakulatest()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

```



### Nsfw

#### Bokepsin

```js
comming soon
```

### Note.

resgister apikey https://web.api-kyouka.my.id/
