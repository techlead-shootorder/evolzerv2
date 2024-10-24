const Discover = () => {
    return (
      <>
        <div className="discover-area py-20 relative">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
              {/* Images Section */}
              <div className="discover-image relative flex justify-center">
                <img
                  src="/images/bigdata-analytics/why-choose-1.webp"
                  alt="Discover 1"
                  loading="lazy"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="/images/bigdata-analytics/why-choose-us-2.webp"
                  alt="Discover 2"
                  loading="lazy"
                  className="rounded-lg shadow-md "
                />
              </div>
  
              {/* Content Section */}
              <div className="discover-content text-left">
                <h2 className="text-3xl font-bold text-white">Why choose Evolzer?</h2>
  
                <div className="mt-6 space-y-6">
                  {/* Innovative Solutions */}
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/why-choose-us/innovative-solutions.svg"
                      alt="Innovative Solutions"
                      loading="lazy"
                      className="w-16 h-16"
                    />
                    <div>
                      <h5 className="text-xl font-semibold text-white">Innovative Solutions</h5>
                      <p className="text-gray-600">Technology-driven solutions for success.</p>
                    </div>
                  </div>
  
                  {/* Proven Results */}
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/why-choose-us/proven-results.svg"
                      alt="Proven Results"
                      loading="lazy"
                      className="w-16 h-16"
                    />
                    <div>
                      <h5 className="text-xl font-semibold text-white">Proven Results</h5>
                      <p className="text-gray-600">Achieving goals through effective approaches.</p>
                    </div>
                  </div>
  
                  {/* Expertise and Experience */}
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/why-choose-us/expertise-and-experience.svg"
                      alt="Expertise & Experience"
                      loading="lazy"
                      className="w-16 h-16"
                    />
                    <div>
                      <h5 className="text-xl font-semibold text-white">Expertise & Experience</h5>
                      <p className="text-gray-600">Proven expertise, exceptional results.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Decorative Shape */}
          <div className="analytics-shape1">
            <img
              src="/images/bigdata-analytics/analytics-shape1.png"
              alt="Shape"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </>
    );
  };
  
  export default Discover;