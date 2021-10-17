import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div className={s.posts}>
      <Post messege = 'Love you!!!' like =' 16 ♥' img = {'https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg'}/>
      <Post messege = 'Hello, how are you?' like =' 17 ♥' img = {'https://www.meme-arsenal.com/memes/8c39f83458ca87b0b75cea622c6b096d.jpg'}/>
      <Post messege = 'You my best friend!' like =' 21 ♥' img = {'https://pbs.twimg.com/media/Ec-8rDTWkAErmuh.jpg'}/>
    </div>
  )
}

export default MyPosts;