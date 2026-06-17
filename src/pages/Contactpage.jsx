import React from 'react'

const Contactpage = () => {
  return (
      <>
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Contact Us
                </h1>
                <p className="mt-4 text-gray-600">
                    We'd love to hear from you. Get in touch with us anytime.
                </p>
            </div>

            {/* Contact Info + Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

                {/* Contact Information */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">
                        Get In Touch
                    </h2>

                    <div className="space-y-6">

                        <div>
                            <h3 className="font-semibold text-lg">Address</h3>
                            <p className="text-gray-600">
                                New Road, Kathmandu, Nepal
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">Phone</h3>
                            <p className="text-gray-600">
                                +977 98XXXXXXXX
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-gray-600">
                                info@yourstore.com
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg">Business Hours</h3>
                            <p className="text-gray-600">
                                Sunday - Friday<br/>
                                9:00 AM - 6:00 PM
                            </p>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6">
                        Send Us a Message
                    </h2>

                    <form className="space-y-5">

                        <div>
                            <label className="block mb-2 font-medium">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="Enter subject"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>

            {/* Map Section */}
            <div>
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Find Us Here
                </h2>

                <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113076.91575420182!2d85.25951559554622!3d27.666186562973387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb113ba7512eb9%3A0x179518df123dbb97!2sGodawari%20Grand%20Silauta%20Resort!5e0!3m2!1sen!2snp!4v1781673304110!5m2!1sen!2snp" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </section>
      </>
  )
}

export default Contactpage