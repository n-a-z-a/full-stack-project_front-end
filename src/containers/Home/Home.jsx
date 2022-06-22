import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss';
import Button from '../../components/Button/Button';


const Home = () => {


  return (
    <div className='home'>
      <h1 className='home__heading'>MY FAVOURITE TRACKS</h1>
      
      <div className='home__buttons'>
        <Link to='/tracklist'>
        <Button 
          buttonStyle="button-primary-top"
          key="tracklist" 
          buttonText="show tracks" 
          type="submit"/>
        </Link>
        
        <Link to='/addatrack'>
        <Button 
          buttonStyle="button-primary-bottom"
          key="addatrack" 
          buttonText="add a track" 
          type="submit"/>
        </Link>
      </div>

    </div>
  );
}

export default Home