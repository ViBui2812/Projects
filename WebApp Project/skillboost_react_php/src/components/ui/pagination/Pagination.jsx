import React from 'react'
import ChevronDown from '../../icons/Arrow/ChevronDown'

const Pagination = () => {
  return (
    <div className="relative w-auto flex flex-row items-center justify-center gap-[12px] text-left text-sm text-text-secondary">
    <div className="relative">Trang</div>
        <div className="rounded flex flex-row items-center justify-center py-1.5 px-2 gap-[11px] label-small border-[1px] border-solid border-text-secondary">
        <div className="relative">1</div>
        <div>
        <ChevronDown className='relative text-text-secondary ' strokeWidth={1.5}/>
        </div>
    </div>
    <div className="relative">của 23</div>
    </div>
  )
}

export default Pagination