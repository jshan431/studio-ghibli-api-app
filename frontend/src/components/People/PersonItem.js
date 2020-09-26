import React from 'react';
import PropTypes from 'prop-types';

const PersonItem = ({person: { id, name, gender, age, eye_color, hair_color, films }}) => {       //destructuring props.user

  let image = null;

  switch(name) {
    case 'Pazu':
      image = 'https://vignette.wikia.nocookie.net/divided-destiny/images/0/02/Pazu-13509.jpg/revision/latest?cb=20200623001342';
      break;
    case 'Lusheeta Toel Ul Laputa':
      image = 'https://vignette.wikia.nocookie.net/p__/images/1/19/Princess_Sheeta.png/revision/latest/top-crop/width/360/height/450?cb=20190926071955&path-prefix=protagonist';
      break;
    case 'Dola':
      image = 'https://pm1.narvii.com/6521/134055b502652fa3140806d218682a1720a4b366_hq.jpg';
      break;
    case 'Uncle Pom':
      image = 'https://www.onlineghibli.com/laputa/newimages/UnclePomme.jpg';
      break;
    case 'General Muoro':
      image = 'https://lh3.googleusercontent.com/proxy/Le9et1QJftqHWQS72ZUReNn_7FNadBtt2WZ4DJ7BMrfyhqGmPqk9qLQDaO7MmxLGuXeXt04F5AtbEBxeieSNVTji6OdluP67eQkMCoWfNMC5q-PiZ2o_U6VlzTbn4JLbiFE';
      break;
    case 'Duffi':
      image = 'https://feelinganimatedblog.files.wordpress.com/2019/11/mr-duffi-close-up-outside-home.jpg?w=525';
      break; 
    case 'Louis':
      image = 'https://cdn.myanimelist.net/images/characters/15/327932.jpg';
      break; 
    case 'Henri':
      image = 'https://www.anime-planet.com/images/characters/henri-19053.jpg';
      break;   
    case 'Charles':
      image = 'https://www.onlineghibli.com/laputa/newimages/Charles.jpg';
      break;
    case 'Motro':
      image = 'https://static.wikia.nocookie.net/dubbing9585/images/c/c6/Dolas-Engineer.jpg/revision/latest/scale-to-width-down/340?cb=20171128033502';
      break;
    case 'Okami':
      image = 'https://lh3.googleusercontent.com/proxy/75aWaACW17qwGT4YnmxF86xPpMt6SsIvhKvTrCrrCYO6NUCxoZjHtAZsHnEejq1Xgjlg60OwuFzBE0qGyVnZF6TfDWGH7Ya0skNR4w3jj_zz0ZF5iQO-ebmzOnpoGqloy8sp-SJipcvbK2Mi_1vSZ7wHFS_yym8t44jn_fF2hTfohrnI';
      break; 
    case 'Colonel Muska':
      image = 'https://vignette.wikia.nocookie.net/villains/images/4/44/Muska2.jpg/revision/latest?cb=20110408213525';
      break;
    case 'Satsuki Kusakabe':
      image = 'https://www.anime-planet.com/images/characters/satsuki-kusokabe-2138.jpg?t=1559033412';
      break;
    case 'Mei Kusakabe':
      image = 'https://cdn.myanimelist.net/images/characters/4/278460.jpg';
      break; 
    case 'Tatsuo Kusakabe':
      image = 'https://pm1.narvii.com/6864/c73cfe4913ac919b7604713891ab8438d5780742r1-1920-1080v2_hq.jpg';
      break; 
    case 'Yasuko Kusakabe':
      image = 'https://cdn.myanimelist.net/images/characters/8/63838.jpg';
      break;   
    case 'Granny':
      image = 'https://userscontent2.emaze.com/images/ee5e3eb5-b7ea-486e-9785-a680e729d4eb/633f7f504e2088b100862a854f739062.jpg';
      break;
    case 'Kanta Ogaki':
      image = 'https://api.personality-database.com/profile_images/94625.png?credit_id=41909';
      break;
    case 'Totoro':
      image = 'https://vignette.wikia.nocookie.net/disney/images/5/53/Totoro.jpg/revision/latest/top-crop/width/360/height/450?cb=20120111023322';
      break;
    case 'Chu Totoro':
      image = 'https://s.ecrater.com/stores/8570/5b5fd588840d6_8570n.jpg';
      break;
    case 'Chibi Totoro':
      image = 'https://cdn.shopify.com/s/files/1/0185/4636/products/Chibi_Totoro_2000x.png?v=1571607580';
      break; 
    case 'Catbus':
      image = 'https://www.johnnytimes.com/wp-content/uploads/2016/11/totoro-catbus-nekobasu.jpg';
      break;
    case 'Jiji':
      image = 'https://d310a9hpolx59w.cloudfront.net/product_photos/64947561/file_78bdec5ccf_original.jpg';
      break;
    case 'Porco Rosso':
      image = 'https://cdn.vox-cdn.com/thumbor/Ewo6PKQSzJshpFhv5U_kwrCkXb0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20009856/Porco_Rosso_963064296_large.jpg';
      break;
    case 'Baron Humbert von Gikkingen':
      image = 'https://www.anime-planet.com/images/characters/baron-humbert-von-gikkingen-2247.jpg?t=1588709286';
      break;  
    case 'Ashitaka':
      image = 'https://vignette.wikia.nocookie.net/disney/images/4/49/Ashitaka.jpg/revision/latest/top-crop/width/360/height/450?cb=20140421213740';
      break;  
    case 'San':
      image = 'https://vignette.wikia.nocookie.net/disney/images/3/3f/San.jpg/revision/latest?cb=20130927175850';
      break; 
    case 'Eboshi':
      image = 'https://vignette.wikia.nocookie.net/villains/images/5/53/Eboshi.jpg/revision/latest/top-crop/width/720/height/900?cb=20120508172152';
      break;
    case 'Jigo':
      image = 'https://ekostoriesdotcom.files.wordpress.com/2012/06/mononoke-jigo.jpg?w=550&h=324';
      break;
    case 'Kohroku':
      image = 'https://lh3.googleusercontent.com/proxy/p68Vezddpp-JCV7PywwpLth6m-uA_tL10JBzlR07LxEqtim_Rxg5Tnx35F8GTV3yXnT_zdH5_sorWiKk4VFbYD-tLC6merPER2ZoWZSHL6_yV2FTW64d8OwBR0huqE54Y2UyaA';
      break;
    case 'Gonza':
      image = 'https://www.animecharactersdatabase.com/uploads/chars/thumbs/200/5688-2082147945.jpg';
      break;  
    case 'Hii-sama':
      image = 'https://cdn.myanimelist.net/s/common/uploaded_files/1446015539-27033736a4037bd93e71c28f5b5ce7ee.png';
      break;
    case 'Yakul':
      image = 'https://i.redd.it/0quic56tgco31.png';
      break;
    case 'Moro':
      image = 'https://i.pinimg.com/originals/ac/30/cb/ac30cb988d7d24146fbd3d6a1a2e8a79.jpg';
      break; 
    case 'Renaldo Moon aka Moon aka Muta':
      image = 'https://www.anime-planet.com/images/characters/muta-2248.jpg';
      break;
    case 'Cat King':
      image = 'https://i.pinimg.com/564x/77/09/b4/7709b4fa204737228fde330f0c8cb9bc.jpg';
      break;
    case 'Yuki':
      image = 'https://i.pinimg.com/originals/42/5f/d5/425fd52f672ffb65d2e0e5800c941c8d.png';
      break;
    case 'Haru':
      image = 'https://i.pinimg.com/originals/4f/2b/fa/4f2bfa6f85282ace678f19d29b88b058.jpg';
      break;  
    case 'Natori':
      image = 'https://www.anime-planet.com/images/characters/natori-2252.jpg';
      break;
    case 'Sosuke':
      image = 'https://i.pinimg.com/originals/d6/d6/a3/d6d6a38107bed33865767c0e2b01ca2e.jpg';
      break;
    case 'Niya':
      image = 'https://pm1.narvii.com/6552/6f8912b43dbffa28be43fa2841dfa243ee9be998_hq.jpg';
      break;   
    default:
      image = null;
  }    
    
  return (
    <div className="card">
      <h3 className="text-center bg-dark">Character</h3>
      <img src={image} alt="" />
      <div className="text-center">
        <h3>{name}</h3>
        <h4>{age}</h4>
      </div>
      <div className="mt-1">
        <h4>Gender: {gender}</h4>
        <h4>Eye Color: {eye_color}</h4>
        <h4>Hair Color: {hair_color}</h4>
      </div>
    </div>
  )
}

PersonItem.propTypes = {
  person: PropTypes.object.isRequired
}


export default PersonItem;