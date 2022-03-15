import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = 'https://ohou.se';
const InfiniteLoadFunctionAPI = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if (req.method === 'POST') {
    const { page, route, secondRoute } = req.body;
    try {
      const { data } = await axios.get(
        `${API_URL}/${route}/${secondRoute}.json?page=${page}?per=24`,
        { withCredentials: true },
      );
      console.log(page, '데이터 페칭 완료');
      res.status(200).json(data);
    } catch (error) {
      if (axios.isAxiosError(error)) console.error(error.response?.data);
      res.status(500).send('에러발생');
    }
  } else res.status(401).send('잘못된 접근');
};

export default InfiniteLoadFunctionAPI;
