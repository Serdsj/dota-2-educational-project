
import styleBackground from "./Background.module.scss"

export default function Background ({ children }) {
    return (
        <div className={styleBackground["background"]}>
            {children}
        </div>
    );
}