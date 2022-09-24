import React from "react"
import banner from "../assets/images/image_13.jpg"

const LandingPage: React.FunctionComponent = (props) => {
  return (
    <div className="bg-[#fdd4dc] w-screen h-screen p-5 space-y-2">
      <div className=" bg-white border rounded-t-md border-[#fa8aa0]">
        {/* BANNER */}
        <div className="relative">
          <div className="absolute text-center text-7xl w-1/3">Kitty's Portfolio</div>
          <img className="object-cover rounded-md" src={banner} alt={"banner"} />
        </div>
      </div>
      <div className="bg-[#fbbbc9] border rounded-b-md border-[#fa8aa0]">
        {/* Content */}
        <div className="flex items-center justify-around p-5">
          <div>My Art</div>
          <div>My Art</div>
          <div>My Art</div>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
