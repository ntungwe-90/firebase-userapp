// import { getFirebase } from "react-redux-firebase";
// import { getFirestore } from "redux-firestore";

// export const addUser = (user) => {
//     return ( dispatch, state,{ getFirestore}) => {
//         getFirestore()
//         .collection( 'user')

//         .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
//         .then((doc) => {});
//         };
//     };
      

// export const deleteUser = (user_id) => {
//     return (dispatch, state, {getFirestore})=> {
//         getFirestore()
//         .collection('users')
//         .doc(user_id)
//         .delete()
//         .then(() => {});
//     };
// };

    



// export const editUser = (user_id, updated_info) => {
//     return(dispatch, state, {getFirestore}) => {
//         getFirestore()
//         .collection( 'users')
//         .doc(user_id)
//         .set(updated_info)
//         .then(() => {})
//         .catch((err) => {});
//     };
// };


// export const getAllUsers =() => {
//  return (dispatch, state, {getFirestore}) => {
//      getFirestore()
//      .collection('users')
//      .orderBy('timestamp', 'desc')
//      .onSnapshot(
//          (snapshot) => {
//              let users = [];
//              snapshot.forEach((doc) => {
//                  users.push({ ...doc.data(), id: doc.id});

//              });
//              console.log(users);
//              dispatch({
//                  type: 'SET_ALL_USERS',
//                  payload: users,
//              });
//          },
//          (err) => {

//          }
//      );
//  };
// };

import { getFirestore } from "redux-firestore";

export const addUser = (user) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("All Users")
      .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
      .then((doc) => {
        dispatch({
        })
      });
  };
  
};

export const deleteUser = (user_id) => {
  return (dispatch, state, {getFirestore}) => {
    getFirestore()
    .collection('All Users')
    .doc(user_id)
    .delete()
    .then(()=>{
      
    });
  }; 

  // {
  //   type: "DELETE_USER",
  //   payload: user_id
  // };
};

export const editUser = (user_id, updated_info) => {
  return (dispatch, state, {getFirestore}) => {
    getFirestore()
    .collection('All Users')
    .doc(user_id)
    .set(updated_info)
    .then(()=>{})
    .catch((err)=>{});
  };

  // {
  //   type: "EDIT_USER",
  //   user_id: user_id,
  //   updated_info: updated_info
  // };
};

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
    .collection('All Users')
    .orderBy('name', 'asc')
    .onSnapshot(
      (snapshot)=>{
      let allusers = [];
      snapshot.forEach((doc) => {
         
        allusers.push({...doc.data(), id: doc.id});
      });
      console.log(allusers);
      dispatch({
        type:"SET_ALL_USERS",
        payload: allusers,
      }); 
    },
    (err) => {

    }
    )
  }
}