// // import React, { useState, useEffect } from 'react';
// // import { useAuthStore } from "../../store/authStore"
// // import { useNavigate } from "react-router"

// // const API_URL = import.meta.env.VITE_API_URL;

// // const Profile = () => {
// //   const [artistData, setArtistData] = useState(null);
// //   const handleLogout = useAuthStore((state) => state.handleLogout)
// //     const accessToken = useAuthStore((state) => state.accessToken)
// //     const role = useAuthStore((state) => state.role)
// //     const navigate = useNavigate()
  
// //     useEffect(() => {
// //       if (!accessToken || !role) {
// //         navigate("/home")
// //       }
// //     }, [accessToken, role])

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(`${API_URL}/artisianPath/getArtisian`);
// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }
// //         const data = await response.json();
// //         setArtistData(data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []); 

// //   return (
// //     <div>
// //       {artistData ? (
// //         <div>
// //           <h2>Artisan Details</h2>
// //           <p>Name: {artistData.name}</p>
// //           <p>Mobile: {artistData.mobile}</p>
// //           <p>Age: {artistData.age}</p>
// //           <p>Address: {artistData.address}</p>
// //         </div>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
    
// //       <button
// //           className="text-black bg-accent py-2 text-xl font-bold text-center rounded-lg shadow-md shadow-black flex justify-center px-4 items-center gap-1"
// //           onClick={handleLogout}
// //         >
// //           Log Out
// //         </button>
// //     </div>
// //   );
// // };

// // export default Profile;
// import React, { useEffect } from "react"
// import { useAuthStore } from "../../store/authStore"
// import { useNavigate } from "react-router"

// export const Profile = () => {
//   const handleLogout = useAuthStore((state) => state.handleLogout)
//   const accessToken = useAuthStore((state) => state.accessToken)
//   const role = useAuthStore((state) => state.role)
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (!accessToken || !role) {
//       navigate("/home")
//     }
//   }, [accessToken, role])

//   return (
//     <>
//       <h1 className="text-2xl font-medium">Profile</h1>

//       <h2 className="text-xl font-medium text-[#555]">Welcome, XYZ</h2>

//       <div>
//         <button
//           className="text-black bg-accent py-2 text-xl font-bold text-center rounded-lg shadow-md shadow-black flex justify-center px-4 items-center gap-1"
//           onClick={handleLogout}
//         >
//           Log Out
//         </button>
//       </div>
//     </>
//   )
// }
