import {CLIENT_ID} from "../contstants";

interface IRequest {
  page: number;
  limit: number;
  topic?: string;
}

export const request = async ({ page, limit, topic }: IRequest) => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos/?query=${
      topic ? topic : 'wedding'
    }&client_id=${CLIENT_ID}&page=${page}&per_page=${limit}`,
  ).then((response) => response.json());
  return res;
};
