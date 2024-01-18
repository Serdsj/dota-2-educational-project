import HeroDescription from "./HeroDescription/HeroDescription"

export default function HeroDetailInfo ({currentId}) {
     
    let id = currentId
    return (
        <>
        <HeroDescription heroId={id}/>
        </>
    )
}