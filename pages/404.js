import Image from 'next/image';
import style from '../styles/Notfound.module.css';
import img from '../public/img/not-found.png';
const Error =() =>{
    return(
        <div className={style.content}>
            <div className={style.img}>
                <Image  src={img} width={350} height={350}/>
            </div>
        </div>
    )
}
export default Error;