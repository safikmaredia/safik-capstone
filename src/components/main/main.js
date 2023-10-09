import BabyItems from '../baby-items/baby-items';

import './main.scss';

const Main = ({ categories }) => {
  return (
    <div className='main-container'>
      {categories.map((category) => (
        <BabyItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Main;