import React from 'react'
import { ContainerScroll } from '../components/Landing/ContainerScroll'
import { AnimatedTooltipPreview } from '../components/Landing/AnimatedTooltipPreview';
import { Button } from '../components/Landing/MovingBorderButton';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="min-h-screen w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Social Media
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://i.ibb.co/WBPNTx1/Screenshot-2024-05-26-215525.png"
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
        />
      </ContainerScroll>

      <div className="max-w-5xl mx-auto p-4">
        <h1 className="relative z-10 text-md md:text-5xl bg-clip-text text-black text-center font-medium">
          Join 1670+ users right now!
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Social, the best social media service on the web.
          We provide reliable, scalable, and customizable buddies for
          your life. Whether you&apos;re sending love confirmations,
          friendship reset requests.
        </p>
       
      
      <AnimatedTooltipPreview/>
      <div className='flex justify-center mb-10 '>

<Link to = "/home">
      <Button
        borderRadius="1.75rem"
        className="bg-white  text-black  border-neutral-200"
        >
        Get Started
      </Button>  
      </Link>
      </div>
      </div>

    </div>
    </div>
  );
}

export default LandingPage
