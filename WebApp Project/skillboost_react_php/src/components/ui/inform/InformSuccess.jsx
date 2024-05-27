import Check from '../../icons/Interface/Check';

const InformSuccess = ({children}) => {
  return (
    <div className="flex absolute top-[24px] left-[800px] w-auto bg-sematic-green justify-center items-center gap-2 px-7 py-4 border body-large  text-white rounded-[8px] p-10 shadow-2xl">
      <Check 
        width="24px"
        height="24px"
      />
      {children}
    </div>
  )
}

export default InformSuccess