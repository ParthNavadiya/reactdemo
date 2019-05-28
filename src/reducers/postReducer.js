
const postReducer = (state = [], action) => {
    
    switch(action.type){
        case 'ADD_CONTACT':
           
            return state.concat([action.data]);
          
        
        case 'DELETE_CONTACT':
            return state.filter((contact) => contact.id !== action.id);
            
            
        case 'EDIT_CONTACT':
            return state.map((contact)=>contact.id === action.id ? {...contact,editing:!contact.editing}:contact);
           
           
        case 'UPDATE_CONTACT':
            return state.map((contact)=>{
               if(contact.id === action.id)
               {
                   return{
                         ...contact,
                         name:action.data.newName,
                         number:action.data.newNumber,
                         email:action.data.newEmail,
                         address:action.data.newAddress,
                         editing:!contact.editing
                   };
               }
               else{
                   return contact;
               }
                
            });   
            
        default:    
            return state;
    }
    
    
};

export default postReducer;
