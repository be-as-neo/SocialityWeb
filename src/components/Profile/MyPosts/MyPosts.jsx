import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = () => {
  
  let postData = [
    {id: 1, message: 'Love you!!!', likesCount: 16},
    {id: 2, message: 'You my best friend!', likesCount: 17},
    {id: 3, message: 'Hello, how are you?', likesCount: 87}
  ]
  
  let postElements = 
    postData.map( p => <Post messege = {p.message} likesCount = {p.likesCount}/>);

  return (
    <div className = {s.MyPosts}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
        <button>Add Post</button>
        </div> 
      </div>
    <div className={s.posts}>
      {postElements}
      {/* <Post messege = {postData[0].message} like = {postData[0].likesCount} />
      <Post messege = {postData[1].message} like = {postData[1].likesCount} />
      <Post messege = {postData[2].message} like = {postData[2].likesCount} /> */}
    </div>
    </div>
  )
}

export default MyPosts;

// img = 'https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg'
// img = 'https://www.meme-arsenal.com/memes/8c39f83458ca87b0b75cea622c6b096d.jpg'
// img = 'https://pbs.twimg.com/media/Ec-8rDTWkAErmuh.jpg'
