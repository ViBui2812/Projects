import Triangle_Warning from '../../icons/Warning/TriangleWarning';

const InformFailure = ({children}) => {
  return (
    <div className="flex absolute top-[24px] left-[1000px] w-auto bg-sematic-red justify-center items-center gap-2 px-7 py-4 border body-large text-white rounded-[8px] p-10 shadow-2xl">
      <Triangle_Warning
        width="24px"
        height="24px"
      />
      {children}
    </div>
  )
}

export default InformFailure