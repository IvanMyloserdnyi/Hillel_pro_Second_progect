import classes from './ThirdTask.module.css';
import {NavLink, Route, Routes} from "react-router-dom";


export function UsersList() {
    return (
        <div>
            <NavUsers data={usersData}/>
        </div>
    )
}

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
const photosUrl = 'https://jsonplaceholder.typicode.com/photos';
const usersData = await getServerData(usersUrl);
const albumsData = await getServerData(albumsUrl);
const photosData = await getServerData(photosUrl);

function getServerData(url = '') {
    return fetch(url)
        .then((response) => response.json())
        .then((json) => json)
        .catch((error) => {
            console.log(error)
        })
}

function NavUsers(props) {
    const data = props.data
    return (
        <div>
            {data.map((user) => (
                <div key={user.id} className={classes.item}>
                    <NavLink to={`user/${user.id}/*`}
                             className={navContent => navContent.isActive ? classes.activeLink : classes.item}>
                        <h2>{user.name}</h2>
                    </NavLink>
                    <Routes>
                        <Route
                            key={user.id}
                            path={`user/${user.id}/*`}
                            element={
                                <div>
                                    <UserProfile userId={user.id}/>
                                </div>
                            }
                        />
                    </Routes>
                </div>
            ))}
        </div>
    );
}


function UserProfile(props) {
    return (
        <div>
            <NavLink to={`albums/*`} className={navContent => navContent.isActive ? classes.activeLink : classes.item}>
                <h3>Albums</h3>
            </NavLink>
            <div>
                <Routes>
                    <Route path={'albums/*'} element={<UserAlbums userId={props.userId}/>}/>
                </Routes>
            </div>
        </div>
    )
}

function UserAlbums(props) {
    const userAlbumsObj = albumsData.filter((user) => user.userId === props.userId);
    return (
        <div>
            <ul>
            {userAlbumsObj.map((album) => (
                <li key={album.id}>
                    <NavLink to={`album_${album.id}/*`}
                             className={navContent => navContent.isActive ? classes.activeLink : classes.item}>
                        <h5>{album.title}</h5>
                    </NavLink>
                    <Routes>
                        <Route
                            key={album.id}
                            path={`album_${album.id}/*`}
                            element={<AlbumPhotos albumId={album.id}/>}
                        />
                    </Routes>
                </li>
            ))}</ul>
        </div>
    );
}

function AlbumPhotos(props) {
    return (
        <div>
            <NavLink to={`photos/*`} className={navContent => navContent.isActive ? classes.activeLink : classes.item}>
                <h5 style={{marginLeft: '50px'}}>Photos</h5>
            </NavLink>
            <Routes>
                <Route path={'photos/*'} element={<ShowAlbumPhotos albumId={props.albumId}/>}/>
            </Routes>
        </div>
    )
}

function ShowAlbumPhotos(props) {
    const albumPhotosObj = photosData.filter((photo) => photo.albumId === props.albumId);
    const croppedPhotosObj = albumPhotosObj.slice(0, 5)
    return (
        <div>
            {croppedPhotosObj.map((photo) => (
                <img key={photo.id} src={photo.url} alt={photo.title} style={
                    {
                        width: '60px',
                        height: '60px'
                    }
                }/>
            ))}
        </div>
    )
}


