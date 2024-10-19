import React from 'react';

const FilterSidebar = ({ filter, setFilter }) => {
  return (
    <aside className="w-64 bg-white p-5 shadow-lg mr-5">
      <h3 className="text-xl font-bold mb-3">Filter Pets</h3>

      <div className="mb-5">
        <label className="block text-gray-700 mb-2">Gender</label>
        <select
          value={filter.gender}
          onChange={(e) => setFilter({ ...filter, gender: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="block text-gray-700 mb-2">Color</label>
        <input
          type="text"
          value={filter.color}
          onChange={(e) => setFilter({ ...filter, color: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Enter color"
        />
      </div>
      
      <button
        onClick={() => setFilter({ gender: '', color: '' })}
        className="bg-secondary text-white px-5 py-2 rounded hover:bg-orange-600"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
