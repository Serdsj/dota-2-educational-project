import styleFooter from "./Footer.module.scss"
import valveLogo from "../../img/valve_logo.png"
import dotaLogo from "../../img/dota_footer_logo.png"

export default function Footer () {
    return (
        <footer className={styleFooter["footer"]}>
            <div className={styleFooter["wrapper-footer-content"]}>
     <div className={styleFooter["logos"]}>
        <img width="130" height="30" src={valveLogo}  alt="valve logo" className={styleFooter["company-logos"]} />
        <img  width="130" height="30"src={dotaLogo} alt="dota 2 logo" className={styleFooter["company-logos"]} />
     </div>
     <p className={styleFooter["official-info"]}>Dota and the Dota logo are trademarks and/or registered trademarks of Valve Corporation. 2023 Valve Corporation, all rights reserved.</p>
     </div>
        </footer>
    )
}