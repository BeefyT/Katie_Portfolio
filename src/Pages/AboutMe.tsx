import React, { useState } from "react"
import art3 from "../assets/images/image_6.jpg"
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"



const AboutMe: React.FunctionComponent = (props) => {

  const [myHeroAccordionOpen, setMyHeroAccordioOpen] = useState(false)
  const [myPonyOpen, setMyPonyOpen] = useState(false)
  const [ladyBugOpen, setLadyBugOpen] = useState(false)

  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div className='space-y-10'>
      <div className='bg-[#fbbbc9] border-[#fbbbc9]'>
        <div className="flex items-center justify-around p-5 space-x-20 text-6xl font-amatic">
          <div className="transition duration-500 hover:scale-110">My Art</div>
          <div onClick={navigateHome} className="transition duration-500 hover:scale-110">Home</div>
          <div className="transition duration-500 hover:scale-110">Store</div>
        </div>
      </div>
      <div className="w-full h-full p-5">

        <div className='flex space-x-10'>
          <img className="object-fill rounded-full h-[800px] w-[800px]" src={art3} alt={"banner"} />
          <div className='space-y-5'>
            <div className='text-center text-9xl font-amatic'>Hey I'm Kitty, come get to know me!</div>
            <div className='text-4xl font-amatic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat nibh sed pulvinar proin gravida hendrerit. Mauris in aliquam sem fringilla ut morbi tincidunt. Sit amet consectetur adipiscing elit duis tristique sollicitudin. Mauris commodo quis imperdiet massa. Felis donec et odio pellentesque diam volutpat commodo. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Integer eget aliquet nibh praesent tristique magna sit amet purus. Cras semper auctor neque vitae. Tincidunt augue interdum velit euismod in pellentesque. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Sed adipiscing diam donec adipiscing tristique risus nec. Ut pharetra sit amet aliquam. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Elementum tempus egestas sed sed risus pretium quam. Viverra nibh cras pulvinar mattis nunc sed. Tempor commodo ullamcorper a lacus. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Est velit egestas dui id ornare arcu odio. Felis eget velit aliquet sagittis id.

</div>

          </div>
        </div>
        <div className='w-full p-5 space-y-10'>
          <div className='text-center text-9xl font-amatic'>
            My Passions
          </div>
          <div className="accordion bg-[#fbbbc9] border rounded-md border-[#fbbbc9]">
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => setMyHeroAccordioOpen(!myHeroAccordionOpen)}
              >
                <div className='flex items-center justify-between'><div></div><div className='text-center text-7xl font-amatic border-1'>My Hero</div><div className='p-4'><FaPlus /></div></div>
              </div>
              {myHeroAccordionOpen && <div className="accordion-content">
                <div className='text-4xl font-amatic bg-white border rounded-md border-[#fbbbc9] p-4'>My favorite character is bakugo, he is so dreamy and I love him. His power is way cool!</div></div>}
            </div>
          </div>
          <div className="accordion bg-[#fbbbc9] border rounded-md border-[#fbbbc9]">
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => setMyPonyOpen(!myPonyOpen)}
              >
                <div className='flex items-center justify-between'><div></div><div className='text-center text-7xl font-amatic border-1'>My Little Pony</div><div className='p-4'><FaPlus /></div></div>
              </div>
              {myPonyOpen && <div className="accordion-content">
                <div className='text-4xl font-amatic bg-white border rounded-md border-[#fbbbc9] p-4'>I love my little pony and love getting my brother to watch it and getting my mom angry</div></div>}
            </div>
          </div>
          <div className="accordion bg-[#fbbbc9] border rounded-md border-[#fbbbc9]">
            <div className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => setLadyBugOpen(!ladyBugOpen)}
              >
                <div className='flex items-center justify-between'><div></div><div className='text-center text-7xl font-amatic border-1'>Lady Bug</div><div className='p-4'><FaPlus /></div></div>
              </div>
              {ladyBugOpen && <div className="accordion-content">
                <div className='text-4xl font-amatic bg-white border rounded-md border-[#fbbbc9] p-4'>My favorite character is bakugo, he is so dreamy and I love him. His power is way cool!</div></div>}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default AboutMe
