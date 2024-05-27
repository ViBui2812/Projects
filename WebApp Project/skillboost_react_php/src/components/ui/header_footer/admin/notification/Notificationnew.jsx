import Bell from '../../../../icons/Communication/Bell'


const Notificationnew = () => {
    return (
        <div>
          <div class="relative m-6 inline-flex w-fit">
              <div class="absolute  right-0 top-0  translate-x-0 translate-y-1 rounded-full bg-red-600 p-1 ">
              </div>
              <div class="flex items-center justify-center rounded-full bg-background-primary px-3 py-3 text-center  shadow-lg text-text-secondary">
                < Bell/>
              </div>
          </div>
        </div>
    )
  }
  
  
  export default Notificationnew