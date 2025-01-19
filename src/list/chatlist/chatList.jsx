import { useState } from "react"

export const ChatList = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="flex-1 overflow-y-scroll">
            <div className="flex items-center gap-4 p-4">
                <div className="flex-1 p-2 flex items-center gap-4 rounded-lg bg-[rgba(17,25,40,0.5)]">
                    <img className="w-5" src="./search.png" alt="" />
                    <input placeholder="Search..." className="flex-1 bg-transparent border-none outline-none text-[aliceblue]" type="text" />
                </div>
                <img className="w-8 h-8 bg-[rgba(17,25,40,0.5)] p-3 rounded-xl cursor-pointer"
                    src={addMode ? './minus.png' : "./plus.png"} alt="./plus.png"
                    onClick={() => setAddMode(prev => !prev)} />
            </div>
            <div className="item flex items-center gap-3 p-4 cursor-pointer border-b border-solid border-[#dddddd35]">
                <img className="object-cover w-12 h-12 rounded-full" src="./avatar.png" alt="" />
                <div className="gap-3 flex flex-col">
                    <span className="font-medium">John Doe</span>
                    <p className="font-light text-sm">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-2 p-4 cursor-pointer border-b border-solid border-[#dddddd35]">
                <img className="object-cover w-12 h-12 rounded-full" src="./avatar.png" alt="" />
                <div className="gap-3 flex flex-col">
                    <span className="font-medium">John Doe</span>
                    <p className="font-light text-sm">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-3 p-4 cursor-pointer border-b border-solid border-[#dddddd35]">
                <img className="object-cover w-12 h-12 rounded-full" src="./avatar.png" alt="" />
                <div className="gap-3 flex flex-col">
                    <span className="font-medium">John Doe</span>
                    <p className="font-light text-sm">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-3 p-4 cursor-pointer border-b border-solid border-[#dddddd35]">
                <img className="object-cover w-12 h-12 rounded-full" src="./avatar.png" alt="" />
                <div className="gap-3 flex flex-col">
                    <span className="font-medium">John Doe</span>
                    <p className="font-light text-sm">Hello</p>
                </div>
            </div>
            <div className="flex items-center gap-3 p-4 cursor-pointer border-b border-solid border-[#dddddd35]">
                <img className="object-cover w-12 h-12 rounded-full" src="./avatar.png" alt="" />
                <div className="gap-3 flex flex-col">
                    <span className="font-medium">John Doe</span>
                    <p className="font-light">Hello</p>
                </div>
            </div>


        </div>
    )
}
