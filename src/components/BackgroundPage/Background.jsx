
import styleBackground from "./Background.module.scss";

export default function Background({ children, className }) {
    return (
        <div className={`${styleBackground["background"]} ${className}`}>
            {children}
        </div>
    );
}