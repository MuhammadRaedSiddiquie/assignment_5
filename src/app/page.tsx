

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <nav className="w-full h-[14%] bg-[#A29875] flex items-center justify-evenly">
        <div className="bg-[url('/images/logo.svg')] w-[24%] h-[65%] bg-contain bg-no-repeat bg-center relative left-[-4%]"></div>
        <div className="bg-white w-[50%] h-[40%] rounded-[12px] flex">
          <input type="text" className="bg-white rounded-[12px] w-[95%] text-[14px] pl-4" placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."/>
          <span className="block bg-[url('/images/search.svg')] rounded-[12px] bg-no-repeat bg-center bg-contain w-[5%] m-2 bg-white"></span>
        </div>
        <div className="flex w-[12%] items-center justify-between">
          <span className="bg-[url('/images/like.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block"></span>
          <span className="bg-[url('/images/pro.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block"></span>
          <span className="bg-[url('/images/cart.svg')] bg-no-repeat bg-center bg-contain w-[33px] h-[33px] block"></span>
        </div>

      </nav>
      <section className="w-full h-[86%] bg-[#ffffff] flex items-center justify-center">
        <div className="w-[85%] h-[70%] flex ">
          <div className="w-[67%] h-[100%] bg-white flex flex-col pr-36  justify-between">
            <h1 className="text-[33px] text-black font-bold font-[libre] leading-[50px]">IMPECCABLE <br />
              CRAFTSMANSHIP AND <br />
              FINESSE 
            </h1>
            <p className="text-[24px] text-[#787054] font-medium font-[libre] leading-10 ">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <div className="flex items-center justify-center min-w-60 w-60 h-[50px] bg-[#A29875] text-white rounded-[7px] font-medium text-[22px] font-[libre]">Explore now</div>

          </div>
          <div className="w-[33%] h-[100%] bg-[url('/images/pic.svg')] bg-no-repeat bg-center bg-contain"></div>
        </div>
      </section>
    </div>
  );
}
