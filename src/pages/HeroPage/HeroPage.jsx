import MainLayout from "../../layouts/MainLayout/MainLayout";
import HeroDetailInfo from "../../components/HeroDetailInfo/HeroDetailnfo";
import { useParams } from 'react-router-dom';


export default function HeroPage() {

  const { heroName } = useParams(); // через пропсы передать можно 

  

  return ( 
    <MainLayout>
      <HeroDetailInfo />  
    </MainLayout>
  ) 
}
