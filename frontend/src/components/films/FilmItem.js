import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const FilmItem = ({film: { id, title, description, release_date }, images}) => {       //destructuring props.user

  let image = null;

  switch(title) {
    case 'Castle in the Sky':
      image = images[0];
      break;
    case 'Grave of the Fireflies':
      image = images[1];
      break;
    case 'My Neighbor Totoro':
      image = images[2];
      break;
    case 'Kiki\'s Delivery Service':
      image = images[3];
      break;
    case 'Only Yesterday':
      image = images[4];
      break;
    case 'Porco Rosso':
      image = images[5];
      break;
    case 'Pom Poko':
      image = images[6];
      break;
    case 'Whisper of the Heart':
      image = images[7];
      break;
    case 'Princess Mononoke':
      image = images[8];
      break;
    case 'My Neighbors the Yamadas':
      image = images[9];
      break;
    case 'Spirited Away':
      image = images[10];
      break;
    case 'The Cat Returns':
      image = images[11];
      break;
    case 'Howl\'s Moving Castle':
      image = images[12];
      break;
    case 'Tales from Earthsea':
      image = images[13];
      break;
    case 'Ponyo':
      image = images[14];
      break;
    case 'Arrietty':
      image = images[15];
      break;
    case 'From Up on Poppy Hill':
      image = images[16];
      break;
    case 'The Wind Rises':
      image = images[17];
      break;
    case 'The Tale of the Princess Kaguya':
      image = images[18];
      break;
    case 'When Marnie Was There':
      image = images[19];
      break;
    default:
      image = null;
  }    
    
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="text-center">
        <h3>{title}</h3>
        <h4>{release_date}</h4>
      </div>
      <div className="mt-1">
        <p>{description.length < 199 ? description : description.substring(0, 199).concat(" ", "...")}</p>
      </div>
      <div className="text-center">
        <Link to={`/films/${id}`} className="btn btn-dark btn-sm my-1">Read More</Link>
      </div>
    </div>
  )
}

FilmItem.propTypes = {
  film: PropTypes.object.isRequired
}


export default FilmItem;

//className="round-img" style={{ width: '60px', height: '60px' }}

