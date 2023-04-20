import RedDot from "../RedDot"
import CornerDots from "../CornerDots"

function Header() {

    

  return (
    <div className="bg-black w-full h-screen text-white flex justify-center items-center relative">
        <CornerDots />
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
                <h1 className=" font-bold text-4xl">František</h1>
                <RedDot dimensions="12px" />
                <h1 className=" font-bold text-4xl">Kašík</h1>
            </div>
            <h3 className="self-center mt-2">Full-stack Developer</h3>
            <a href="#about"><button>about me</button></a>
        </div>
    </div>
  )
}

export default Header