import React, {useEffect} from 'react'
import Layout from './Layout'
import LocationList from '../component/LocationList';
import { useDispatch } from 'react-redux';
import { getMe } from "../features/AuthSlice";

export const Locations = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
        <LocationList/>
    </Layout>
  )
}

export default Locations;
