import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export const Locationlist = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10;

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await axios.get('http://localhost:5000/locations');
    setLocations(response.data);
  };

  const offset = currentPage * perPage;
  const locationsToDisplay = locations.slice(offset, offset + perPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1 className="title">Locations</h1>
      <h2 className="subtitle">List of Locations</h2>
      <Link to="/locations/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>NO</th>
            <th>NAME</th>
            <th>CITY</th>
            <th>ADDRESS</th>
            <th>DESCRIPTION</th>
            <th>IMAGE</th>
            <th>LOCATION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {locationsToDisplay.map((location, index) => (
            <tr key={location.building_id}>
              <td>{offset + index + 1}</td>
              <td>{location.name}</td>
              <td>{location.city}</td>
              <td>{location.address}</td>
              <td>{location.description}</td>
              <td>
                {/* Display the image */}
                <img src={`http://localhost:5000/images/location/${location.image}`} alt="Location" />
              </td>
              <td>{location.location_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <ReactPaginate
          pageCount={Math.ceil(locations.length / perPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Locationlist;
