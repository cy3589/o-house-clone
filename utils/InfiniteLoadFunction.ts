import axios from 'axios';

interface InfiniteLoadFunctionProps {
  page?: number;
  route?: string;
  secondRoute?: string;
}
const InfiniteLoadFunction = async ({
  page = 1,
  route = 'store',
  secondRoute = 'category',
}: InfiniteLoadFunctionProps) => {
  const { data } = await axios.post('/api/InfiniteLoadFunctionAPI', {
    page,
    route,
    secondRoute,
  });
  return data.selected_products;
};
export default InfiniteLoadFunction;
