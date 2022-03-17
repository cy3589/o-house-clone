import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// const API_URL = 'https://ohou.se';
const StoreJson = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const { data } = await axios.get(
        'https://ohou.se/store.json?v=5&wedding=true',
      );
      res.status(201).json(data);
    } catch (error) {
      if (axios.isAxiosError(error)) console.error(error.response?.data);
      res.status(500).send('에러발생');
    }
  } else res.status(401).send('잘못된 접근');
};

export default StoreJson;
