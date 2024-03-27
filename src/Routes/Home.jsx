import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Home.css"

import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=5`); 
        const data = await response.json();
        setDentists(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Link key={dentist.login.uuid} to={`/dentist/${dentist.login.uuid}`}>
            <Card dentist={dentist} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home;

