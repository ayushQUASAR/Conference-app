// import React, { createContext, useState } from 'react';
// import { useContext } from 'react';

// const SpeakerContext = createContext();

// const SpeakerContextProvider = ({ children }) => {
//   const [memberDetails, setMemberDetails] = useState({});
//   const [showprofile, setShow] = useState(false);

//   const toggleMemberDetails = (memberId) => {
//     setMemberDetails((prevDetails) => ({
//       // ...prevDetails,
//       [memberId]: !prevDetails[memberId],
//     }));


//    setShow(!showprofile);
//   };

//   const contextValue = {
//     memberDetails,
//     toggleMemberDetails,
//     showprofile,
//   };

//   return (
//     <SpeakerContext.Provider value={contextValue}>
//       {children}
//     </SpeakerContext.Provider>
//   );
// };

// const useSpeakerContext=()=>{
//   return useContext(SpeakerContext);
// }



// export { useSpeakerContext, SpeakerContextProvider};
