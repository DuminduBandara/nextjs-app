import Image from 'next/image';
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion';


const eventsLoad = {
    init: {
        opacity:0,
        y:100
    },
    animate:{
        opacity:1,
        y:0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
        }        
    },
}

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


const Index = ({data}) => {
    return ( 
        <div className=''> 
            <header className="w-full h-[20vh] lg:h-[40vh] flex justify-center items-center text-3xl md:text-6xl font-body font-[500] bg-gray-200">
                <AnimatePresence>
                    <motion.h1
                        variants={headerLoad}
                        initial= "init"
                        animate="animate"
                    >Choose City</motion.h1>
                </AnimatePresence>
            </header>
            <motion.main 
                variants={eventsLoad}
                initial="init"
                animate="animate"
                className="py-[5rem] px-[3rem] md:px-[5rem] lg:px-[10rem]">
                {data.map((en => (
                    <Link 
                        className="w-100 h-100 flex flex-col mb-20"
                        key={en.id} href={`/events/${en.id}`} passHref>
                        <div className="w-[300px] md:w-[700px] lg:w-[1000px] md:h-[500px] overflow-hidden rounded-md">
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.9 }}

                            >
                                <Image src={en.image} alt={en.name} width={'1000'} height={'500'}/>
                            </motion.div>
                        </div>                        
                        <h2 className="text-2xl md:text-6xl md:my-4 font-body text-center">{en.title}</h2>
                    </Link>
                )))}
            </motion.main>
            
        </div>
     );
}
 
export default Index;

export async function getStaticProps() {
    
    const {events_categories} = await import('/data/db.json');
    
    return{
        props:{
            data: events_categories
        }
    }
}

