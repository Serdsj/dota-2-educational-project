import PropTypes from 'prop-types';
import styleBackground from "./Background.module.scss";

export default function Background({ children, className }) {
    return (
        <div className={`${styleBackground["background"]} ${className}`}>
            {children}
        </div>
    );
}

Background.propTypes = {
    children: PropTypes.node, // React элементы, строки, числа, фрагменты и т.д.
    className: PropTypes.string // Строка
};