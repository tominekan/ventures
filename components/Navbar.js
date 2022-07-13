import Image from "next/image";
import Link from "next/link";
import style from "../styles/components/Navbar.module.css";
import Logo from "../public/Logo.png";


const Navbar = () => {
    return (
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

export default Navbar;