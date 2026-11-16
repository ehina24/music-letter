import { useState } from 'react';
import '../css/MyProfile.css';


//画像指定
import myIcon from '../assets/myIcon.png';
import diaryIcon from '../assets/diaryIcon.png';
import homeIcon from '../assets/homeIcon.png';
import mypageIcon from '../assets/mypageIcon.png';
import editIcon from '../assets/editIcon.png';

function MyProfile(){
    const [isPublic,setIsPublic] = useState(false);
    return(
        <div className="myProfile">
            <div className='myInformation'>
                <div className='profileActions'>
                    <button type='button'
                            className={`toggle ${isPublic ? 'active' : ''}`}
                            onClick={() => setIsPublic(!isPublic)}
                            aria-label='自動マッチング設定'
                            aria-pressed={isPublic}>
                        <span className='toggleCircle'></span></button>
                    <button type='button' className='editBtn'><img src={editIcon} alt="編集アイコン" /></button>
                </div>
                <img src={myIcon} alt="マイアイコン" className='myIcon'/>
                <div className='profileText'>
                    <p className='profileName'>うさぎもち 20/女</p>
                    <p className='profileGenre'>J-POP/EDM/INDIE</p>
                </div>
                <p className='introduction'>ここに自己紹介文が入ります</p>
            </div>
            <div className='favoriteArtists'>
                <h2>Favorite Artists</h2>
                <div className='artistList'>
                    <p>アーティスト1</p>
                    <p>アーティスト2</p>
                </div>
            </div>
            <div className='playlist'>
                <h2>Playlist</h2>
                <div className='playlistItem'>
                    <div className='songImg'></div>
                    <p>真夜中のドライブ</p>
                </div>
                <div className='playlistItem'>
                    <div className='songImg'></div>
                    <p>ビートを感じて</p>
                </div>
                <div className='playlistItem'>
                    <div className='songImg'></div>
                    <p>ビートを感じて</p>
                </div>
            </div>
            <div className='cardCollection'>
                <h2>Card Collection</h2>
                <div className='cardList'>
                    <div className='cardImg'></div>
                    <div className='cardImg'></div>
                    <div className='cardImg'></div>
                </div>
            </div>

            <nav className='btnNav'>
                <button type='button'><img src={diaryIcon} alt="日記アイコン" /></button>
                <button type='button'><img src={homeIcon} alt="ホームアイコン" /></button>
                <button type='button'><img src={mypageIcon} alt="マイページアイコン" /></button>
            </nav>
        </div>
    )
}

export default MyProfile