import React, { useContext, useEffect, Fragment } from 'react';
import PersonItem from './PersonItem';
import PeopleContext from '../../context/people/peopleContext';
import Spinner from '../layout/Spinner';

import ImgMyNeighborTotoro from '../../img/big-totoro-e1538413562225.jpeg';
// import ImgCastleInTheSky from '../../img/castle-in-the-sky-ss3.jpg';
// import ImgGraveOfTheFireflies from '../../img/grave-of-the-fireflies-studio-ghibli.jpg';
// import ImgKikisDeliveryService from '../../img/kikis-delivery-service-jiji-1011128.png';
// import ImgOnlyYesterday from '../../img/only_yesterday.jpg';
// import ImgPorcoRosso from '../../img/porco_rosso.jpeg';
// import ImgPomPoko from '../../img/Pom-Poko-featured-image-1280x720.jpg';
// import ImgWhisperOfTheHeart from '../../img/whisperoftheheart-1024x576.jpg';
// import ImgPrincessMononoke from '../../img/Princess_Mononoke.jpg';
// import ImgMyNeighborsTheYamadas from '../../img/My_neighbors_the_yamadas.jpeg';
// import ImgSpiritedAway from '../../img/spirited_away.jpeg';
// import ImgTheCatReturns from '../../img/the-cat-returns-ss1.jpg';
// import ImgHowlsMovingCastle from '../../img/Howls.Moving.Castle.full.151358_t800.jpg';
// import ImgTalesFromEarthsea from '../../img/earthsea-dragon-ghibli.png';
// import ImgPonyo from '../../img/Ponyo.jpg';
// import ImgArrietty from '../../img/Arrietty.jpg';
// import ImgFromUpOnPoppyHill from '../../img/From_Up_The_Poppy_Hill.webp';
// import ImgTheWindRises from '../../img/The_Wind_Rises.jpg';
// import ImgTheTaleOfThePrincessKaguya from '../../img/Tale-of-the-Princess-Kaguya-616x333.jpg';
// import ImgWhenMarnieWasThere from '../../img/When_Marnie_Was_There.jpg';

const People = ({filmUrl}) => {
  const peopleContext = useContext(PeopleContext);
  const { getPeople, loading, people} = peopleContext;

  useEffect(() => {
    getPeople();;
    // eslint-disable-next-line
  }, []);

  if(loading) {
    return <Spinner />
  } else {
    return (
      <div className="card-grid-system">
        {people.map(person => filmUrl == person.films[0] && 
            <PersonItem person={person} key={person.id}></PersonItem> 
        )}
      </div>
    );
  }
}
/*
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}
*/
export default People;
