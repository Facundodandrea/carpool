// Filter.js
import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const handleTimeFilterChange = (selectedTime) => {
    const newTimeFilter = selectedTime === 'showAll' ? null : selectedTime;
    onFilterChange('time', newTimeFilter);
  };

  return (
    <div className="filter-container">
      <h3>Filtrar por:</h3>
      <div>
        <label>
          Hora:
        </label>
        <select
          value={filters.time || 'showAll'}
          onChange={(e) => handleTimeFilterChange(e.target.value)}
        >
          <option value="showAll">Ver Todos</option>
          <option value="before6">Antes de las 6:00</option>
          <option value="from6to12">6:00 - 12:00</option>
          <option value="from12to18">12:01 - 18:00</option>
          <option value="after18">Después de las 18:00</option>
        </select>
      </div>
      <div>
        <label>
          Puede llevar mascotas:
          <input
            type="checkbox"
            checked={filters.canBringPets}
            onChange={() => handleFilterChange('canBringPets', !filters.canBringPets)}
          />
        </label>
      </div>
      <div>
        <label>
          Puede fumar:
          <input
            type="checkbox"
            checked={filters.canSmoke}
            onChange={() => handleFilterChange('canSmoke', !filters.canSmoke)}
          />
        </label>
      </div>
    </div>
  );
};

export default Filter;
