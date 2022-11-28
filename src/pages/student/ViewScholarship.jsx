import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '../../components/Accordion';

import Layout from './Layout'
import './styles/ViewScholarship.css'


function ViewScholarship() {
  const [scholarships, setScholarships] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(()=>{
    getScholarships();
  },[])

  useEffect(()=>{
    if (search == ''){
      getScholarships();
    }else{
      getSearchedScholarships(search);
    }
    },[search])

  const getScholarships = async() => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/scholarships/get`, {
  });
  setScholarships(response.data);
  }

  const getSearchedScholarships = async(id) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/scholarships/search/${id}`, {
  });
  setScholarships(response.data);
  }
  return (
    <Layout>
        <div className="view-scholarships">
          <div>
            <h1>View Scholarships: </h1>
            <span>
              <label>Scholarship Name: &nbsp; </label>
              <input type="text" name='searchField' placeholder='e.g. Academic Scholarship' onChange={(e)=>{setSearch(e.target.value)}}/>
            </span>
          </div>
          <div className="accordion">
            {scholarships.map(({id, scholarship_name, description, requirements }) => (
              <Accordion key={id} scholarship_name={scholarship_name} description={description} requirements={requirements}/>
            ))}
          </div>

        </div>

    </Layout>
       
    )
}

export default ViewScholarship