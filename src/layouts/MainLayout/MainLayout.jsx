import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/BackgroundPage/Background";
import styleContent from "./MainLayout.module.scss";


export default function MainLayout({ children }) { // это скелет
    return (
    <>
        <Background> 
          <Header />
          <main className={styleContent["main"]}>
           {children}
          </main>
          </Background>
          <Footer />
        
    </>
    )
}