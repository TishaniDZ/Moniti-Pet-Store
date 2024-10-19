import React, { useEffect, useState } from 'react';
import PetCard from '../components/PetCard';
import FilterSidebar from '../components/FilterSidebar';
import { fetchPets } from '../utils/api';
import CategoryBanner from '../components/CategoryBanner';


const CategoryPage = () => {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState({ gender: '', color: '' });

  useEffect(() => {
    fetchPets(filter).then((data) => setPets(data));
  }, [filter]);

  return (
    <>
    <CategoryBanner />

      {/* Pet List and Sidebar */}
      <div className="container mx-auto flex mt-10">
        {/* Sidebar for filters */}
        <FilterSidebar filter={filter} setFilter={setFilter} />
        
        {/* Pet list */}
        <div className="pet-list flex-1 ml-6">
          <h2 className="section-title text-3xl font-bold mb-6">Small Dogs</h2>

          {/* Grid layout for pet cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination-container flex justify-center mt-8">
            <button className="pagination-button bg-blue-600 text-white px-4 py-2 rounded-full mx-2">1</button>
            <button className="pagination-button bg-gray-200 px-4 py-2 rounded-full mx-2">2</button>
            <button className="pagination-button bg-gray-200 px-4 py-2 rounded-full mx-2">3</button>
            <span className="pagination-dots text-gray-500 mx-2">...</span>
            <button className="pagination-button bg-gray-200 px-4 py-2 rounded-full mx-2">28</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
