import { useState } from 'react';
import '../css/ProfileSetup.css'

//画像指定
import guideCharacter from '../assets/guide_character.png';
import jpopFront from '../assets/genre/jpopFront.png';
import jpopBack from '../assets/genre/jpopBack.png';
import citypopFront from '../assets/genre/citypopFront.png';
import citypopBack from '../assets/genre/citypopBack.png';
import rockFront from '../assets/genre/rockFront.png';
import rockBack from '../assets/genre/rockBack.png';
import edmFront from '../assets/genre/edmFront.png';
import edmBack from '../assets/genre/edmBack.png';
import hiphopFront from '../assets/genre/hiphopFront.png';
import hiphopBack from '../assets/genre/hiphopBack.png';
import classicFront from '../assets/genre/classicFront.png';
import classicBack from '../assets/genre/classicBack.png';
import rbFront from '../assets/genre/rbFront.png';
import rbBack from '../assets/genre/rbBack.png';
import jazzFront from '../assets/genre/jazzFront.png';
import jazzBack from '../assets/genre/jazzBack.png';
import metalFront from '../assets/genre/metalFront.png';
import metalBack from '../assets/genre/metalBack.png';
import popFront from '../assets/genre/popFront.png';
import popBack from '../assets/genre/popBack.png';
import folkFront from '../assets/genre/folkFront.png';
import folkBack from '../assets/genre/folkBack.png';
import indieFront from '../assets/genre/indieFront.png';
import indieBack from '../assets/genre/indieBack.png';
import cdImage from '../assets/cd.png';

function ProfileSetup(){
    const [step,setStep] = useState(1);
    const [gender,setGender] = useState('');
    const [selectedGenres,setSelectedGenres] = useState<string[]>([]);
    //ジャンル一覧
    const genres = [
        {id:'jpop',name:'J-POP',frontImage:jpopFront,backImage:jpopBack},
        {id:'citypop',name:'CITY POP',frontImage:citypopFront,backImage:citypopBack},
        {id:'rock',name:'ROCK',frontImage:rockFront,backImage:rockBack},
        {id:'edm',name:'EDM',frontImage:edmFront,backImage:edmBack},
        {id:'hiphop',name:'HIPHOP',frontImage:hiphopFront,backImage:hiphopBack},
        {id:'classic',name:'CLASSIC',frontImage:classicFront,backImage:classicBack},
        {id:'rb',name:'R&B',frontImage:rbFront,backImage:rbBack},
        {id:'jazz',name:'JAZZ',frontImage:jazzFront,backImage:jazzBack},
        {id:'metal',name:'METAL',frontImage:metalFront,backImage:metalBack},
        {id:'pop',name:'POP',frontImage:popFront,backImage:popBack},
        {id:'fork',name:'FORK',frontImage:folkFront,backImage:folkBack},
        {id:'indie',name:'INDIE',frontImage:indieFront,backImage:indieBack}
    ];
    //ジャンルの選択・解除
    const toggleGenre = (genre:string) => {
        setSelectedGenres(current =>
            current.includes(genre) ? current.filter(item => item !== genre) : [...current,genre]
        );
    }

    //好きなアーティスト・自己紹介入力画面
    if(step === 2){
        return(
            <div className='profileSetup'>
                <h1>あなたについて教えてください</h1>
                <img src={guideCharacter} alt="ガイドキャラクター" />

                <div className='setupForm'>
                    <label>
                        <input type="text" placeholder='好きなアーティスト' />
                    </label>
                    <label>
                        <input type="text" placeholder='好きなアーティスト'/>
                    </label>
                    <label className='selfIntroduction'>
                        <textarea placeholder='自己紹介' />
                    </label>
                </div>
                <button type='button' className='nextBtn' onClick={() => setStep(3)}>次へ</button>
            </div>
        )
    }

    if(step === 3){
        return(
            <div className='profileSetup genreSelect'>
                <h1>該当する好きなジャンルを選んでください</h1>

                <div className='genreList'>
                    {genres.map((genre) => (
                        <button type='button' key={genre.id}
                                className={`genreCard ${selectedGenres.includes(genre.id) ? 'selected' : ''}`}
                                onClick={() => toggleGenre(genre.id)}>
                            <img src={genre.backImage} alt="フォルダー後ろ部分" className='folderBack' />
                            {/* 選択された時のみCDを表示 */}
                            {selectedGenres.includes(genre.id) && (
                                <img src={cdImage} alt="CD画像" className='genreCd' />
                            )}
                            <img src={genre.frontImage} alt={genre.name} className='folderFront' />
                        </button>
                    ))}
                </div>
                <div className='btnWrap'>
                    <button type='button' className='nextBtn genreNextBtn'>次へ</button>
                    <button type='button' className='backBtn'onClick={() => setStep(2)}>戻る</button>
                </div>
            </div>
        )
    }

    return(
        <div className='profileSetup'>
            <h1>あなたについて教えてください</h1>
            <img src={guideCharacter} alt="ガイドキャラクター" />

            <div className='setupForm'>
                <label>
                    <input type="text" placeholder='ニックネーム' />
                </label>
                <label>
                    <input type="number" placeholder='年齢' />
                </label>
                <div className='gender'>
                    <button className={gender === 'woman' ? 'selected woman' : ''} onClick={() => setGender('woman')}>
                        女性
                    </button>
                    <button className={gender === 'man' ? 'selected man' : ''} onClick={() => setGender('man')}>
                        男性
                    </button>
                    <button className={gender === 'noChoose' ? 'selected noChoose' : ''} onClick={() => setGender('noChoose')}>
                        選ばない
                    </button>
                </div>
            <button type='button' className='nextBtn' onClick={() => setStep(2)}>次へ</button>
            </div>

        </div>
    )
}

export default ProfileSetup