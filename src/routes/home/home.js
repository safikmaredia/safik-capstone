import { Outlet } from 'react-router-dom';
import Main from '../../components/main/main';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Clothes',
      imageUrl: '',
    },
    {
      id: 2,
      title: 'Toys',
      imageUrl: '',
    },
    {
      id: 3,
      title: 'Accessories',
      imageUrl: '',
    },
    {
      id: 4,
      title: 'Food',
      imageUrl: '',
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
