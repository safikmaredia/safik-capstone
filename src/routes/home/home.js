import { Outlet } from 'react-router-dom';
import Main from '../../components/main/main';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Clothes',
      imageUrl: 'https://www.gannett-cdn.com/presto/2020/06/29/USAT/7005a093-7835-419c-9674-1f8be405c673-19-circus-set.png?width=660&height=372&fit=crop&format=pjpg&auto=webp',
    },
    {
      id: 2,
      title: 'Toys',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71-eLALDzSL._SL1000_.jpg',
    },
    {
      id: 3,
      title: 'Accessories',
      imageUrl: '',
    },
    {
      id: 4,
      title: 'Food',
      imageUrl: 'https://www.parents.com/thmb/_uQXCahTsmFTEUggZLFr-nwgblQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Happy-Baby-Organic-Stage-2-Baby-Food-Simple-Combos-fab68731dcae4ea0ba7f2f2e47192234.jpg',
    },
  ];

  return (
    <div>
      <Main categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;






