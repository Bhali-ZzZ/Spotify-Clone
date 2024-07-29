import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const SongItem = ({name , desc , image , id }) => {

    const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[150px] p-1 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt=''/>
      <p className='font-bold mt-2'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc.slice(0,35)}</p>
    </div>
  )
}

export default SongItem
