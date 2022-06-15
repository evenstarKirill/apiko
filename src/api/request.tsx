interface IRequest {
  page: number;
  limit: number;
  topic?: string;
}

export const request = async ({ page, limit, topic }: IRequest) => {
  console.log('req');
  const res = await fetch(
    `https://api.unsplash.com/search/photos/?query=${
      topic ? topic : 'wedding'
    }&client_id=7l3lMYqWz4JJ2ZFyv4wkko1gGBtjTCPvToiI0g7FNAo&page=${page}&per_page=${limit}`,
  ).then((response) => response.json());
  return res;
};
