import React from 'react'
import './blogcard.css';

export default function BlogCards({img, date, title}) {
  return (
    <>
    <div className='blogcards'>
    <img src={img} style={{height:150,width:250}} />
    <div>

    <p className='publishedat'>{date}</p>
    <p className='blogcards_title'>{title}</p>
    </div>
</div>
    {/* <hr className='hrr'/> */}
    </>
  )
}
