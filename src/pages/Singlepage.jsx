import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singlepage = () => {
  const [singleData, setSingleData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then((res) => {
        
        setSingleData(res) 

        console.log(singleData)

      }).catch((err) => console.error(err))
  }, []) 

  if (!singleData) {
    return <h2>Loading...</h2>
  }

  return (
    <section className="rounded-[10px] mt-[100px] mb-[140px]">
      <div className="font-sans">
        <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 border-[1px] border-[#A1A1A1] rounded-[5px] p-6 rounded-lg">
            <div className="lg:col-span-2 w-full lg:sticky top-0 text-center">
              <div className="px-4 py-10 rounded-sm w-[100%]">
                <div className="carousel w-full">
                  <img src={singleData.images} alt={singleData.name} className="w-full" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <p className="text-gray-800 text-3xl font-bold">Rs {singleData.price}</p>
              <div className="grid flex flex-wrap gap-4 mt-8">
                <h2 className="text-2xl font-extrabold text-gray-800">
                  {singleData.title}
                </h2>
                <p className="text-gray-800 text-[16px] font-light">
                  {singleData.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-[100px]">
                <button
                  type="button"
                  className="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-[#570DF8] text-white text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>
              <div className="flex justify-end items-center gap-3 mt-[-35px]">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 10.3636C19 16.0909 12 21 12 21C12 21 5 16.0909 5 10.3636C5 8.41068 5.7375 6.53771 7.05025 5.15676C8.36301 3.77581 10.1435 3 12 3C13.8565 3 15.637 3.77581 16.9497 5.15676C18.2625 6.53771 19 8.41068 19 10.3636Z"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="text-[#5E5E5E] text-[19px] font-bold">
                  {singleData.location}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Singlepage
