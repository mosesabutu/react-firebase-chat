
export const Userinfo = () => {
    return (
        <div className="p-5 flex justify-between items-center">
            <div className="flex items-center gap-5">
                <img className="w-12 h-12 rounded-full object-cover" src="./avatar.png" alt="profile" />
                <h2>John Doe</h2>
            </div>
            <div className="flex gap-5">
                <img className="cursor-pointer w-5 h-5" src="./more.png" alt="more options" />
                <img src="./video.png" className="cursor-pointer w-5 h-5" alt="video" />
                <img src="./edit.png" className="cursor-pointer w-5 h-5" alt="edit" />
            </div>
        </div>
    )
}
