import React from "react"
import banner from "../assets/images/image_13.jpg"
import art1 from "../assets/images/image_1.jpg"
import art2 from "../assets/images/image_7.jpg"
import art3 from "../assets/images/image_6.jpg"
import { useNavigate } from "react-router-dom"



const LandingPage: React.FunctionComponent = (props) => {
  const navigate = useNavigate();
  const navigateAboutMe = () => {
    // 👇️ navigate to /
    navigate('/about');
  }
  const navigatePortfolio = () => {
    // 👇️ navigate to /
    navigate('/portfolio');
  }

  return (
    <div className="w-full h-full ">
      <div className="bg-white border rounded-t-md">
        {/* BANNER */}
        <div className="relative">
          <div className="absolute w-1/4 m-10 text-center right-40 text-9xl font-amatic">
            Kitty's Portfolio
          </div>
          <img className="object-cover rounded-md" src={banner} alt={"banner"} />
        </div>
      </div>
      <div className="bg-[#fbbbc9] border rounded-b-md border-[#fbbbc9]">
        {/* Content */}
        <div className="flex items-center justify-around p-5 font-amatic text-8xl">
          <div onClick={navigatePortfolio}  className="transition duration-500 hover:scale-110">My Art</div>
          <div onClick={navigateAboutMe} className="transition duration-500 hover:scale-110">About Me</div>
          <div className="transition duration-500 hover:scale-110">Store</div>
        </div>
      </div>
      {/* BODY OF PAGE */}
      <div className='relative mt-5'>
        <div className='relative w-full h-[700px]'>
          <div
            id="image_container_one"
            className="transition duration-100 hover:scale-105 p-20 flex items-center justify-around w-[45%] h-[100%] bg-white rounded-lg top-5 left-20">
            <img className="object-fill rounded-lg" src={art1} alt={"banner"} />
          </div>
          <button className='transition duration-1000 hover:scale-150 shadow-md absolute w-[300px] h-[100px] z-10 top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 rounded-full border-[#fa8aa0]'>
            <div className='text-6xl font-amatic'>View my Art</div>
          </button>
          <div
            id="image_container_two"
            className="transition duration-100 hover:scale-105 p-20 flex items-center justify-around w-[45%] h-[100%] bg-[#FFE8D0] rounded-lg top-5 right-20">
            <img className="object-fill rounded-lg" src={art2} alt={"banner"} />
          </div>
        </div>
        <div className='relative w-full h-[700px]'>
          <div
            id="image_container_three"
            className="transition duration-100 hover:scale-105 p-20 flex items-center justify-around w-[92%] h-[100%] bg-white -top-[295px] rounded-lg  left-20">
            <img className="object-contain rounded-lg" src={art3} alt={"banner"} />
          
      </div>
      </div></div>
      <div>
        <div className="flex items-center justify-around  h-[1000px] p-5 font-amatic">
          <img className="object-fill rounded-full h-[800px] w-[800px]" src={art3} alt={"banner"} />
          <div className="p-5 space-y-10">
            <div className=' text-8xl'>Hey I'm Kitty</div>
            <div className='text-6xl'>This is a bunch of filler text to fill in later with a nice bio of what katie wants to say</div>
            <button onClick={navigateAboutMe} className='transition duration-1000 hover:scale-150 shadow-md  w-[300px] h-[100px] bg-white border-2 rounded-full border-[#fa8aa0]'>
              <div className='text-6xl font-amatic'>About Me</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
