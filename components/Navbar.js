import Image from "next/image";
import Link from "next/link";
import style from "../styles/components/Navbar.module.css";
import Logo from "../public/Logo.png";
import { IconContext } from "react-icons";
import { MdMenu, MdClose } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        setMatches(window.matchMedia("(min-width: 650px)").matches)
    })


    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        window
        .matchMedia("(min-width: 650px)")
        .addEventListener("change", e => setMatches( e.matches ));
    });

    useEffect(() => {

    })
    return (
        <>
            {
                matches && (
                    <div className={style.navbar}>
                        <div className={style.logo_container}>
                            <Link href="/">
                                <a><Image src={Logo}></Image></a>
                            </Link>
                        </div>

                        <Link href="/about">
                            <a className={style.navbar_text}>About Me</a>
                        </Link>

                        <Link href="/motive">
                            <a className={style.navbar_text}>Motive</a>
                        </Link>
                    </div>
                )
            }

            {
                !matches && (
                    <div className={style.navbar_container}>
                        <button
                        className={style.button_toggle}
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {
                            menuOpen ? (
                                <IconContext.Provider value={{color: "white"}}>
                                    <MdClose className={style.icon_toggle} style={{color: "white"}}/>
                                </IconContext.Provider>
                            ) : (
                                <MdMenu className={style.icon_toggle}/>
                            )}
                        </button>
                        
                        {
                            menuOpen ? (
                                <div className={style.mobile_navbar}>
                                    <ul className={style.list_links}>
                                        <li className={style.list_item}>
                                            <Link href="/">
                                                <a className={style.mobile_text}>Home</a>
                                            </Link>
                                        </li>
                                        <li className={style.list_item}>
                                            <Link href="/about">
                                                <a className={style.mobile_text}>About Me</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="/motive">
                                                <a className={style.mobile_text}>Motive</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div></div>
                            )
                        }
                    </div>
                )
            }

        </>
    )
}

export default Navbar;