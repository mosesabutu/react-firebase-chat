import Chat from "./chat/Chat"
import { Details } from "./details/details"
import { List } from "./list/List"
import Login from "./login/Login"
import Notification from "./Notifications/notification"

const App = () => {
  const user = true
  return (
    <div className='container flex'>
      {
        user ? (
          <>
            <List />
            <Chat />
            <Details /></>
        ) : (<Login />)
      }
      <Notification />
    </div>
  )
}

export default App