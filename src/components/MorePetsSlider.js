import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { fetchPets } from '../utils/api';

const MorePetsSlider = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets().then((data) => setPets(data.slice(4, 10))); // Fetch more pets
  }, []);

  return (
    <section className="more-pets-slider py-10">
      <h2 className="text-2xl font-bold mb-5">More Pets</h2>
      <Swiper spaceBetween={10} slidesPerView={3} loop={true}>
        {pets.map((pet) => (
          <SwiperSlide key={pet.id}>
            <img src={pet.imageUrl} alt={pet.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2 text-center">{pet.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MorePetsSlider;
