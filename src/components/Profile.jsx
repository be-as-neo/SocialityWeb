import classes from'./Profile.module.css';
const Profile = () => {
    return(
        <div className = {classes.content}>
        <div>
          <img src = 'https://pbs.twimg.com/profile_banners/1173848757470785536/1569306015/1500x500'></img>
        </div>
        <div>
          ava 
        </div>
        <div>
          post
            <div>
              new post
            </div>
            <div>
              <div className ={classes.item}>
                post 1
              </div>
              <div className ={classes.item}>
                post 2
              </div>
              <div className ={classes.item}>
                post 3
              </div>
            </div>
        </div>
      </div>
    )
}

export default Profile