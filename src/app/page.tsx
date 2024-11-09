

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <nav className="w-full h-[14%] bg-[#A29875] flex items-center justify-evenly lg:flex-nowrap sm:flex-wrap">
        <div className="bg-[url('/images/logo.svg')] lg:w-[24%] lg:h-[65%] bg-contain bg-no-repeat bg-center relative lg:left-[-4%] sm:w-[100%] sm:h-[35%] sm:left-[0px]"></div>
        <div className="bg-white lg:w-[50%] lg:h-[40%] rounded-[12px] flex lg:justify-between sm:w-[70%] sm:h-[25%] sm:justify-evenly ">
          <input type="text" className="bg-white rounded-[12px] lg:w-[95%] xxl:text-[22px] l:text-[16px] lg:pl-4 sm:text-[10px] sm:w-[90%] sm:pl-0" placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."/>
          <span className="block bg-[url('/images/search.svg')] rounded-[12px] bg-no-repeat bg-center bg-contain lg:w-[5%] lg:m-4 bg-white sm:m-0 "></span>
        </div>
        <div className="flex lg:w-[12%] items-center justify-between sm:w-[24%] ">
          <span className="bg-[url('/images/like.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block sm:w-[26%]"></span>
          <span className="bg-[url('/images/pro.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block sm:w-[26%]"></span>
          <span className="bg-[url('/images/cart.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block sm:w-[26%]"></span>
        </div>

      </nav>
      <section className="w-full h-[86%] bg-[#ffffff] flex items-center justify-center ">
        <div className="lg:w-[85%] lg:h-[70%] flex lg:flex-nowrap lg:text-start sm:flex-wrap sm:h-[90%] sm:justify-center sm:gap-4 sm:text-center ">
          <div className="lg:w-[67%] lg:h-[100%] bg-white flex lg:flex-col pr-36  lg:justify-around lg:items-start lg:gap-0 lg:order-1 sm:order-2 sm:w-[90%] sm:h-[47%] sm:pr-0 sm:justify-center sm:gap-4 sm:flex-col sm:items-center">
            <h1 className="xxl:text-[54px] xl:text-[44px] text-black font-bold font-[libre]  xxl:leading-[78px] lg:text-[28px] l:text-[33px] l:leading-[50px] xl:leading-[66px] sm:text-[20px]">IMPECCABLE <br />
              CRAFTSMANSHIP AND <br />
              FINESSE 
            </h1>
            <p className="xxl:text-[38px] text-[#787054] font-medium font-[libre] xxl:leading-[58px] l:text-[24px] l:leading-[40px] xl:text-[30px] xl:leading-[48px] lg:pr-[10rem]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <div className="flex items-center justify-center lg:w-60 xxl:w-96 l:w-60 xl:w-64 xxl:h-[85px] l:h-[50px] xl:h-[65px] sm:h-[40px] sm:w-[70%] bg-[#A29875] text-white rounded-[7px] font-medium xxl:text-[35px] l:text-[22px] xl:text-[28px]  font-[libre]">Explore now</div>

          </div>
          <div className="lg:w-[33%] lg:h-[100%] bg-[url('/images/pic.svg')] lg:order-2 sm:order-1 bg-no-repeat bg-center bg-contain sm:w-[100%] sm:h-[53%]"></div>
        </div>
      </section>
    </div>
  );
}
