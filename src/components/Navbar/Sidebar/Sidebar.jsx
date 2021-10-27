import s from './../Navbar.module.css';

const SideBar = (props) => {

    return(
        <div className = {s.friendsContainerMain}>
            <div className = {s.friendsContainer}>
                <div className={s.logoFriend}>
                    <img src = "https://get.wallhere.com/photo/sad-depressing-mask-minimalism-artwork-gray-Twitter-1756879.jpg"/>
                    <img src = "https://get.wallhere.com/photo/simple-minimalism-1460345.jpg" />
                    <img src = "https://img5.goodfon.ru/wallpaper/nbig/8/fc/stil-litso-manga.jpg"/>
                </div>
            </div>
            <div>
                <div className={s.friendsName}>
                    <div>Ivan</div>
                    <div>Ekaterina</div>
                    <div>Danil</div>
                </div>
            </div>
        </div>
    )
}

export default SideBar