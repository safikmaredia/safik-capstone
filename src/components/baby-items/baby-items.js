import './baby-items.scss';
import { Link } from 'react-router-dom';

const BabyItems = ({ category }) => {
  const { imageUrl} = category;
  return (
    <div className='item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='item-body-container'>
        <Link className='path' to='/shopping'> 
        Shop Now 
        </Link>
      </div>
    </div>
  );
};

export default BabyItems;
