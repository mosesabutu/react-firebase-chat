import './details.css'
export const Details = () => {
    return (
        <div className="detail ">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>John Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Priacy and Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">

                        <div className="photoItem">
                            <div className="photoDetails">
                                <img src="./rashford.jpg" alt="" />
                                <span>Photo-w/gg.png</span>
                            </div>
                            <img src="./download.png" className='icon' alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetails">
                                <img src="./rashford.jpg" alt="" />
                                <span>Photo-w/gg.png</span>
                            </div>
                            <img src="./download.png" className='icon' alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetails">
                                <img src="./rashford.jpg" alt="" />
                                <span>Photo-w/gg.png</span>
                            </div>
                            <img src="./download.png" className='icon' alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetails">
                                <img src="./rashford.jpg" alt="" />
                                <span>Photo-w/gg.png</span>
                            </div>
                            <img src="./download.png" className='icon' alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className='logOut'>Log Out</button>

            </div>
        </div>
    )
}
