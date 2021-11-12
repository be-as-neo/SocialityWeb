const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST' 

let initialState = {
    postData:[ 
        {id: 1, message: 'Love you!!!', likesCount: 16},
        {id: 2, message: 'You my best friend!', likesCount: 17, avatar: 'https://sun9-68.userapi.com/impg/qnmaaSfod82sSfWbP8WfyWStAp4NIndcKcYKBA/sz29WKMsTcI.jpg?size=810x1080&quality=96&sign=a0d0e94be8b05145c1ea0cef45b1d3bd&type=album'},
        {id: 3, message: 'Hello, how are you?', likesCount: 87, avatar:'https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg'},
    ],
    newPostText: '' 
}
const profileReducer = (state = initialState, action) =>{
    switch(action.type){//Добавление поста на стену в профиле
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            }
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () =>{
    return{
        type: 'ADD-POST'
    }
}
  
export const updateNewPostTextActionCreator = (text) =>{
    return{
      type: 'UPDATE-NEW-POST-TEXT', newText : text 
    }
}

export default profileReducer