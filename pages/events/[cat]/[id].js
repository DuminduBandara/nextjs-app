import React,{useRef, useState} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion';



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

const IDPage = ({data}) => {

    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');
  
    const onSubmit = async (e) => {
      e.preventDefault();
      const emailValue = inputEmail.current.value;
      const eventId = router?.query.id;
  
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
      if (!emailValue.match(validRegex)) {
        setMessage('Please introduce a correct email address');
      }
  
      try {
        const response = await fetch('/api/emailRegister', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: emailValue, eventId }),
        });
  
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setMessage(data.message);
        inputEmail.current.value = '';
      } catch (e) {
        console.log('ERROR', e);
      }
    };
  
    return (
      <div className="event_single_page">
        <header className="text-center w-full h-[20vh] lg:h-[40vh] flex justify-center items-center text-3xl md:text-6xl font-body font-[500] bg-gray-200 px-6">
          <motion.h1
            variants={headerLoad}
            initial= "init"
            animate="animate"
          >{data.title}</motion.h1>        
        </header>
        <motion.div 
          variants={eventsLoad}
          initial="init"
          animate="animate"
          className="py-[5rem] px-[2rem] md:px-[5rem] lg:px-[10rem]">
          <div className="w-[320px] md:w-[700px] lg:w-[1000px] md:h-[500px] overflow-hidden rounded-md">
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src={data.image} width={'1000'} height={'500'} alt={data.title} />
            </motion.div>
          </div>
          <p className="text-[1.5rem] font-para font-semibold py-5">{data.description} </p>
          <form onSubmit={onSubmit} className="font-body w-full">
            <label className='text-xl'>Get Registered for this event!</label>
            <input
              ref={inputEmail}
              id="email"
              placeholder="Please insert your email here"
              className='mx-4 border-solid border-[2px] rounded-md py-[0.4rem] px-4 border-gray-500 w-[40%]  '
            />
            <button type="submit" className='bg-black text-white text-lg p-2 rounded-md'>Submit</button>
          </form>
          <motion.p 
            initial={{
              opacity:0,
              x:200,
            }}
            animate={{
              opacity:1,
              x:0,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
            className='text-xl text-red-500 font-body my-5'
          >{message}</motion.p>
        </motion.div>
      </div>
    );
  };
 
export default IDPage;

export async function getStaticPaths(){
    const data = await import('/data/db.json');
    const allEvents = data.allEvents;
    const allPaths = allEvents.map((path) => {
        return{
            params: {
                cat: path.city,
                id: path.id 
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const { allEvents } = await import('/data/db.json');
    const eventData = allEvents.find((en) => id === en.id);
  
    return {
      props: { data: eventData },
    };
}
