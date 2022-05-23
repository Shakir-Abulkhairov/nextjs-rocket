import Head from 'next/head';
import style from '../../styles/PlanetDetails.module.css';
const PlanetDetails = ({planet}) =>{
    if(!planet) return 'oops,they are all destroyed'
    const {name,src,gravity,discoveryDate,discoveredBy,polarRadius,isPlanet,id} = planet
    return(
        <>
           {planet && <div>
                    <Head>
                        <title>{`Moon:${id}`}</title>
                    </Head>
                    <div className={style.img}>
                        <img src={src} />
                    </div>
                    <div  className={style.info}>
                        <h1>Название:{name || 'данных нет'}</h1>
                        <h2>Гравитация:{gravity || 'данных нет'}</h2>
                        <h2>Дата открытия:{discoveryDate || 'данных нет'}</h2>
                        <h2>Ученый открывший:{discoveredBy || 'данных нет'}</h2>
                        <h2>Полярный Радиус:{polarRadius || 'данных нет'}</h2>
                        <h2>{isPlanet ? '' : 'Не'} является планетой</h2>
                    </div>
               </div>}
        </>
    )
}
export async function getServerSideProps({query}) {
    const res = await fetch(`${process.env.API_URL}/${query.id}`)
    const planet = await res.json()
    
    return {
        props:{
            planet:planet
        }
    }
  
}
export default PlanetDetails;


