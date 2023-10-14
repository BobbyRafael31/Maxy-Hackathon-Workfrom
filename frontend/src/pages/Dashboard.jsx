import React, {useEffect} from 'react'
import { Layout } from './Layout'
import { Welcome } from '../component/Welcome'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../features/AuthSlice";
import {IoPerson, IoWarning,IoWallet, IoBagCheck} from "react-icons/io5";

export const Dashboard = () => {
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
    <Layout><Welcome/>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-11 ml-5 mt-4">
          <div class="tile">
            <div class="tile is-parent is-vertical ">
            <article class="tile is-child notification is-primary">
                <div class="media">
                  <div class="media-left">
                    <IoPerson class="is-size-1 ml-5 mt-3 back"/>
                  </div>
                  <div class="media-content">
                    <p class="title is-right ml-5 mt-2">1000</p>
                    <p class="subtitle is-right ml-5 has-text-weight-bold">Total Pengunjung Website</p>
                  </div>
                </div>
            </article>

            <article class="tile is-child notification is-warning">
                <div class="media">
                  <div class="media-left">
                    <IoWallet class="is-size-1 ml-5 mt-3 back"/>
                  </div>
                  <div class="media-content">
                    <p class="title is-right ml-5 mt-2">Rp.16.699.000</p>
                    <p class="subtitle is-right ml-5">Penjualan</p>
                  </div>
                </div>
            </article>
            </div>

            <div class="tile is-parent is-vertical is-centered">
              <article class="tile is-child notification is-primary">
                <div class="media">
                  <div class="media-left">
                    <IoBagCheck class="is-size-1 ml-5 mt-3 back"/>
                  </div>
                  <div class="media-content">
                    <p class="title is-right ml-5 mt-2">100</p>
                    <p class="subtitle is-right ml-5">Total Pemesanan</p>
                  </div>
                </div>
              </article>

              <article class="tile is-child notification is-warning">
                <div class="media">
                  <div class="media-left">
                    <IoWarning class="is-size-1 ml-5 mt-3 back"/>
                  </div>
                  <div class="media-content">
                    <p class="title is-right ml-5 mt-2">100</p>
                    <p class="subtitle is-right ml-5">Total Pemesanan</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Dashboard;