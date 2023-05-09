import React, { useEffect, useState } from 'react'
import linkedin from '/public/icons8-linkedin.svg'
import github from '/public/icons8-github.svg'
import Image from 'next/image'
import Link from 'next/link'
import RedDot from '../RedDot'

function Socials() {

  return (
    <div className='fixed bottom-[45vh] right-5 flex flex-col p-2 gap-2 bg-[#282828] rounded-lg justify-center items-center'>
        <Link href='https://www.linkedin.com/in/frantisekkasik/' target='_blank'>
            <Image  alt='linkedin icon' width='30' height='30' src={linkedin} />
        </Link>
        <RedDot dimensions='10px'/>
        <Link href='https://github.com/kasikfrantisek' target='_blank'>
            <Image  alt='github icon' width='30' height='30' src={github} />
        </Link>
    </div>
  )
}

export default Socials