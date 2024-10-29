const Home = () => {
  return (
    <>
    <div className=" main_menu2 w-full h-[700px] bg-[#000]">
        <div className="container">
            <div className="menu_row1 flex">
             <div className="menu_row2">
                 <div className="text font-medium font-lumanosimo text-7xl text-[#a1622e] leading-normal pt-10">Enjoy your happy moments with coffee</div>
                 <p className='pt-5 text-[#fffbf0] font-oldenburg font-thin text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, consectetur dolorum ipsa, minus quod perferendis nostrum, provident aut libero delectus labore illo. Sequi iste quis sunt eum. Voluptates, laborum dolore.</p>
                 <div className="button mt-40 flex justify-center">
                 <button className='py-3 px-10 bg-[#fffbf0] text-[14px] font-oldenburg text-lg text-[#a1622e] rounded-md active:scale-[1.1]'>Buy now</button>
                 </div>
             </div>
                 <div className="image pt-10"><img src="images/coffee.png" alt="image" /></div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Home