import axios from 'axios';

const url = {
  summary: 'https://api.covid19api.com/summary',
};

export const fetchSummary = async () => {
  try {
    const res = await axios.get(url.summary);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
