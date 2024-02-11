import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/BackgroundPage/Background";
import styleContent from "./MainLayout.module.scss";
import PropTypes from 'prop-types';


export default function MainLayout({ children, className }) {
    return (
    <>
        <Background className={className}>  
          <Header />
          <main className={styleContent["main"]}>
           {children}
          </main>
          </Background>
          <Footer />
    </>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node, 
    className: PropTypes.string, 
}