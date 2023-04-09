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

## Example use


### Anime/comic.

#### Otakudesu.

```js
const OtakudesuAPI = require('@kyouka-api');

const apiKey = 'YOUR_API_KEY';
const api = new OtakudesuAPI(apiKey);

const query = 'One Piece';

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
