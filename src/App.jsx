import { CustomerReview, Footer, PopularProduct, Hero, Services, SpecialOffer, Subscribe, SupperQuality } from './sections/index';
import Nav from './components/Nav';
function App() {
  return (
    <main className='relative'>
      <Nav />
      <section className="padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className='padding'>
        <PopularProduct />
      </section>
      <section className='padding'>
        <SupperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReview />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='padding bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App
