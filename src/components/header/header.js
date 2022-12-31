import Link from "next/link";
import Image from "next/image";



const Header = () => {
    return (
      <div>
        <div className="flex justify-around items-center py-2 px-5 bg-white drop-shadow-sm font-body">
          <div>
            <Link href="/">
              <Image src="/logo.jpg" width={80} height={80}/>
            </Link>
          </div>
          <nav className="flex justify-between items-center w-[60%] md:w-[50%] lg:w-[30%] text-lg">
              <Link href="/" passHref>Home</Link>
              <Link href="/about" passHref>About</Link>
              <Link href="/events" passHref>Events</Link>
          </nav>
        </div>
      </div>
    );
}
 
export default Header;