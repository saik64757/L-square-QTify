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

export const fetchApinewAlbums = async () => {
  try {
    let TopAlbums = await axios.get(`${BackendUrl}/albums/new`);
    return TopAlbums.data;
  } catch (error) {
    throw error;
  }
};

export const fetchgenres = async () => {
  try {
    let TopAlbums = await axios.get(`${BackendUrl}/genres`);
    return TopAlbums.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllsongs = async () => {
  try {
    let TopAlbums = await axios.get(`${BackendUrl}/songs`);
    return TopAlbums.data;
  } catch (error) {
    throw error;
  }
};
