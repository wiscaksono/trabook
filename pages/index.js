import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[#FEFCFB]">
        <div className="wrapper">
          <section>
            <nav className="py-8 flex items-center justify-between">
              <h1 className="volk text-2xl font-bold text-second">
                Travbook
                <span className="inline-flex pl-2">
                  <img src="/icons/trabook-icon.svg" alt="" />
                </span>
              </h1>
              <div className="gap-8 flex items-center text-second poppins">
                <Link href={"#"}>
                  <a>Home</a>
                </Link>
                <Link href={"#"}>
                  <a>About</a>
                </Link>
                <Link href={"#"}>
                  <a>Destination</a>
                </Link>
                <Link href={"#"}>
                  <a>Tour</a>
                </Link>
                <Link href={"#"}>
                  <a>Blog</a>
                </Link>
              </div>
              <div>
                <Link href={"#"}>
                  <a className="text-primary-1 mr-14 poppins font-semibold">
                    Login
                  </a>
                </Link>
                <Link href={"#"}>
                  <button className="py-3 px-12 rounded-md bg-primary-1 text-white font-semibold sign-shadow">
                    Sign Up
                  </button>
                </Link>
              </div>
            </nav>
          </section>

          <section>
            <div className="grid grid-cols-2 items-center gap-5 mt-14">
              <div>
                <h1 className="volk font-bold text-primary-2 text-6xl mb-8">
                  Get started your exciting{" "}
                  <span className="text-primary-1">journey</span> with us.
                </h1>
                <p className="poppins text-xl text-third mb-16">
                  A Team of experienced tourism professionals will provide you
                  with the best advice and tips for your desire place.
                </p>
                <Link href={"#"}>
                  <button className="py-3 px-7 bg-transparent poppins font-medium text-primary-1 text-lg border border-primary-1 rounded-md">
                    Discover Now
                  </button>
                </Link>
              </div>

              <div className="flex items-center justify-end relative ">
                <img src="/hero.png" alt="" className="z-20" />
                <div className="py-2 px-4 rounded-lg bg-white flex items-center justify-center gap-2 absolute right-0 z-30">
                  <img src="/icons/google-maps.svg" alt="" />
                  <div>
                    <p className="font-medium poppins text-third">Explore</p>
                    <p className="text-xs text-second poppins">
                      Every cornar of <br />
                      the world with us
                    </p>
                  </div>
                </div>

                <div className="py-2 px-4 rounded-lg bg-white flex items-center justify-center gap-2 absolute bottom-32 left-12 z-30">
                  <img src="/icons/star.svg" alt="" />
                  <div>
                    <p className="font-medium poppins text-third">27K</p>
                    <p className="text-xs text-second poppins">
                      Customer Reviewed
                    </p>
                  </div>
                </div>

                <div className="py-2 px-4 rounded-lg bg-white flex items-center justify-center gap-2 absolute bottom-[377px] left-6 z-30">
                  <img src="/icons/throphy.svg" alt="" />
                  <div>
                    <p className="font-medium poppins text-third">
                      Best Tour <br /> Awards
                    </p>
                  </div>
                </div>

                <div className="py-2 px-4 rounded-lg  flex items-center justify-center gap-2 absolute -top-20 -left-2 z-10">
                  <img src="/icons/plane.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="pb-32 mt-14">
              <form className="flex items-center justify-center py-8 px-6 bg-white rounded-lg gap-24 w-full">
                <div className="flex flex-col gap-2 items-start">
                  <select className="poppins text-first font-medium">
                    <option selected disabled>
                      Location
                    </option>
                    <option>Jakarta</option>
                    <option>Bandung</option>
                    <option>Jogjakarta</option>
                    <option>Garut</option>
                  </select>
                  <label>Where are you going</label>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <select
                    placeholder="Date"
                    className="poppins text-first font-medium"
                  >
                    <option selected disabled>
                      Date
                    </option>
                    <option>Jakarta</option>
                    <option>Bandung</option>
                    <option>Jogjakarta</option>
                    <option>Garut</option>
                  </select>
                  <label>When you will go</label>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <select className="poppins text-first font-medium">
                    <option selected disabled>
                      Guest
                    </option>
                    <option>Jakarta</option>
                    <option>Bandung</option>
                    <option>Jogjakarta</option>
                    <option>Garut</option>
                  </select>
                  <label>Number of guest</label>
                </div>

                <Link href={"#"}>
                  <button className="py-3 px-7 rounded-md bg-primary-1 text-white text-lg poppins explore-card">
                    Explore Now
                  </button>
                </Link>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
