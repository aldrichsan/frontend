import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Carousel} from 'react-responsive-carousel'

function Announcements() {
    const [announcements, setAnnouncements] = useState([]);
    const [announcement, setAnnouncement] = useState({});

    useEffect(()=>{
        getAnnouncements();
    },[]);

    const getAnnouncements = async() =>{
        const response = await axios.get('http://localhost:5000/announcements/get');
        setAnnouncements(response.data);
    }
    console.log(announcements);

  return (
    <div>
        <Carousel showArrows={true} autoPlay infiniteLoop swipeable={true}>
            {announcements.map((announce)=>(
                <div>
                    <h1>{announce.title}</h1>
                    <p>{announce.body}</p>
                </div>
            ))}
        </Carousel>
    
    </div>
  )
}

export default Announcements