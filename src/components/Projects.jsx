

const Projects = (props) => {

    return (
        <>
        <div className="ml-6 lg:mx-[16rem] mt-8 lg:mt-16 " id="projects">
            <span className="text-zinc-100 text-[30px] lg:text-[50px] font-bold">Projects </span>
        </div>
            {
                props.projects.map(project => (

                    <Project
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        image={props.paths[project.title]}
                        github_link={project.github_link}
                    />
                ))
            }
        </>
    )
}

export default Projects;

const Project = (props) => {
    console.log("props : ", props)
    return (
        <>
            <div className="flex flex-wrap m-4 lg:mx-[15rem] border border-white rounded-lg p-4">
                <div className="w-[19rem] lg:w-[28rem] flex justify-center items-center">
                    <img className="max-h-[400px]" src={props.image} alt="" />
                </div>
                <div className="w-[19rem] lg:w-[28rem] mt-8 lg:mt-0 lg:ml-8">
                    <h1 className="text-3xl font-bold text-white">{props.title}</h1>
                    <p className="text-md text-white mt-4 lg:mt-8 text-justify mb-10">{props.description}</p>
                    <Github link={props.github_link} />

                </div>
            </div>
        </>
    )
}

const Github = (props) => {
    return (
        <>
            <a className="" href={props.link}>
                <div className="flex mt-4">
                    <div>
                        <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                fill="#fff"
                                transform="scale(0.4)"
                            />
                        </svg>
                    </div>

                    <div className="ml-3 flex justify-center align-middle items-center text-xl font-bold">
                        <h2 className="text-white">View Code</h2>
                    </div>
                </div>
            </a>
        </>
    )
}
