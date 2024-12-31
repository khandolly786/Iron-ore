import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import logo from '../assets/1.png';

const Dashboard = () => {
  const [classificationData, setClassificationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('your_api_endpoint')
        .then((res) => res.json())
        .catch((err) => console.error(err));

      setClassificationData(data);
    };

    fetchData();
  }, []);

  return (
    <div className='dashboard'>
       <img src={logo} alt="img" className='image'></img>
       </div>
//       {/* {classificationData ? (
//     //     // <div>
//     //     //   <h2>Iron Ore Classification Results</h2>
//     //     //   <p>Ore Type: {classificationData.type}</p>
//     //     //   <p>Classification Score: {classificationData.score}</p>
//     //     // </div>
//     //   // ) : (
//     //   //   <p className='loading'>Loading classification data...</p>
        
//     //   // )}
//     // </div>
//   );
// } */}
  );}

export default Dashboard;