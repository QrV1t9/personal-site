import github from "./icons/github.png"
import telegram from "./icons/telegram.png"
import {useEffect, useState} from "react";

export default function App() {
    const [display, setDisplay] = useState("opacity-0")
    useEffect(() => {
        setTimeout(() => {
            setDisplay("opacity-100")
        }, 500)
    }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen container min-w-full">
        <section>
            <div className="text-text/75 font-medium"><span className="text-53px">Hello</span>, <span className="text-32px">i am</span></div>
            <div className={"transition-opacity duration-700 text-text/100 text-8xl font-extrabold relative right-3 pt-1 " + display}>QrV1t9</div>
            <div className="text-text/75 text-36px font-medium">Front-end developer</div>
            <div className="text-text/75 text-36px pt-7 text-center font-medium">My socials:</div>
        </section>
        <section className="w-44 h-24 flex items-center justify-between pt-3">
            <a className="cursor-pointer" href="https://github.com/qrv1t9"><img src={github} alt="" className="h-20"/></a>
            <a className="cursor-pointer" href="https://t.me/qrv1t9"><img src={telegram} alt="" className="h-20"/></a>
        </section>
    </div>
  )
}

