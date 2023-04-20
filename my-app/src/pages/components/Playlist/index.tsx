import React, { useEffect, useState } from 'react'
import spotifyIcon from '/public/icons8-spotify.svg'
import Image from 'next/image'

function Playlist() {
    const [hidePlayer, setHidePlayer] = useState(true);
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHideText(!hideText);
    }, 4000);
    return () => clearTimeout(timeout);
  }, ['', hidePlayer]);

  const handleTextTransitionEnd = () => {
    if (hideText) {
      setTextDisplay('none');
    }
  };

  const togglePlayer = () => {
    setHidePlayer(!hidePlayer);
    setTextDisplay('block');
    setHideText(!hideText);
  };

  const [textDisplay, setTextDisplay] = useState('block');

  return (
    <div className='fixed bottom-10 left-10'>
        <div onClick={togglePlayer} className={!hidePlayer ? 'hidden' : 'flex flex-row items-center hover:cursor-pointer bg-[#282828] p-3 rounded-2xl'}>
            <Image  alt='spotify icon' width='40' height='40' src={spotifyIcon} />
            <p className={`text-white ml-2 transition-opacity duration-1000 ${hideText ? 'opacity-0' : 'opacity-100'}`} style={{ display: textDisplay }} onTransitionEnd={handleTextTransitionEnd}>
                This keeps me focused
            </p>
        </div>
        <div onClick={togglePlayer} className={hidePlayer ? 'hidden' :'raunded-xl w-full h-[100px]'}>
            <p className='text-[#56876D] font-bold hover:cursor-pointer text-s text-end'>&times;</p>
            <iframe   src="https://open.spotify.com/embed/playlist/37i9dQZF1EId5SvHK2QYmJ?utm_source=generator&theme=0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>
  )
}

export default Playlist