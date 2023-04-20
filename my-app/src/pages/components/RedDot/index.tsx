import { useState } from "react"

function RedDot({dimensions}:{dimensions:string}) {
    const [clicked, setClicked] = useState<boolean>(false);

    const visible = !clicked ? 'bg-[#56876D] rounded-full m-2 inline-block dot' : 'opacity-0 rounded-full m-2 inline-block '
  
    return (
        <div className={visible} style={{width: dimensions, height: dimensions }} onClick={() => setClicked(true)} ></div>
    )
}

export default RedDot