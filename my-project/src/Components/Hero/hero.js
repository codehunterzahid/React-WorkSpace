import './hero.css';

import arrow_btn from '../../Assets/arrow_btn.png';
import play_btn from '../../Assets/play_icon.png';
import pause_btn from '../../Assets/pause_icon.png';

export const Hero = ({heroData, setHeroCount, heroCount,setPlayStatus, playStatus}) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className='hero-explore'>
        <p>Explore the Features</p>
        <img src={arrow_btn} alt="Arrow Button" />'
      </div>

      <div className='hero-dot-play'>
        <ul className='hero-list'>
          <li onClick ={() => setHeroCount(0)} className={heroCount === 0? "hero-dot orange": "hero-dot"}></li>
          <li onClick ={() => setHeroCount(1)} className={heroCount === 1? "hero-dot orange": "hero-dot"}></li>
          <li onClick ={() => setHeroCount(2)} className={heroCount === 2? "hero-dot orange": "hero-dot"}></li>
        </ul>

      <div className='hero-play'>
        <img src={playStatus ? pause_btn : play_btn} alt="Play/Pause Button"
          onClick={() => setPlayStatus(!playStatus)} />
        <p>Watch the Video</p>

      </div>
      </div>


    </div>
  )
}

export default Hero;