import CategoryList from "@/Components/CategoryList"
import Productlist from "@/Components/Productlist"
import Slider from "@/Components/Slider"

const HomePage = () => {
  return (
    <div className='mt-24'>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
        <h1 className="text-2xl">Featured Products</h1>
        <Productlist/>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Top selling Products</h1>
        <Productlist/>
      </div>
    </div>
  )
}

export default HomePage