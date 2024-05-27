import Info from '../../icons/Warning/Info';

const AlertInfo = ({children}) => {
  return (
    <div className="flex max-w-[464px] w-full justify-start items-start p-[12px] gap-[12px] body-large rounded-[8px] shadow-[0_0_24px_0_rgba(144, 252, 189, 0.50)] bg-[#F7F3FF] text-[#4B0CCF]">
      <div className='pt-[2px]'>
        <Info
          width="20px"
          height="20px"
        />
      </div>
      {children}
    </div>
  )
}

export default AlertInfo