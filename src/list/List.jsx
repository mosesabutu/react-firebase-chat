import { ChatList } from "./chatlist/chatList"
import { Userinfo } from "./userinfo/userinfo"

export const List = () => {
    return (
        <div className="flex flex-col flex-1">
            <Userinfo />
            <ChatList />
        </div>
    )
}
