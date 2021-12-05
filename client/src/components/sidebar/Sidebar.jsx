import './sidebar.css';
import {
    RssFeed,
    Chat,
    Group,
    Bookmark,
    HelpOutline,
    Event,
} from '@material-ui/icons';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">FAQ</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">
                    Show More
                </button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/dp.jpg" alt="" />
                        <span className="sidebarFriendName">King Dragonis</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/dp.jpg" alt="" />
                        <span className="sidebarFriendName">Vineeth Dragonis</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/dp.jpg" alt="" />
                        <span className="sidebarFriendName">Absolute Dominator</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/dp.jpg" alt="" />
                        <span className="sidebarFriendName">Emperor Vineeth Dragonis</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/dp.jpg" alt="" />
                        <span className="sidebarFriendName">Ruler of the multiverse</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}