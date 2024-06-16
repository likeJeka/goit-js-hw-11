const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api/';
const API_KEY = '44411591-028a91b939914bc74d09bbb4e';

export function getImages(query, page = 1, perPage = 20) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });

  const url = `${BASE_URL}${END_POINT}?${params.toString()}`;

  return fetch(url).then(res => res.json());
}
