import axios from 'axios';

// NewsAPI key
const apiKey = 'e12cd7e7ac9f41099f90cac230307feb';

const api = axios.create({
  baseURL: 'http://newsapi.org/v2',
  timeout: 2000,
});
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['apiKey'] = apiKey;
  return config;
});

// Translate Story Function: Translate NewsAPI fetched data to Story type
interface Source {
  id: string;
  name: string;
}

interface NewsAPIStory {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

export const translateStory = (story: NewsAPIStory) => {
  return {
    id: story.publishedAt,
    title: story.title,
    description: story.description,
    author: story.author,
    image: story.urlToImage,
    url: story.url,
    publishedAt: story.publishedAt,
    content: story.content,
    source: story.source.name,
  };
};

// The Guardian API

interface TheGuardianStory {
  id: string;
  webTitle: string;
  fields: {
    headline: string;
    thumbnail: string;
    shortUrl: string;
    body: string;
  };
  webPublicationDate: string;
}

const TGuardianApiKey = '73d94c30-f8a6-43f4-a123-007136ff79e4';
export const apiTGuardian = axios.create({
  baseURL: 'https://content.guardianapis.com',
});

apiTGuardian.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api-key'] = TGuardianApiKey;
  config.params['pageSize'] = 3;
  config.params['show-fields'] = 'body,headline,short-url,thumbnail';
  return config;
});

export const fetchTGuardian = (q: string = '') => {
  console.log('tGuardian: ', q);
  return apiTGuardian
    .get('/search', {
      params: {
        q,
        'page-size': 4,
      },
    })
    .then(
      ({
        data: {
          response: { results },
        },
      }) => {
        console.log(results);
        return results;
      }
    )
    .catch((err) => []);
};

export const tGuardianToStory = (story: TheGuardianStory) => {
  return {
    id: story.id,
    title: story.webTitle,
    description: story.fields.headline,
    author: '',
    image: story.fields.thumbnail,
    url: story.fields.shortUrl,
    publishedAt: story.webPublicationDate,
    content: story.fields.body,
    source: 'The Guardian',
  };
};

// The NYT API
const NYTApiKey = '2C2ciJRC63dqbHHWl2l9jKXCKhu0uMHT';
export const apiNYT = axios.create({
  baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
});

apiNYT.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api-key'] = NYTApiKey;
  return config;
});

export const fetchNYT = (q: string = '') => {
  console.log('NYT: ', q);
  return apiNYT
    .get('', {
      params: {
        q,
      },
    })
    .then(
      ({
        data: {
          response: { docs },
        },
      }) => {
        return docs;
      }
    )
    .catch((err) => []);
};

interface MediaObj {
  url: string;
}

export interface NYTStory {
  _id: string;
  abstract: string;
  headline: {
    name: string;
    main: string;
  };
  byline: {
    original: string;
  };
  lead_paragraph: string;
  multimedia: MediaObj[];
  web_url: string;
  pub_date: string;
  snippet: string;
  source: string;
}

export const NytToStory = (story: NYTStory) => {
  return {
    id: story._id,
    title: story.headline.main,
    description: story.snippet,
    author: story.byline.original,
    image:
      story.multimedia.length > 0
        ? `https://www.nytimes.com/${story.multimedia[0].url}`
        : '',
    url: story.web_url,
    publishedAt: story.pub_date,
    content: story.headline.name,
    source: story.source,
  };
};

// NewsAPI as default datasource
export default api;
