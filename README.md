## Progress

<details>
  <summary>Anime/comic</summary>
  
- [ ] Doujindesu
  - [ ] latest
  - [ ] search
  - [ ] detail
- [x] Otakudesu
  - [x] latest
  - [x] search
  - [x] detail

</details>

<details>
  <summary> Nsfw</summary>

- [ ] Bokepsin
  - [ ] latest
  - [ ] search
  - [ ] detail
- [x] Igodesu
  - [x] latest
  - [x] search
  - [x] detail
- [ ] hdhentai
  - [ ] search
  - [x] latest
  - [x] detail
  - [x] series list
  - [x] detail series

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
const api = new Client(apiKey);

```
## Example use ESM
```js
import { OtakudesuAPI } from '@kyouka-api';

const apiKey = 'YOUR_API_KEY';
const api = new Client(apiKey);

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

#### Igodesu

```js
const query = 'Colmek'
const url = 'https://igodesu.com/111488/jembut-memek-mulus-pink-mamah-muda-chindo-dulu-viral.html'
      
      
api.igodesusearch(query)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

api.igodesudetail(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

api.igodesulatest()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### HdHentai

```js
const series = 'https://hdhentai.com/serie/15-bishoujo-hyouryuuki/'
const url = 'https://hdhentai.com/hentai/15-bishoujo-hyouryuuki-episode-2/'

        
api.hdhentaiseriesdetail(series)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

api.hdhentaidetail(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

api.hdhentaiseries()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
api.hdhentailatest()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Note.

resgister apikey https://web.api-kyouka.my.id/
