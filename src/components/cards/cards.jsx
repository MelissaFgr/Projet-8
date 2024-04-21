import React from 'react';
import { Link } from 'react-router-dom';
import './cards.scss';

const Card = ({ title, content, url, cover }) => (
  <div>
    <Link to={`${url}`} target='_blank' rel="noopener noreferrer" className='card' style={{ backgroundImage: `url(${cover})`, backgroundSize: 'cover', backgroundPosition: 'start', backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>
      <span>{title}</span>
    </Link>
    <h3 className='card_title'>{title}</h3>
    <p className='card_content'>{content}</p>
  </div>

);

export default Card;