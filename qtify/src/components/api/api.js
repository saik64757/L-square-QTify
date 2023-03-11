// https://qtify-backend-labs.crio.do/albums/top

// https://qtify-backend-labs.crio.do/albums/new

import axios from "axios";

const BackendUrl = "https://qtify-backend-labs.crio.do";

export const fetchApitoAlbums = async () => {
  try {
    let TopAlbums = await axios.get(`${BackendUrl}/albums/top`);
    return TopAlbums.data;
  } catch (error) {
    throw error;
  }
};
