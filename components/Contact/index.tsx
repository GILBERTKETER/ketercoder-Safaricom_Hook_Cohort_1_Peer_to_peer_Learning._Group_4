"use client";
import React from "react";
import Button from "../Button"
const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <div id="support" className="relative px-4 mx-auto md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20">
         
          <div className="flex flex-col flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <div
              className="bg-transparent mx-auto animate_top w-full rounded-lg p-7.5 border-4 border-cyan-500   md:w-3/5 lg:w-3/4 xl:p-15"
            >


              <section className="bg-transparent">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-cyan-500">Contact Me</h2>
                  <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Need assistance with coding, projects, or IT-related tasks? Feel free to reach out to me!</p>
                  <form action="#" className="space-y-8 bg-transparent">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium  ">Your email</label>
                      <input type="email" id="email" className="shadow-sm  border border-cyan-300  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500 shadow-sm-cyan-200" placeholder="name@ketercoder.com" required />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium  ">Subject</label>
                      <input type="text" id="subject" className="shadow-sm  border border-cyan-300  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500 shadow-sm-cyan-200" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium  dark:text-gray-400">Your message</label>
                      <textarea id="message" rows={6} className="shadow-sm  border border-cyan-300  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500 shadow-sm-cyan-200" placeholder="Leave a comment..."/>
                      
                    </div>
                    <Button onClick={()=>{console.log("sending message")}}>Send message</Button>
                  </form>
                </div>
              </section>
            </div>
{/* ================= */}
            {/* <div
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find Me
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  My Loaction
                </h3>
                <p>1522 Nairobi, Kenya</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="#">info@engineerketer.dev</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+2547 5910 4865</a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
