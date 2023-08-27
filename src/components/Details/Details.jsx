import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function Details(){

    const history = useHistory()

    
  const handleBack = () => {
   history.push("/")
  }



  return (
    <button onClick={handleBack}>Back to Movies</button>
  )

}