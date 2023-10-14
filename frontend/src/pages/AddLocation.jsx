import React, {useEffect} from 'react'
import Layout from './Layout'
import FormAddLocation from '../component/FormAddLocation'  
import { useDispatch } from 'react-redux';
import { getMe } from "../features/AuthSlice";

export const AddLocation = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
        <FormAddLocation />
    </Layout>
  )
}

export default AddLocation;
