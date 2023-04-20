import React, { useState , useRef, useEffect, RefObject} from 'react'
import RedDot from '../RedDot'
import photo1 from '/public/1.jpg'
import photo2 from '/public/2.jpg'
import photo3 from '/public/3.jpg'
import photo4 from '/public/4.jpg'
import arrow from '/public/icons8-down-right-100.png'
import Image from 'next/image'

function Introduction() {
    const [index, setIndex] = useState(0)
    const [hovered, setHovered] = useState(false)
    const divRef = useRef<HTMLDivElement>(null);
    const textHeadingRef = useRef<HTMLHeadingElement>(null)
    const textParagraphRef = useRef<HTMLParagraphElement>(null)
    const photos = [photo1, photo2, photo3, photo4];
    const inter = useRef<NodeJS.Timeout>();
    
    const changePhoto = () => {
        inter.current = setInterval(() => {
            setIndex(prev => {
                return prev + 1 % photos.length >= photos.length - 1 ? 0 : prev % photos.length + 1
            })
            console.log(index)
        }, 300);
        setHovered(true)
    }

    const stopChangePhoto = () => {
        clearInterval(inter.current)
    }


    useEffect(() => {
        function handleScroll() {
          if (divRef.current) {
            const sectionTop = divRef.current.getBoundingClientRect().top;
            const sectionBottom = divRef.current.getBoundingClientRect().bottom;
    
            if (sectionTop < window.innerHeight && sectionBottom > 0) {
              if (textHeadingRef.current && textParagraphRef.current) {
                textHeadingRef.current.classList.add('textAppear');
                textParagraphRef.current.classList.add('textAppear');
              }
            }
          }
        }
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


  return (
    <div id='about' ref={divRef} className='text-white grid grid-cols-2 w-full h-screen p-5 gap-8 bg-black'>
        <div className='flex flex-col items-start justify-center p-8 relative bg-neutral-800 rounded-2xl h-2/4 w-4/5 place-self-center' >
            <div className='flex flex-row'>
            <RedDot dimensions='24px' />
            <h1 ref={textHeadingRef} className='font-bold text-3xl self-start opacity-0 transition-opacity duration-1000'> About me</h1>
            </div>
            <p ref={textParagraphRef} className='opacity-0 transition-opacity duration-1000'>Hi there! My name is František Kašík, and I&apos;m a web developer based in Prague. My journey to becoming a web developer started during the pandemic when I decided to learn HTML and CSS in my free time. Prior to that, I worked as a bartender for 6 years, which gave me valuable experience in customer service and communication.</p>
        </div>
        <div className='w-4/5 h-4/5 relative place-self-center rounded-full'>
            <Image src={photos[index]} alt='photo of me' onMouseEnter={changePhoto} onMouseLeave={stopChangePhoto} style={{objectFit:'contain'}}  fill />
            <div className={`absolute bottom-0 left-[-30px] flex items-end flex-col ${hovered && `opacity-100 transition-opacity duration-1000 textDisappear`} `}>
                <p className='text-[#56876D]'>Hover the photo</p>
                <Image  src={arrow} width='30' height='30' alt='arrow' />
            </div>
        </div>
    </div>
  )
}

export default Introduction