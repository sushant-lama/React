import React from 'react'

const Aboutpage = () => {
  return (
    <>
        <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">

            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    About Our Store
                </h1>

                <p className="text-gray-600 leading-relaxed">
                    Welcome to our store, where quality meets affordability.
                    We are dedicated to providing our customers with carefully
                    selected products that combine style, durability, and value.
                    Whether you're shopping for everyday essentials or something
                    special, our goal is to make your experience enjoyable and
                    hassle-free. Thank you for choosing us as your trusted
                    shopping destination.
                </p>
            </div>

            <div className="md:w-1/2">
                <img
                    src="./dog 1.png"
                    alt="Store"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
            </div>

        </div>
    </section>
    </>
  )
}

export default Aboutpage