import React from 'react'
import './NavBar.css'
import { 
    HiOutlineMenu, 
    HiOutlineViewGrid, 
    HiOutlineSearch, 
    HiOutlineUser, 
    HiOutlineChatAlt2, 
    HiOutlineChartPie,
    HiOutlineFolder,
    HiOutlineTemplate,
    HiOutlineHeart,
    HiOutlineCog,
    HiOutlineLogout
} from "react-icons/hi";

function NavBar() {

    function toggleActive() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("active");
    }

    return (
        <nav className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <img className="logo_img" src="https://cdn.iconscout.com/icon/free/png-256/trakt-3627343-3029751.png" alt="Logo" />
                    <div className="logo_name">Looker Manager</div>
                </div>
                <div id="btn" onClick={toggleActive} ><HiOutlineMenu /></div>
            </div>
            <ul className="nav_list">
                <li>
                    <span className="list_icon search-btn" onClick={toggleActive}><HiOutlineSearch /></span>
                    <input type="text" placeholder="Search..." />
                    <span className="tooltip">Search</span>
                </li>
                <li>
                    <a href="#0">
                        <span className="list_icon"><HiOutlineViewGrid /></span>
                        <span className="links_name">Dashboards</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li>
                    <a href="#0">
                        <span className="list_icon"><HiOutlineChartPie /></span>
                        <span className="links_name">Looks</span>
                    </a>
                    <span className="tooltip">Looks</span>
                </li>
                <li>
                    <a href="#0">
                        <span className="list_icon"><HiOutlineTemplate /></span>
                        <span className="links_name">Boards</span>
                    </a>
                    <span className="tooltip">Boards</span>
                </li>
                <li>
                    <a href="#0">
                        <span className="list_icon"><HiOutlineHeart /></span>
                        <span className="links_name">Favourites</span>
                    </a>
                    <span className="tooltip">Favourites</span>
                </li>
                <li>
                    <a href="#0">
                        <span className="list_icon"><HiOutlineFolder /></span>
                        <span className="links_name">File Manager</span>
                    </a>
                    <span className="tooltip">File Manager</span>
                </li>
                <li>
                    <a href="#0">
                        <span className="list_icon"><HiOutlineChatAlt2 /></span>
                        <span className="links_name">Messages</span>
                    </a>
                    <span className="tooltip">Messages</span>
                </li>
                <li>
                    <a href="#0">
                        <span className="list_icon"><HiOutlineUser /></span>
                        <span className="links_name">User</span>
                    </a>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <a href="#0">
                        <span className="list_icon"><HiOutlineCog /></span>
                        <span className="links_name">Settings</span>
                    </a>
                    <span className="tooltip">Settings</span>
                </li>
            </ul>
            <div className="profile_content">
                <div className="profile">

                    <div className="profile_details">
                        <img src="https://cdn.petpress.net/wp-content/uploads/2020/04/12013224/superhero-cat-names.jpg" alt="Profile" />          
                        <div className="name_job">
                            <div className="name">Eliott Perl</div>
                            <div className="job">BI Developer</div>
                        </div>
                    </div>
                    <div id="logout">
                        <HiOutlineLogout />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;