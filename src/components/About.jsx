
const About = (props) => {
    return (
        <>
            <div className="flex flex-col justify-start mt-10 lg:mx-16 " id="about">
                <div className="flex justify-center lg:gap-[45rem]">
                    <div>
                        <span className="text-zinc-100 text-[30px] lg:text-[50px] font-bold">About </span>
                        <span className="text-teal-500 text-[30px] lg:text-[50px] font-bold">me</span>
                    </div>
                    <div>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap justify-center lg:gap-[5rem]">
                    <div className="w-[20rem] lg:w-[30rem]">
                        <p className="text-white grow leading-loose mt-5 lg:mt-10 text-justify">
                        As a developer, I'm deeply enthusiastic about software development, machine learning, and the transformative potential of blockchain technology. One of the things that excites me most is the joy of continuous learning. When I'm not coding, you can find me indulging in my other passions. From playing video games to exploring the great outdoors, I believe in maintaining a balance between my technical pursuits and embracing the beauty of life beyond the screen. My vision for the future is to leverage my skills and expertise to contribute meaningfully to projects that make a positive impact on society.
                        </p>
                    </div>
                    <div className="static w-[20rem] h-[20rem] lg:w-[27rem] lg:h-[27rem] lg:relative lg:bottom-[3rem] ">
                        <img src={props.wallpaper} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;