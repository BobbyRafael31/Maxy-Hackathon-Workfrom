import React, {useEffect} from 'react'
import Navbar from '../component/Navbar.jsx'
import Sidebar from '../component/Sidebar.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../features/AuthSlice";

export const Layout = ({children}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  useEffect(()=>{
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns mt-6" style={{minHeight: "100vh"}}>
            <div className="column is-2"><Sidebar/></div>
            <div className="column has-background-light">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
  );
};

export default Layout;
