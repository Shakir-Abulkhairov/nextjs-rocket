import Link from 'next/link';
import Image from 'next/image';
const Header = () =>{
    return(
        <>
            <header>
               <div>
                    <Image src="/img/rocket.png" alt="Picture of the author"
                        width={50}
                        height={50}/>
               </div>
                <nav>
                    <Link href="/"><a>Домой</a></Link>
                    <Link href="/about"><a>О Нас</a></Link>
                    <Link href="/planets"><a>Спутники</a></Link>
                </nav>
            </header>
        </>
    );
}
export default Header;
