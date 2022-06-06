import React from 'react'
import { Link } from 'react-router-dom';
import './Home.scss';
import Button from '../../components/Button/Button';


const Home = () => {


  return (
    <div className="Home">
      <h1>Favourite Tracks</h1>
      
      <div>
        <Link to='/showtracks'>
        <Button buttonText="show tracks" type="submit"/>
        </Link>
        
        <Link to='/addatrack'>
        <Button buttonText="add a track" type="submit"/>
        </Link>
      </div>

    </div>
  );
}

export default Home