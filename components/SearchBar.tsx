"use client"

import Image from "next/image"
import React, {useState} from 'react'
import {SearchManufacturer} from './'

const SearchBar = () => {

  const [manufacturer, setManuFacturer] = useState('')

  const [model, setModel] = useState('')

  const handleSearch = ()=>{

  }

  const SearchButton = ({otherClases}:{otherClases:string}) =>(
    <button type="submit" className={`-ml-3 z-10 ${otherClases}`}>
      <Image 
        src="/magnifying-glass.svg"
        alt="magnifiying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClases="sm:hidden"/>
      </div>
      <div className="searchbar__item">
        <Image 
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input type="text" name="model" value={model} onChange={(e)=>setModel(e.target.value)} placeholder="Tiguan" className="searchbar__input"/>
      </div>
    </form>
  )
}

export default SearchBar