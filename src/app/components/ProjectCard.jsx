import React from 'react';
import Bracket from "../../../public/bracket.svg";
import Eye from "../../../public/eye.svg";
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div 
        className='h-52 md:h-72 rounded-b-xl relative group' 
        style={{ background: `url(${imgUrl})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          <Link 
            href={previewUrl}
            className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center'
          >
            <Image 
              src={Eye} 
              alt='eye' 
              height={30}
              width={30}
              className='text-[#ADB7BE] cursor-pointer group-hover/link:text-white' 
            />
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
