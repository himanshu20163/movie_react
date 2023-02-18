import React from 'react';
import './Cards.css';

function Movies(props){
    return (
      // esse illum blanditiis, fuga voluptatibus?
        <div className="main_content">
          <div className='main_cards' style={{backgroundImage:` linear-gradient(90deg,rgb(0, 0, 0)45%,rgba(255, 255, 255, 0.12)),url(${props.img})`,backgroundRepeat:"no-repeat"}}>
            <div className='movie_img' >
              <img src={props.img_short} className='img_card' ></img>
              <div className="content">
              <h3 className='title'>{props.movie_title}</h3>
              <h6 className='title'>{props.movie_release}</h6>
              <p className='m_text'>{props.movie_text}</p>
            </div>
            </div>
            <p className='movie_detail'>{props.para}<br/><br/>  
            <i class="fa fa-share " style={{margin:"10px"}}></i>
            <i class="fa fa-heart" style={{margin:"10px"}}></i>
            <i class="fa fa-comment" style={{margin:"10px"}}></i>
            </p>
            
          </div>
         

         </div>
    )
}
export default Movies;