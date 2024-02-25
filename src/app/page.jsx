import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* image comtainer start */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.png" alt="" fill  className="object-contain"/>
    </div>
    {/* image comtainer end */}

  {/* text conatainer part start */}
  <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to the world of sanal </h1>

      <p className="md:text-xl">Welcome to the tech world of sanal where you will be amased with the skills and knowledge of me</p>
      
      <div className="w-full flex gap-4">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">My Works</button>
        <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">Contact Me</button>
      </div>
  </div>
  {/* text conatainer part end */}

  </div>
  )
  
};

export default Homepage;
