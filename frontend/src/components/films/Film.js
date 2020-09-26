import React, {Fragment, useEffect, useContext} from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import People from '../People/People';
import Locations from '../locations/Locations';
import FilmsContext from '../../context/films/filmsContext';
import ImgMyNeighborTotoro from '../../img/big-totoro-e1538413562225.jpeg';
import ImgCastleInTheSky from '../../img/castle-in-the-sky-ss3.jpg';
import ImgGraveOfTheFireflies from '../../img/grave-of-the-fireflies-studio-ghibli.jpg';
import ImgKikisDeliveryService from '../../img/kikis-delivery-service-jiji-1011128.png';
import ImgOnlyYesterday from '../../img/only_yesterday.jpg';
import ImgPorcoRosso from '../../img/porco_rosso.jpeg';
import ImgPomPoko from '../../img/Pom-Poko-featured-image-1280x720.jpg';
import ImgWhisperOfTheHeart from '../../img/whisperoftheheart-1024x576.jpg';
import ImgPrincessMononoke from '../../img/Princess_Mononoke.jpg';
import ImgMyNeighborsTheYamadas from '../../img/My_neighbors_the_yamadas.jpeg';
import ImgSpiritedAway from '../../img/spirited_away.jpeg';
import ImgTheCatReturns from '../../img/the-cat-returns-ss1.jpg';
import ImgHowlsMovingCastle from '../../img/Howls.Moving.Castle.full.151358_t800.jpg';
import ImgTalesFromEarthsea from '../../img/earthsea-dragon-ghibli.png';
import ImgPonyo from '../../img/Ponyo.jpg';
import ImgArrietty from '../../img/Arrietty.jpg';
import ImgFromUpOnPoppyHill from '../../img/From_Up_The_Poppy_Hill.webp';
import ImgTheWindRises from '../../img/The_Wind_Rises.jpg';
import ImgTheTaleOfThePrincessKaguya from '../../img/Tale-of-the-Princess-Kaguya-616x333.jpg';
import ImgWhenMarnieWasThere from '../../img/When_Marnie_Was_There.jpg';

const Film = ({match}) => {

  const filmsContext = useContext(FilmsContext);
  const { getFilm, loading, film } = filmsContext;

  const { title, description, director, producer, release_date, rt_score, url} = film;

  useEffect(() => {
    getFilm(match.params.id);
    // eslint-disable-next-line
  }, []);

  let image = null;

  switch(title) {
    case 'Castle in the Sky':
      image = ImgCastleInTheSky;
      break;
    case 'Grave of the Fireflies':
      image = ImgGraveOfTheFireflies;
      break;
    case 'My Neighbor Totoro':
      image = ImgMyNeighborTotoro;
      break;
    case 'Kiki\'s Delivery Service':
      image = ImgKikisDeliveryService;
      break;
    case 'Only Yesterday':
      image = ImgOnlyYesterday;
      break;
    case 'Porco Rosso':
      image = ImgPorcoRosso;
      break;
    case 'Pom Poko':
      image = ImgPomPoko;
      break;
    case 'Whisper of the Heart':
      image = ImgWhisperOfTheHeart;
      break;
    case 'Princess Mononoke':
      image = ImgPrincessMononoke;
      break;
    case 'My Neighbors the Yamadas':
      image = ImgMyNeighborsTheYamadas;
      break;
    case 'Spirited Away':
      image = ImgSpiritedAway;
      break;
    case 'The Cat Returns':
      image = ImgTheCatReturns;
      break;
    case 'Howl\'s Moving Castle':
      image = ImgHowlsMovingCastle;
      break;
    case 'Tales from Earthsea':
      image = ImgTalesFromEarthsea;
      break;
    case 'Ponyo':
      image = ImgPonyo;
      break;
    case 'Arrietty':
      image = ImgArrietty;
      break;
    case 'From Up on Poppy Hill':
      image = ImgFromUpOnPoppyHill;
      break;
    case 'The Wind Rises':
      image = ImgTheWindRises;
      break;
    case 'The Tale of the Princess Kaguya':
      image = ImgTheTaleOfThePrincessKaguya;
      break;
    case 'When Marnie Was There':
      image = ImgWhenMarnieWasThere;
      break;
    default:
      image = null;
  }   


  if(loading){
    return <Spinner />
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Home
        </Link>
        <div className="card grid-2">
          <div className="all-center">
            <img src={image} alt="" style={{width: '275px'}} />
            <h1>{title}</h1>
            <p className="text-left">Description: {description}</p>
          </div>
          <div className="text-right">
            {release_date && (<Fragment>
              <h3>Release Date: {release_date}</h3>
            </Fragment>)}
              <a href="#" className="btn btn-dark my-1">Visit Studio Ghibli Site</a>
              <ul>
                <li>
                  {director && <Fragment>
                    <strong>Director: </strong> {director}
                  </Fragment>}
                </li>
                <li>
                  {producer && <Fragment>
                    <strong>Producer: </strong> {producer}
                  </Fragment>}
                </li>
                <li>
                  {rt_score && <Fragment>
                    <strong>Tomato Score: </strong> {rt_score}
                  </Fragment>}
                </li>
              </ul>
          </div>
        </div>
        <People filmUrl={url}/>
        <Locations filmUrl={url}/>           
      </Fragment>
    )
  }
}

export default Film;

// {people.map(person => (
//   <PersonItem person={person} key={person.id}></PersonItem>
// ))}