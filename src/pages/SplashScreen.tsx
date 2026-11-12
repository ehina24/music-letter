import '../css/SplashScreen.css'

//画像指定
import logo from '../assets/logo.png';
import characters from '../assets/characters.png';

function SplashScreen(){
    return(
        <div className="splashScreen">
            <img src={logo} alt="ロゴ画像" className='logo' />
            <img src={characters} alt="キャラクター達" className='characters' />
        </div>
    )
}

export default SplashScreen