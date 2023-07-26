

const Contact = (props) => {

    console.log(props.messages)

    const writeMessage = (e) => {
        e.preventDefault();
        
        console.log("writing message!")

        let name = e.target.name.value;
        let email = e.target.email.value;
        let message = e.target.message.value;

        if (name === "" || email === "" || message === "") {
            console.log("empty fields!")
            alert("Empty Fields, please fill out all the fields")
            return;
        }

        props.messages.push({
            "name": name, 
            "email": email,
            "message": message
        })

        console.log("successfully written!")
    }

    return (
        <>
            <div className="ml-6 lg:mx-[16rem] mt-8 lg:mt-16 ">
                <span className="text-teal-500 text-[30px] lg:text-[50px] font-bold">Contact </span>
            </div>
            {/* for Profile links.  */}
            <div className="flex mx-5 lg:mx-[16rem] lg:mt-3">
                <div className="text-white text-base lg:text-xl">Check my Profiles at :    </div>
                <div className="flex justify-center items-center">
                    <div className="relative bottom-2 ml-4"><a href="https://github.com/humzah286"><GithubLogo /></a></div>
                    <div className="relative bottom-2 ml-2"><a href="https://www.linkedin.com/in/humzahsiddiqi/"><LinkedInLogo /></a></div>
                </div>
            </div>
            {/* for contact info */}
            <div className="flex mx-5 lg:mx-[16rem]">
                <div className="w-[40rem] my-10">
                    {/* <!-- Section: Design Block --> */}
                    <section className="mb-32 text-center">
                        <div className="mx-auto max-w-[700px]">
                            <form onSubmit={writeMessage}>
                                <div className="relative mb-6 border border-white rounded-lg" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        name="name"
                                        className="text-white peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] "
                                        id="exampleInput90"
                                        placeholder="Name" />
                                    {/* <label
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        htmlFor="exampleInput90"
                                    >Name
                                    </label> */}
                                </div>
                                <div className="relative mb-6 border border-white rounded-lg" data-te-input-wrapper-init>
                                    <input
                                        type="email"
                                        name="email"
                                        // className="text-white peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        className="text-white peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6]"
                                        id="exampleInput91"
                                        placeholder="Email address" />
                                    {/* <label
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                        htmlFor="exampleInput91"
                                    >Email address
                                    </label> */}
                                </div>
                                <div className="relative mb-6 border border-white rounded-lg" data-te-input-wrapper-init>
                                    <textarea
                                        name="message"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] text-white" id="exampleFormControlTextarea1"
                                        rows="3"
                                        placeholder="Your message"></textarea>
                                    {/* <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Message</label
                                    > */}
                                </div>
                                <button
                                    type="submit"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="bg-teal-500 mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#20b9ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                                    Send
                                </button>
                            </form>
                        </div>
                    </section>
                    {/* <!-- Section: Design Block --> */}
                </div>
            </div>
        </>
    )
}

export default Contact;

const GithubLogo = () => {
    return <>
        <svg className="" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#fff"
                transform="scale(0.4)"
            />
        </svg>
    </>
}

const LinkedInLogo = () => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" /><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z" /></svg>
    </>
}

const ErrorMessage = (props) => {
    return <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
    <div class="flex">
      <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
      <div>
        <p class="font-bold">{props.title}</p>
        <p class="text-sm">{props.description}</p>
      </div>
    </div>
  </div>
}