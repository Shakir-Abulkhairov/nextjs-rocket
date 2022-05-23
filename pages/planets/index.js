import Link from "next/link";
import Head from 'next/head';
import style from '../../styles/Planets.module.css';
const Planets = ({planets}) =>{
    return(
        <div >
            <Head>
                <title>Moons</title>
            </Head>
            {planets && 
                (
                    planets.map(planet =>{
                        return(
                          <Link key={planet.id} href={`/planets/${planet.id}`}>
                             <a>
                               <div className={style.order}>
                                    <h2 className={style.name}> {planet.englishName} 🌖</h2>
                               </div> 
                             </a>
                          </Link>       
                        )
                    })
                )
            }
        </div>
    );
}
export async function getStaticProps() {
    try {
        const response = await fetch(process.env.API_URL);
        const body = await response.json();
        if (!body) {
            return {
                notFound: true,
            }
        }
        return {
            props: {
                planets: body
            }
        }
    } catch (e) {
        return {
            props: {
                planets: null
            }
        }
    }
}

export default Planets;


// aroundPlanet: {planet: 'terre', rel: 'https://api.le-systeme-solaire.net/rest/bodies/terre'}
// discoveryDate: ""
// englishName: "Moon"
// gravity: 1.62
// id: "lune"
// isPlanet: false
// mass: {massValue: 7.346, massExponent: 22}
// name: "La Lune"
// polarRadius: 1736
