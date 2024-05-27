import Button from '../components/ui/button/Button';
import ArrowCircleDown from '../components/icons/Arrow/ArrowCircleDown';
import ArrowUndoUpLeft from '../components/icons/Arrow/ArrowUndoUpLeft';
import ButtonFloat from '../components/ui/button/ButtonFloat';
import ActionIcon from '../components/ui/button/ActionIcon';
import ActionPersonDetail from '../components/ui/button/ActionPersonDetail';
import EditPencil01 from '../components/icons/Edit/EditPencil01'; 
import UserClose from '../components/icons/User/UserClose';
import TrashFull from '../components/icons/Interface/TrashFull';
import SkillboostLogo from '../assets/logo/SkillboostLogo.svg';
import TextInput from '../components/ui/placeholder/TextInput'
import TextArea from '../components/ui/placeholder/TextArea'
import SearchBar from '../components/ui/placeholder/SearchBar'
import InformSuccess from '../components/ui/inform/InformSuccess';
import InformFailure from '../components/ui/inform/InformFailure';
import AlertCaution from '../components/ui/inform/AlertCaution';
import AlertInfo from '../components/ui/inform/AlertInfo';
import AlertDanger from '../components/ui/inform/AlertDanger';
import Email from '../components/ui/email/Email';
import DropDown from '../components/ui/placeholder/DropDown';

const TestComponents = () => (
    <main className="relative bg-background-primary">
      <div className='display-large'>
        Display Large
      </div>
      <div className='display-medium'>
        Display Medium
      </div>
      <div className='display-small'>
        Display Small
      </div>

      <div className='headline-large'>
        Headline Large
      </div>
      <div className='headline-medium'>
        Headline Medium
      </div>
      <div className='headline-small'>
        Headline Small
      </div>

      <div className='title-large'>
        Title Large
      </div>
      <div className='title-medium'>
        Title Medium
      </div>
      <div className='title-small'>
        Title Small
      </div>

      <div className='label-large'>
        Label Large
      </div>
      <div className='label-medium'>
        Label Medium
      </div>
      <div className='label-small'>
        Label Small
      </div>

      <div className='body-large'>
        Body Large
      </div>
      <div className='body-medium'>
        Body Medium
      </div>
      <div className='body-small'>
        Body Small
      </div>  

      <div className='flex'>
        <div className='bg-brand-default text-text-white p-4 m-4'>
          bg-primary-default
        </div>
        <div className='bg-brand-lightest text-text-primary p-4 m-4'>
          bg-primary-lightest
        </div>
        <div className='bg-brand-lighter text-text-white p-4 m-4'>
          bg-primary-lighter
        </div>
        <div className='bg-brand-default text-text-white p-4 m-4'>
          bg-primary-default
        </div>
        <div className='bg-brand-darker text-text-white p-4 m-4'>
          bg-primary-darker
        </div>
      </div>

      <div className='flex'>
        <div className='bg-background-primary border border-outline-button text-text-primary p-4 m-4'>
          bg-background-primary
        </div>
        <div className='bg-background-secondary text-text-primary p-4 m-4'>
          bg-primary-lightest
        </div>
        <div className='bg-background-third text-text-secondary p-4 m-4'>
          bg-primary-lighter
        </div>
      </div>

      <div className='flex'>
        <div className='bg-sematic-red text-text-white p-4 m-4'>
          sematic-red
        </div>
        <div className='bg-sematic-blue text-text-white p-4 m-4'>
          sematic-blue
        </div>
        <div className='bg-sematic-yellow text-text-white p-4 m-4'>
          sematic-yellow
        </div>
        <div className='bg-sematic-green text-text-white p-4 m-4'>
          sematic-green
        </div>
      </div>

      <div className='flex space-x-4 p-2'>
        <Button size="Big" variant="Primary" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Primary</Button>
        <Button size="Big" variant="Secondary" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Secondary</Button>
        <Button size="Big" variant="Outlined" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Outlined</Button>
        <Button size="Big" variant="Plain" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Plain</Button>
        <Button size="Big" variant="Neutral" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Neutral</Button>
        <Button size="Big" variant="Destructive" onClick={() => alert('Đang xóa ư?')} leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Destructive</Button>
        <Button size="Big " variant="Destructive-plain" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Destructive Plain</Button>
        <Button size="Big" variant="Loading" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Loading</Button>
      </div>
      <div className='flex space-x-4 p-2'>
        <Button size="Medium" variant="Primary" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Primary</Button>
        <Button size="Medium" variant="Secondary" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Secondary</Button>
        <Button size="Medium" variant="Outlined" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Outlined</Button>
        <Button size="Medium" variant="Plain" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Plain</Button>
        <Button size="Medium" variant="Neutral" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Neutral</Button>
        <Button size="Medium" variant="Destructive" onClick={() => alert('Đang xóa ư?')} leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Destructive</Button>
        <Button size="Medium" variant="Destructive-plain" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Destructive Plain</Button>
        <Button size="Medium" variant="Loading" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Loading</Button>
      </div>
      <div className='flex space-x-4 p-2'>   
        <Button size="Small" variant="Primary" state="disabled" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Primary</Button> 
        <Button size="Small" variant="Secondary" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Secondary</Button>
        <Button state='disabled' size="Small" variant="Outlined" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Outlined</Button>
        <Button size="Small" variant="Plain" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Plain</Button>
        <Button size="Small" variant="Neutral" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Neutral</Button>
        <Button size="Small" variant="Destructive" onClick={() => alert('Đang xóa ư?')} leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Destructive</Button>
        <Button size="Small" variant="Destructive-plain" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Destructive Plain</Button>
        <Button size="Small" variant="Loading" leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Loading</Button>
      </div>

      <div className='flex m-4'>
      <ButtonFloat leftIcon={<ArrowUndoUpLeft width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}>Trở về trang chủ</ButtonFloat>
      </div>

      <ActionIcon icon={<ArrowUndoUpLeft width="1.5rem" height="1.5rem"/>} />
      <div className='space-x-4'>
        <ActionPersonDetail variant="Edit" icon={<EditPencil01 width="1.5rem" height="1.5rem"/>}/>
        <ActionPersonDetail variant="Unfollow" icon={<UserClose width="1.5rem" height="1.5rem"/>}/>
        <ActionPersonDetail variant="Delete" icon={<TrashFull width="1.5rem" height="1.5rem"/>}/>
      </div>

      <div className='flex'>
        <div className='bg-red-500' style={{ width: '232px', height: '500px' }}></div>
        <div className='bg-emerald-500 text-right' style={{ width: '1686px', height: '500px' }}>đây là text</div>
      </div>

      <div>
        <img src={SkillboostLogo} alt="Logo" />
      </div>

      <div className='space-y-10 my-20'>
        <div className='flex flex-row space-x-10'>
          <TextInput
            title="Tiêu đề"
            previewText="Nhập tiêu đề"
            note="Vui lòng nhập tiêu đề của bạn"
            leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>}
            rightIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>}
          />
          <TextInput
            variant="ReadOnly"
            title="Tiêu đề (bị disabled)"
            previewText="Nhập tiêu đề"
            note="Vui lòng nhập tiêu đề của bạn"
            leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>}
            rightIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>}
          />
          <TextInput
            variant="Error"
            title="Tiêu đề"
            previewText="Nhập tiêu đề"
            note="Vui lòng nhập tiêu đề của bạn"
            leftIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>}
            rightIcon={<ArrowCircleDown width="1.25rem" height="1.25rem" strokeWidth={1.5} stroke='#5E6A6E'/>}
          />
        </div>

        <div className='flex space-x-10 w-full'>
          <TextArea
            title="Mô tả"
            previewText="Nhập mô tả"
            note="Vui lòng nhập mô tả của bạn"
          />
          <TextArea
            variant="ReadOnly"
            title="Mô tả (bị disabled)"
            previewText="Nhập mô tả"
            note="Vui lòng nhập mô tả của bạn"
            />
          <TextArea
            variant="Error"
            title="Mô tả"
            previewText="Nhập mô tả"
            note="Vui lòng nhập mô tả của bạn"
            />
        </div>

        <div className='flex flex-row space-x-10'>
          <SearchBar
            title="Mô tả"
            previewText="Tìm kiếm"
            note="Vui lòng nhập mô tả của bạn"
          />
        </div>
      </div>

      <div className='py-5'>
        <InformSuccess />
      </div>

      <br></br>

      <div className='py-5'>
        <InformFailure />
      </div>

      <div className='my-5'>
        <AlertInfo />
        <AlertCaution />
        <AlertDanger />
      </div>

      <div>
        <Email />
      </div>

      <div className='flex space-x-10 pb-[300px]'>
        <DropDown
          title="Select an option"  
          options={["Option 1", "Option 2", "đasadadasdasdadasdasasd"]}
        />
        <DropDown
          title="Select an option"  
          options={["Option 1", "Option 2", "Option 3"]}
        />
      </div>

    </main>
  );
  
  export default TestComponents;