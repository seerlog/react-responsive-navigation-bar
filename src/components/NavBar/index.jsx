import React, { useState } from 'react';
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiFillBoxPlot } from "react-icons/ai";
import { AiFillMoon } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { AiFillSkin } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiFillRest } from "react-icons/ai";
import './navBar.css';

const menuItems = [
    { "ko": "메뉴1", "en": "menu1", "icon": <AiFillEdit /> },
    { "ko": "메뉴2", "en": "menu2", "icon": <AiFillBoxPlot /> },
    { "ko": "메뉴3", "en": "menu3", "icon": <AiFillMoon /> },
    { "ko": "메뉴4", "en": "menu4", "icon": <AiFillProduct /> },
    { "ko": "메뉴5", "en": "menu5", "icon": <AiFillSkin /> },
    { "ko": "메뉴6", "en": "menu6", "icon": <AiFillHeart /> },
    { "ko": "메뉴7", "en": "menu7", "icon": <AiFillVideoCamera /> },
    { "ko": "메뉴8", "en": "menu8", "icon": <AiFillRest /> },
]

export const NavBar = ({ ...props }) => {
    const [focusedMenu, setFocusedMenu] = useState("menu1");
    const [isFoldSideBar, setIsFoldSideBar] = useState(false);

    return (
        <>
            <PcNavigationBar
                props={props}
                focusedMenu={focusedMenu}
                setFocusedMenu={setFocusedMenu}
            />
            <MobileNavigationBar
                props={props}
                focusedMenu={focusedMenu}
                setFocusedMenu={setFocusedMenu}
                isFoldSideBar={isFoldSideBar}
                setIsFoldSideBar={setIsFoldSideBar}
            />
        </>
    );
};

const PcNavigationBar = ({ props, focusedMenu, setFocusedMenu }) => {
    return (
        <div className={['pc-nav-bar'].join(' ')} {...props}>
            <div className={['pc-nav-bar-logo'].join(' ')}
                onClick={() => { setFocusedMenu("menu1") }}>
                SAMPLE
            </div>
            {
                menuItems.map(menuItem =>
                    <PcNavigationBarItem
                        menuItem={menuItem}
                        focusedMenu={focusedMenu}
                        setFocusedMenu={setFocusedMenu} />
                )
            }
        </div>
    )
}

const PcNavigationBarItem = ({ menuItem, focusedMenu, setFocusedMenu }) => {
    return (
        <div
            className={['pc-nav-bar-menu', focusedMenu === `${menuItem.en}` && 'pc-nav-bar-menu-focused'].join(' ')}
            onClick={() => { setFocusedMenu(`${menuItem.en}`) }}>
            {menuItem.ko}
        </div>
    )
}

const MobileNavigationBar = ({ props, focusedMenu, setFocusedMenu, isFoldSideBar, setIsFoldSideBar }) => {
    return (
        <div className={['mobile-nav-bar', isFoldSideBar && 'mobile-nav-bar-fold'].join(' ')} {...props} >
            <div className={['mobile-nav-bar-head', isFoldSideBar && 'mobile-nav-bar-head-fold'].join(' ')}>
                <div className={['mobile-nav-bar-logo', isFoldSideBar && 'mobile-nav-bar-logo-fold'].join(' ')} onClick={() => { setFocusedMenu("menu1") }}>SAMPLE</div>
                <div className={['mobile-nav-bar-fold-button', isFoldSideBar && 'mobile-nav-bar-fold-button-fold'].join(' ')} onClick={() => { setIsFoldSideBar(!isFoldSideBar) }}>
                    {
                        isFoldSideBar ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />
                    }
                </div>
            </div>
            {
                menuItems.map(menuItem =>
                    <MobileNavigationBarItem
                        menuItem={menuItem}
                        focusedMenu={focusedMenu}
                        setFocusedMenu={setFocusedMenu}
                        isFoldSideBar={isFoldSideBar} />
                )
            }
        </div>
    );
}

const MobileNavigationBarItem = ({ menuItem, focusedMenu, setFocusedMenu, isFoldSideBar }) => {
    return (
        <div
            className={['mobile-nav-bar-menu', isFoldSideBar && 'mobile-nav-bar-menu-fold', focusedMenu === `${menuItem.en}` && 'mobile-nav-bar-menu-focused'].join(' ')}
            onClick={() => { setFocusedMenu(`${menuItem.en}`) }}>
            <div className={['mobile-nav-bar-menu-icon', isFoldSideBar && 'mobile-nav-bar-menu-icon-fold'].join(' ')}>
                {menuItem.icon}
            </div>
            <div className={['mobile-nav-bar-menu-label', isFoldSideBar ? 'mobile-nav-bar-menu-label-fold' : 'mobile-nav-bar-menu-label-unfold'].join(' ')}>
                {menuItem.ko}
            </div>
        </div>
    )
}