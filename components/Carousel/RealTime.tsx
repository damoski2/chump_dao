import React from 'react'
import style from '../../styles/Carousel.module.css';
import { writeIcon, dollarIcon, likeIcon, investorsIcon } from '../../Images'


const RealTime: React.FC = () => {
  return (
    <div className={style.real__time} >
      <div className={style.inner__div} >
        <div className={style.inner__row} >
          <img src={dollarIcon} alt="dollarIcon" />
          <span>Assests under management</span>
        </div>
        <h2>$41, 885,192.06</h2>
      </div>
      <div className={style.inner__div} >
        <div className={style.inner__row} >
          <img src={writeIcon} alt="dollarIcon" />
          <span>Total Proposal</span>
        </div>
        <h2>1</h2>
      </div>
      <div className={style.inner__div} >
        <div className={style.inner__row} >
          <img src={likeIcon} alt="dollarIcon" />
          <span>Total Votes</span>
        </div>
        <h2>8.5M</h2>
      </div>
      <div className={style.inner__div} >
        <div className={style.inner__row} >
          <img src={investorsIcon} alt="dollarIcon" />
          <span>Members</span>
        </div>
        <h2>19</h2>
      </div>
    </div>
  )
}

export default RealTime