import React from "react"
import { useNavigate } from "react-router-dom"
import art1 from "../assets/images/image_1.jpg"
import art2 from "../assets/images/image_7.jpg"
import art3 from "../assets/images/image_6.jpg"



const Portfolio: React.FunctionComponent = (props) => {

  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div className=''>
      <div className='bg-[#fbbbc9] border-[#fbbbc9]'>
        <div className="flex items-center justify-around p-5 space-x-20 text-6xl font-amatic">
          <div className="transition duration-500 hover:scale-110">My Art</div>
          <div onClick={navigateHome} className="transition duration-500 hover:scale-110">Home</div>
          <div className="transition duration-500 hover:scale-110">Store</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-5 lg:grid-cols-3 sm:grid-cols-2">
        <img
          className="object-cover w-full h-full "
          src={art1} alt={'hello'}
        />
        <img
          className="object-cover w-full h-full"
          src={art2} alt={'hello'}
        />
        <img
          className="object-cover w-full h-full"
          src={art3} alt={'hello'}
        />
        <img
          className="object-cover w-full h-full"
          src={art1} alt={'hello'}
        />
        <img
          className="object-cover w-full h-full"
          src={art3} alt={'hello'}
        />
        <img
          className="object-cover w-full h-full"
          src={art2} alt={'hello'}
        />
        <img
          className="object-cover w-full h-full"
          src={art2} alt={'hello'}
        />
        <img
          className="object-cover w-full h-full"
          src={art1} alt={'hello'}
        />

      </div>

    </div>
  )
}
export default Portfolio
