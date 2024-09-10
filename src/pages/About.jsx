import React from 'react'

const About = () => {
  return (

    <section className="bg-white dark:bg-gray-900 mt-[90px]">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to deliver
            the scope you want at the pace you need. Small enough to be simple and
            quick, but big enough to deliver the scope you want at the pace you
            need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png,https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png,https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
            alt="office content 1"
          />
       
        </div>
      </div>
    </section>


  )
}

export default About