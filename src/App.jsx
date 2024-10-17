import './App.css'
import pizza from './assets/vita-marija-murenaite-eSeo6IzOV00-unsplash.jpg'

function App() {

  return (
    <div className=''>
      <div className="card card-compact bg-base-100 p-5 w-96 shadow-xl group">
        <div className='relative flex justify-center items-center h-[250px] rounded-lg overflow-hidden'>
          <div className='absolute bottom-0 w-full h-1/2 bg-yellow-200 bg-opacity-40 group-hover:h-full group-hover:bottom-0 group-hover:bg-yellow-500 group-hover:bg-opacity-90 transition-all duration-500 ease-in-out'></div>
          <img
            src={pizza}
            alt="Shoes" className='relative w-[200px] h-[200px] flex justify-center items-center rounded-full z-10 transition-transform group-hover:scale-125 duration-500' />
        </div>
        <div className="card-body">
          <h2 className="card-title hover:text-yellow-500">Summer Pizza</h2>
          <p className='text-start'>Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemon</p>
          <div className="flex justify-between items-center">
            <p className='text-yellow-400 text-lg font-medium text-start'>$20</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


{/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="relative w-80 h-96 overflow-hidden rounded-lg shadow-lg flex flex-col items-center">
          
          <div className="relative w-full h-1/2 flex justify-center items-center group overflow-hidden">
            
            <div className="absolute bottom-0 w-full h-1/2 bg-blue-500 group-hover:h-full group-hover:bottom-0 group-hover:bg-blue-700 transition-all duration-500 ease-in-out"></div>

            <img
              src="https://via.placeholder.com/150"
              alt="Card Image"
              className="relative z-10 w-48 h-48 object-cover rounded-full shadow-md transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="relative z-10 p-4 text-center mt-4">
            <h3 className="text-xl font-semibold text-gray-800">Card Title</h3>
            <p className="text-gray-600">This is a description that stays outside of the image's background color area.</p>
          </div>
        </div>
      </div> */}