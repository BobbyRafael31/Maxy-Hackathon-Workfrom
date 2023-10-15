import React, {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './Pagination.css';

export const Userlist = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 10;

    useEffect(()=>{
        getUsers();
    }, [])
    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    };

    const deleteUser = async (userId) =>{
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    };

    const offset = currentPage * perPage;
    const usersToDisplay = users.slice(offset, offset + perPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        window.scrollTo(0, 0);
      };

  return (
    <div>
        <h1 className='title'>Users</h1>
        <h2 className='subtitle'>List of Users </h2>
        <Link to="/users/add" className='button is-primary mb-2'>Add New</Link>
        <table className='table is-bordered is-fullwidth'>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {usersToDisplay.map((user, index) =>(               
                <tr key ={user.uuid}>
                    <td>{offset+index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                        <Link to={`/users/edit/${user.uuid}`} className='button is-small is-info'>Edit</Link>
                        <button onClick={()=> deleteUser(user.uuid)} className='button is-small is-danger'>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        <div className='pagination'>
        <ReactPaginate
        pageCount={Math.ceil(users.length / perPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}oo
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      /> </div>
    </div>
  )
}

export default Userlist;
