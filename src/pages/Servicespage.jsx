import React from 'react'

const Servicespage = () => {
  return (
      <>
        <section className="max-w-7xl mx-auto px-6 py-16">
    
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Our Services
                </h1>
                <p className="mt-4 text-gray-600">
                    We provide a wide range of services to meet your needs.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Service Card */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                    <p className="text-gray-600">
                        Modern and responsive websites built with the latest technologies.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">Mobile Applications</h3>
                    <p className="text-gray-600">
                        User-friendly Android and iOS applications tailored to your needs.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                    <p className="text-gray-600">
                        Attractive and intuitive designs that improve user experience.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
                    <p className="text-gray-600">
                        Strategies to increase your online presence and customer reach.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
                    <p className="text-gray-600">
                        Improve your website ranking and visibility on search engines.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
                    <p className="text-gray-600">
                        Secure and scalable cloud infrastructure for your business.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
                    <p className="text-gray-600">
                        Transform data into actionable insights for better decisions.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">IT Consulting</h3>
                    <p className="text-gray-600">
                        Professional guidance to help businesses leverage technology.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
                    <p className="text-gray-600">
                        Reliable support and maintenance to keep systems running smoothly.
                    </p>
                </div>

            </div>

        </section>
      </>
  )
}

export default Servicespage