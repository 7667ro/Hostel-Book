import Footer from "../components/Footer";
export default function About() {
  return (
      <div className="py-16 bg-white space-y-16">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="/aboutAu.webp"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                  <h1 className='text-3xl font-bold mb-4 text-slate-800 italic'>Welcome to HostelHunter!</h1>
                    <p className='mb-4 text-slate-700'>At HostelHunter, we understand that finding the perfect hostel for your travels can make all the difference in your journey. Whether you're a solo traveler seeking new adventures, a group of friends exploring together, or a family on a budget-friendly vacation, HostelHunter is here to make your hostel search experience seamless and enjoyable.</p>
                    <p className='mb-4 text-slate-700'>
                     What sets HostelHunter apart is our dedication to providing comprehensive hostel listings, insightful reviews, and helpful travel tips to empower you in making informed decisions about your accommodations. Whether you're searching for a cozy hostel in the heart of a bustling city, a rustic retreat nestled in nature, or a vibrant hostel with a lively atmosphere, we've got you covered.
                      </p>
                          <p className='mb-4 text-slate-700'>With MatrixHostel, you can:

                    Explore a diverse range of hostels catering to every budget and preference.
                    Read authentic reviews from fellow travelers to get insider tips and recommendations.
                    Use our user-friendly search filters to narrow down your options based on location, price, amenities, and more.
                    Book your stay directly through our platform with confidence and convenience.</p>
  
                  </div>
              </div>
          </div>

          <Footer></Footer>
      </div>
  );
}




