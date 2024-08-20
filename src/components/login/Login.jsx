
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="mb-auto px-[10px] md:px-[50px] 2xl:px-[175px]">
      <div className="py-[100px] px-[20px] bg-[#F5F5F5]">
        <p className="text-[26px] font-semibold text-center">MY ACCOUNT</p>
          <div className="flex justify-center py-[10px]">
            <Link
              to={"/sumline-shop-v2/"}
              className="text-[14px] text-[#666666] hover:text-black"
            >
              <p>Home </p>
            </Link>
            <p className="px-[14px]">&#x2022;</p>
            <p className="text-[14px] text-[#666666]">My Account</p>
          </div>
      </div>
      <div className="py-[120px] flex justify-center w-[100%] gap-x-[30px]">
        <div className="w-[49%]">
          <p className="font-bold text-[#222222] text-[18px]">LOGIN</p>
          <form className="py-[5px]">
            <div className="py-[5px]">
              <label htmlFor="user1" className="block font-bold text-[14px] text-gray-500 pb-[5px]">Username or email address<span className="text-red-500 pl-[2px]">*</span></label>
              <input id="user1" type="text" required className="block border border-gray outline-0 w-[100%] py-[5px]"></input>
            </div>
            <div className="py-[5px]">
              <label htmlFor="password1" className="block font-bold text-[14px] text-gray-500 pb-[5px]">Password<span className="text-red-500 pl-[2px]">*</span></label>
              <input id="password1" type="text" required className="block border border-gray outline-0 w-[100%] py-[5px]"></input>
            </div>
            <div className="py-[5px]">
              <input id="remem" type="checkbox" required></input>
              <label htmlFor="remem" className="font-bold text-[14px] text-gray-500 pb-[5px] ml-[3px]">Remember me</label>
            </div>
            <button className="text-white bg-[#222222] p-[8px] text-[12px] font-bold my-[5px]" onClick={() => alert("This function is not avaliable")}>LOGIN</button>
          </form>
          <p className="text-gray-500 text-[14px] cursor-pointer" onClick={() => alert("This function is not avaliable")}>Lost your password?</p>
        </div>
        <div className="w-[49%]"> 
          <p className="font-bold text-[#222222] text-[18px]">REGISTER</p>
          <form className="py-[5px]">
            <div className="py-[5px]">
              <label htmlFor="user2" className="block font-bold text-[14px] text-gray-500 pb-[5px]">Email address<span className="text-red-500 pl-[2px]">*</span></label>
              <input id="user2" type="text" required className="block border border-gray outline-0 w-[100%] py-[5px]"></input>
            </div>
            <div className="py-[5px]">
              <label htmlFor="password2" className="block font-bold text-[14px] text-gray-500 pb-[5px]">Password<span className="text-red-500 pl-[2px]">*</span></label>
              <input id="password2" type="text" required className="block border border-gray outline-0 w-[100%] py-[5px]"></input>
            </div>
            <button className="text-white bg-[#222222] p-[8px] text-[12px] font-bold my-[5px]" onClick={() => alert("This function is not avaliable")}>REGISTER</button>
          </form>
        </div>
      </div>
  </div>
  )
}

export default Login