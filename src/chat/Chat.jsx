import EmojiPicker from 'emoji-picker-react'
import { useEffect, useRef, useState } from 'react'
const Chat = () => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")
    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behaviour: 'smooth' })
    }, [])
    const handleEmojiClick = (event) => {
        setText(p => p + event.emoji)
        setOpen(false)
    }
    return (
        <div className="flex-2 text-[14px] font-medium flex flex-col border-r-[#dddddd35] border-r-[1px] border-solid border-l-[1px]  border-l-[#dddddd35]">
            <div className="top p-4 border-b-[#dddddd35] border-b-[1px] border-solid flex items-center justify-between">
                <div className="user flex items-center gap-[15px]">
                    <img className="w-16 rounded-full object-cover" src="./avatar.png" alt="" />
                    <div className="flex flex-col gap-[5px]">
                        <span className="text-[18px] font-bold" >John Doe</span>
                        <p className="text-[14px] font-[300] text-[#a5a5a5a5]" >Lorem, ipsum dolor sit </p>
                    </div>
                </div>
                <div className="icons flex gap-[20px]">
                    <img className="w-[20px] h-[20px]" src="./phone.png" alt="" />
                    <img className="w-[20px] h-[20px]" src="./video.png" alt="" />
                    <img className="w-[20px] h-[20px]" src="./info.png" alt="" />
                </div>
            </div>
            <div className="center flex-1 p-4 overflow-y-scroll flex flex-col">
                <div className="message max-w-[70%] flex gap-4">
                    <img src="./avatar.png" className='w-8 h-8 rounded-full object-cover' alt="" />
                    <div className="texts flex flex-col gap-1 flex-1">
                        <p className='p-4 rounded-xl bg-[rgba(17,25,40,0.3)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span className='text-[13px]'>1 min ago</span>
                    </div>
                </div>
                <div className="message own max-w-[70%] flex self-end">
                    <div className="texts  flex flex-col gap-1 flex-1">
                        <img className='w-[100%] h-[300px] rounded-lg  object-cover' src="./rashford.jpg" alt="" />
                        <p className='bg-[#5183fe] p-5 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis temporibus eveniet non minus quas, porro modi doloremque quaerat voluptatibus maiores fuga praesentium facere repellendus, cumque sunt, reiciendis reprehenderit cupiditate?</p>
                        <span className='text-[13px]'>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom p-4 mt-auto border-t-[#dddddd35] border-t-[1px] border-solid flex items-center justify-between">
                <div className="icons flex gap-4">
                    <img className="w-5 cursor-pointer" src="./img.png" alt="" />
                    <img className="w-5 cursor-pointer" src="./camera.png" alt="" />
                    <img className="w-5 cursor-pointer" src="./mic.png" alt="" />
                </div>
                <input value={text} onChange={e => setText(e.target.value)} className="w-[22rem] p-[10px] rounded-xl text-[16px]  bg-[rgba(17,25,40,0.5)] border-none outline-none text-[aliceblue]" placeholder="Type a message" type="text" />
                <div className="emoji relative">
                    <img className="w-5 cursor-pointer" src="./emoji.png" alt="" onClick={() => setOpen(pre => !pre)} />
                    <div className="picker absolute bottom-[50px] left-0" >

                        <EmojiPicker open={open} onEmojiClick={handleEmojiClick} />
                    </div>
                </div>
                <button className="sendButton bg-[#5183fe] text-[aliceblue] p-2 border-none rounded-md cursor-pointer">Send</button>
            </div>
        </div>
    )
}

export default Chat