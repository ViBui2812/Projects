import Button from "../button/Button";
import Flag from "../../icons/Navigation/Flag";
import Mail from "../../icons/Communication/Mail";
import Close_MD from "../../icons/Menu/CloseMd"

const Email = () => {
  return (
    <div className="gap-2 body-large rounded-[16px] leading-5 p-9 ml-10 bg-[#fbfbfb] w-[774px] h-[682px] flex flex-col">
      <div className="flex-1 flex-grow">
        <div className="flex-1 flex flex-col gap-[4px]">
          <div className="flex">
            <div className="title-small text-[#5200FF] min-w-[63px] pr-[87.5%]">
            Preview
            </div>

            <button class="hover:bg-violet-100">
            <Close_MD
              alt="close button"
              height={24}
              width={24}
              onClick={() => console.log("Close email")}
              
            />
            </button>
          </div>

          <h3 className="headline-small pt-[4px] text-[#1A1F23]">
            BÁO GIÁ KHOÁ HỌC TỪ SKILLBOOST CENTER
          </h3>
        </div>

        <div className="body-large pt-[36px] self-stretch relative text-black">
          <p className="pt-3">Kính gửi bạn Phan Văn Trị,</p>
            <p className="pt-3">Cảm ơn bạn đã liện hệ với SkillBoost Center. Thông tin của bạn đã được ghi nhận và chuyển cho đội ngũ tư vấn khách hàng của SkillBoost.</p>
            <p className="pt-3">Bạn vui lòng giữ điện thoại để được đội ngũ tư vấn gọi điện thoại trực tiếp tư vấn cho bạn. Hoặc bạn có thể kết nối trực tiếp với chúng tôi thông qua Zalo của tư vấn viên Mr. Quân (0374599357) để được hỗ trợ nhanh nhất.
          </p>
          <p className="pt-3">Trân trọng,</p>
          <p className="pt-1">SKILLBOOST CENTER</p>

        </div>

      </div>

        <div className="flex justify-between">
          <Button size="Small" variant="Plain" className="text-[#5E6A6E]"
            leftIcon={<Flag width="1.25rem" height="1.25rem" strokeWidth={1.5} className="text-[#1A1F23]"/>}
            onClick={() => console.log("Error reported")}>
            <span className="text-[#5E6A6E]">Báo cáo lỗi</span>
          </Button>

          <Button size="Small" variant="Primary"
            leftIcon={<Mail width="1.25rem" height="1.25rem" strokeWidth={1.5}/>}
            onClick={() => console.log("Mail sent")}>
            Gửi email
          </Button>
        </div>

    </div>
  )
}

export default Email