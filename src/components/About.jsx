
const About = (props) => {
    return (
        <>
            <div className="flex flex-col justify-start mt-10 lg:mx-16 ">
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo sed vitae perferendis. Facere quasi tempore eius aliquid recusandae, dolorum perspiciatis laudantium officia! Optio, voluptatum, quia similique delectus iste repellat architecto, labore quidem natus eligendi consequuntur! Maxime ad quibusdam asperiores sequi recusandae officia! Rerum illum explicabo atque reiciendis fugiat rem consequuntur sint voluptatum, quibusdam, voluptate, quas quia. Quisquam, voluptatum. Quisquam, voluptatum.
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