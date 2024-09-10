import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../component/Banner';

const Home = () => {

const [data, setData] = useState(null)

const navigate = useNavigate(); 

  useEffect(() => {

    fetch('https://dummyjson.com/products?sort=asc&limit=12')
      .then(res => res.json())
      .then((res) => {
        setData(res.products)
      }).catch((err) => console.error(err))


  }, [])

  const singleDetail = (item)=>{

    navigate(`Singlepage/${item.id}`)

  }


  return (
    <>

    <Banner />

      <section className='mt-[100px] mb-[100px]'>

      <div className='container grid grid-cols-4 gap-11 mx-auto'>

        {
          data ? data.map((item) => {

            return (
              
              <div key={item.id}>

                <div className="card bg-base-100 w-96 h-[500px] shadow-xl">
                  <figure>
                    <img className='w-[500px] h-[500px]'
                      src={item.images}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary" onClick={()=> singleDetail(item)}>Buy Now</button>
                    </div>
                  </div>
                </div>

              </div>

            )

          }) : <h2>Loding...</h2>
        }

      </div>

      </section>

    </>
  )
}

export default Home   