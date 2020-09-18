import {v4 as uuid} from 'uuid';

const  initialState = {
    users : [
        {
          id: "1",
          name: "Calvin",
         gen: "14", 
         email: "calvin@email.com"
        },

        {
          id:"2",
          name: "Doreen",
         gen: "15", 
         email: "doreen@email.com"
        },

        {
          id: "3",
          name: "Irene",
         gen: "2",
          email: "irene@email.com"
        }
      ]
    
};




const UsersReducers = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_USER":
            const newUser = {
              id: uuid(),
              name: action.payload.name,
              email:action.payload.email,
              gen: action.payload.gen
             
              };
            return { ...state, users: [...state.users, newUser] };
            case "DELETE_USER":
            const FilteredUsers = state.users.filter(user => user.id !== action.payload);
            return {...state, users: FilteredUsers}
           case "EDIT_USER":
             const editedUsers = state.users.map(user => {
               if (user.id === action.user_id){
                 return {...user, ...action.updated_info}
               } else {
                 return user;
               }
             });
              return {...state, users: editedUsers}
              default:
                return state;
            }
          };
export default UsersReducers;