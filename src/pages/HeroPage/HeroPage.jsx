import MainLayout from "../../layouts/MainLayout/MainLayout";
import HeroDetailInfo from "../../components/HeroDetailInfo/HeroDetailnfo";
import { useParams } from "react-router-dom";
import { useHeroesList } from "../../query/useHeroesList";
import { useHeroesData } from "./useHeroesData";

export default function HeroPage() {
  const { data: sortedData } = useHeroesList();
  const { heroName } = useParams(); // через пропсы передать можно
  const {  
    currentHeroData,
    prevHeroData,
    nextHeroData,
    isLoading,
    isError,
    error, } = useHeroesData(
    sortedData,
    heroName
  );

  console.log(`это currentHeroData ${currentHeroData} `);
  console.log(`это prevHeroData ${prevHeroData} `);
  console.log(`это nextHeroData ${nextHeroData} `);
  // console.log(`это sortedData ${sortedData} `);
  // console.log(`это isLoading ${isLoading} `);
  // console.log(`это error ${error} `);
  // console.log(`это isError ${isError} `);

  return (
    <MainLayout>
      <HeroDetailInfo />
    </MainLayout>
  );
}
