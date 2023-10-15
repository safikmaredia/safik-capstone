import { Outlet } from 'react-router-dom';
import Main from '../../components/main/main';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Baby products',
      imageUrl: 'https://images.ctfassets.net/6m9bd13t776q/3czIt6nnHnRQhdkyu4QGfI/4cbbc99368b58134e212df7d4009e0a2/newborn_clothes_HERO.webp?q=90'
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
