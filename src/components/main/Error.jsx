import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div style={{textAlign: 'center'}}>
    <button onClick={() => navigate('/')}>Back to Main page</button>
      ERROR
    </div>
  )
}

export default Error;