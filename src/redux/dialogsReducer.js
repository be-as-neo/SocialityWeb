const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    messagesData: [    
        {id: 1, message: 'hi'},
        {id: 2, message: 'is'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'name'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'How are you?'},
    ],
    dialogsData:[    
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Ekaterina'},
        {id: 3, name: 'Danil'},
        {id: 4, name: 'Vitalya'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Oleg'},
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id:7, message: body});
            return state;
        default:
            return state;
        
    }
    
}

export const sendMessageCreator = () => ({type:SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body})


export default dialogsReducer