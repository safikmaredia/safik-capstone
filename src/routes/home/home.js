import Main from '../../components/main/main';

import clothes from '../../assets/2020-carters-thekit.webp';
import toys from '../../assets/61bGKsZeLlL.jpeg';
import access from '../../assets/1624707929.jpeg';
import food from '../../assets/ALDIs-Mamia-100-Organic-Baby-Food-Pouches-Review-A-Mum-Reviews.jpeg';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Clothes',
      imageUrl: clothes,
    },
    {
      id: 2,
      title: 'Toys',
      imageUrl: toys,
    },
    {
      id: 3,
      title: 'Accessories',
      imageUrl: access,
    },
    {
        id: 4,
        title: 'Food',
        imageUrl: food,
      },

  ];

  return <Main categories={categories} />;
};

export default Home;