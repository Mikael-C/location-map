import React, { useState, useEffect } from 'react';

import {ref, collection} from 'firebase/database'
import firebase from 'firebase';

// import firebase from './firebase';

import db from './firebase';
export default function Location () {
  const [locationList, setLocationList] = useState();



  useEffect(() => {
    const locationRef = firebase.database().ref('location2');
    locationRef.on(`value`, (snapshot)=>{
      const location = snapshot.val();
        const locationList = []
      for (let id in location){
        locationList.push(location[id]);
      }
      console.log(locationList);
      setLocationList(locationList);
    });
     
    
    
     
 
    }, []);
 
 return(
   <div>

   </div>
 );
  
  
  }
