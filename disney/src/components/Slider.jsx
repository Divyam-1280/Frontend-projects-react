import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
const Screenwidth = window.innerWidth;
function Slider() {
  const [MovieList,SetMovieList] = useState([]);
  const ElementRef = useRef();
  useEffect(()=>{
      GetTrendingMovies();
  },[])

  const GetTrendingMovies=()=>{
    GlobalApi.GetTrendingVideos.then(resp=>{
      console.log(resp.data.results);
      SetMovieList(resp.data.results);
    })
  }

  const SliderRight=(element)=>{
    element.scrollLeft+=Screenwidth-110;
  }
  const SliderLeft=(element)=>{
    element.scrollLeft-=Screenwidth-110;
  }

  return (
    <div>
      <HiChevronLeft className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer hidden md:block bg-transparent" onClick={()=>SliderLeft(ElementRef.current)} />
      <HiChevronRight className="text-white text-[30px] absolute mx-8 right-0 mt-[150px] cursor-pointer hidden md:block bg-transparent" onClick={()=>SliderRight(ElementRef.current)} />

    <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth" ref={ElementRef}>
      {MovieList.map((item,index)=>(
        <img src={IMAGE_BASE_URL+item.backdrop_path} className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:outline outline-offset-2 outline-blue-500 transition-all duration-100 ease-in-out" />
      ))}
    </div>
    </div>
  )
}

export default Slider