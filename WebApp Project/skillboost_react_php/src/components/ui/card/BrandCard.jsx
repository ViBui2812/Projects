import SkillboostLogo from '../../../assets/logo/SkillboostLogo.svg';
const BrandCard = ({brandname}) => {
    return(
        <nav>
            <div className='w-max flex max-w-max h-auto ' >
                <img 
                    src={brandname}
                    width={200}
                    height={200}
                    className='max-w-xs transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 rounded-2xl hover:cursor-pointer' 
                    alt="logo" />
            </div>
        </nav>
    )
}
export default BrandCard