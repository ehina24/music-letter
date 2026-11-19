import { useState } from 'react';
import '../css/MyProfile.css';


//画像指定
import myIcon from '../assets/myIcon.png';
import diaryIcon from '../assets/diaryIcon.png';
import homeIcon from '../assets/homeIcon.png';
import mypageIcon from '../assets/mypageIcon.png';
import editIcon from '../assets/editIcon.png';
import charaHeadphone from '../assets/character/chara_headphone.png';
import charaMike from '../assets/character/chara_mike.png';
import charaNotes from '../assets/character/chara_notes.png';
import charaSpeaker from '../assets/character/chara_speaker.png';

function MyProfile(){
    const [isPublic,setIsPublic] = useState(false);
    return(
        <div className="myProfile">
            <div className='myInformation'>
                <img src={charaHeadphone} alt="ヘッドホンのキャラクター" className='charaHeadphone'/>
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
                <img src={charaNotes} alt="音符のキャラクター" className='charaNotes' />
                <h2><span className='vivid'>F</span>avorite <span className='vivid'>A</span>rtists</h2>
                <div className='artistList'>
                    <p>アーティスト1</p>
                    <p>アーティスト2</p>
                </div>
            </div>
            <div className='playlist'>
                <div className='playlistHeading'>
                    <img src={charaMike} alt="マイクのキャラクター" className='charaMike' />
                    <h2><span className='purple'>P</span>laylist</h2>
                </div>
                <div className='playlistWrap'>
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
                        <p>まるでメイドカフェ！？</p>
                    </div>
                </div>
            </div>
            <div className='cardCollection'>
                <img src={charaSpeaker} alt="スピーカーのキャラクター" className='charaSpeaker' />
                <h2><span className='yellow'>C</span>ard <span className='yellow'>C</span>ollection</h2>
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