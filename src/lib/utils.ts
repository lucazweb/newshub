export const truncateString = (str: string, maxChars: number = 70) => {
  if (str.length > maxChars) {
    const short = str.substring(0, maxChars);
    return `${short}..`;
  }
  return str;
};

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
