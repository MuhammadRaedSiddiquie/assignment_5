import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <nav className="w-full h-[14%] bg-[#A29875] flex items-center justify-evenly sm:flex-wrap">
        <div className="bg-[url('/images/logo.svg')] w-[24%] h-[65%] bg-contain bg-no-repeat bg-center relative left-[-4%] sm:w-[100%] sm:h-[35%] sm:left-[0px]"></div>
        <div className="bg-white w-[50%] h-[40%] rounded-[12px] flex sm:w-[70%] sm:h-[25%] sm:justify-evenly ">
          <input type="text" className="bg-white rounded-[12px] w-[95%] xxl:text-[22px] l:text-[16px] pl-4 sm:text-[12px] sm:w-[90%] sm:pl-0" placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."/>
          <span className="block bg-[url('/images/search.svg')] rounded-[12px] bg-no-repeat bg-center bg-contain w-[5%] m-4 bg-white sm:m-0 "></span>
        </div>
        <div className="flex w-[12%] items-center justify-between sm:w-[24%] ">
          <span className="bg-[url('/images/like.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block sm:w-[26%]"></span>
          <span className="bg-[url('/images/pro.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block sm:w-[26%]"></span>
          <span className="bg-[url('/images/cart.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block sm:w-[26%]"></span>
        </div>

      </nav>
      <section className="w-full h-[86%] bg-[#ffffff] flex items-center justify-center sm:items-end">
        <div className="w-[85%] h-[70%] flex sm:flex-wrap sm:flex-col-reverse sm:h-[100%]">
          <div className="w-[67%] h-[100%] bg-white flex flex-col pr-36  justify-between">
            <h1 className="xxl:text-[54px] xl:text-[44px] text-black font-bold font-[libre] xxl:leading-[78px] l:text-[33px] l:leading-[50px] xl:leading-[66px]">IMPECCABLE <br />
              CRAFTSMANSHIP AND <br />
              FINESSE 
            </h1>
            <p className="xxl:text-[38px] text-[#787054] font-medium font-[libre] xxl:leading-[58px] l:text-[24px] l:leading-[40px] xl:text-[30px] xl:leading-[48px]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <div className="flex items-center justify-center xxl:w-96 l:w-60 xl:w-64 xxl:h-[85px] l:h-[50px] xl:h-[65px] bg-[#A29875] text-white rounded-[7px] font-medium xxl:text-[35px] l:text-[22px] xl:text-[28px]  font-[libre]">Explore now</div>

          </div>
          <div className="w-[33%] h-[100%] bg-[url('/images/pic.svg')] bg-no-repeat bg-center bg-contain sm:w-[100%] sm:h-[50%]"></div>
        </div>
      </section>
    </div>
  );
}
