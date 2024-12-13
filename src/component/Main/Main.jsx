import Listing from "./Listing/Listing"
import Filter from "./Filter/Filter"
import './Main.css'

const Main = () => {
  return (
    <section className='main-warpper'>
      <Filter></Filter>
      <Listing />
    </section>
  );
}

export default Main