import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PetDetails from '../components/PetDetails';
import { fetchPetById } from '../utils/api';

const PetDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetchPetById(id).then((data) => setPet(data));
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {pet ? <PetDetails pet={pet} /> : <p>Loading...</p>}
      </div>
      <Footer />
    </>
  );
};

export default PetDetailsPage;
