import {motion} from 'framer-motion';
const headerLoad = {
    init: {
        opacity:0,
        x:-500
    },
    animate:{
        opacity:1,
        x:0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        }        
    }
  }

const About = () => {
    return ( 
        <div className='min-h-[100vh]'>
            <header className="w-full h-[20vh] lg:h-[40vh] flex justify-center items-center text-3xl md:text-6xl font-body font-[500] bg-gray-200 px-6">
                <motion.h1
                    variants={headerLoad}
                    initial= "init"
                    animate="animate"
                >About Us</motion.h1>
            </header>
            <p className="py-[5rem] px-[2rem] md:px-[5rem] lg:px-[10rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            
        </div>
        
     );
}
 
export default About;