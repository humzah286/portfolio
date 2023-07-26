
const Home = (props) => {

    console.log("Profile picture path : ", props.profilePic)

    return <>
        <div className="lg:pb-36">
            <div className="flex flex-wrap justify-center lg:gap-[10rem] mt-10 lg:mx-16 lg:mt-[8rem]">

                <div className="w-[20rem] lg:w-[32rem]">
                    <div className="text-zinc-100 text-[3.5rem] lg:text-[5rem] font-bold lg:leading-[96px]">COMPUTER</div>
                    <div className="text-teal-500 text-[3.5rem] lg:text-[5rem] font-bold lg:leading-[96px]">SCIENTIST</div>
                    <p className="text-white leading-loose mt-5 lg:mt-10">
                        I am a Computer Science student at the NUST | SEECS. I am passionate about software development, machine learning and blockchain.
                    </p>
                </div>

                <div>
                    <div className="w-[15rem] h-[15rem] mt-10 lg:mt-0 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-white hover:border-gray-300 transition">
                        <img src={props.profilePic} alt="Your Name" className="w-full h-full object-cover" />
                    </div>
                </div>


            </div>
        </div>
    </>
}

export default Home;