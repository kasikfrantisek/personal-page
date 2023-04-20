import { GetServerSideProps, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react'
import RedDot from '../RedDot';

function CornerDots() {
    const [rows, setRows] = useState<JSX.Element[]>([])

    const randomDim = () => {
        const min = 10;
        const max = 45;
        const random = Math.floor(Math.random() * (max - min + 1) + min);
       return (random + 'px')
    }
    
    
    
   

    useEffect(() => {
        ( function displayDots():JSX.Element[]{
    
            for(let i = 5; i > 0; i--){
                let columns:JSX.Element[] = []
                for(let j = i; j > 0 ; j--){
                    randomDim();
                   columns.push(<RedDot key={j + 'c'} dimensions={randomDim()} />)
                }
                setRows((prev) => {
                    return [...prev, <div className='inline w-fit' key={i + 'r'}>
                    {columns}
                </div>]
                })
            }
            return rows;
        })()
    }, [])


  return (
    <div className='absolute inset-0 flex flex-col w-fit'>{rows}</div>
  )
}




export default CornerDots