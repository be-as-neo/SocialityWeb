import s from './Post.module.css';
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://www.ejin.ru/wp-content/uploads/2018/10/1202399791_preview_15034743_1798112143788452_7709561090543190016_n.jpg' /> 
      {props.messege}
      <div>
        <span>Like: </span> 
        {props.likesCount}
      </div>
    </div>
  )
}

export default Post