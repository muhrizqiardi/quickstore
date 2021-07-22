import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

// Import commerce.js
import commerce from "../lib/commerce";

export default function Home({ merchant, categories, products }) {
  console.log(products)
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar/>
        <section id="hero" className="mb-3">
          <div className="container">
            <div id="carousel" className="carousel slide rounded-3 overflow-hidden my-3">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carousel" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carousel" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="http://unsplash.it/1200/300?gravity=center" alt />
                </div>
                <div className="carousel-item">
                  <img src="http://unsplash.it/1200/300?gravity=center" alt />
                </div>
                <div className="carousel-item">
                  <img src="http://unsplash.it/1200/300?gravity=center" alt />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        <section id="category" className="mt-3 mb-3">
          <div className="container">
            <div className=" p-1 d-flex flex-row align-items-center overflow-auto flex-wrap">
              <span className="me-3">Category: </span>
              <a href="/" className="card p-2 fs-6 text-black-50 nounderline fw-normal me-1 mb-1">Gadgets</a>
              <a href="/" className="card p-2 fs-6 text-black-50 nounderline fw-normal me-1 mb-1">Accessories</a>
              <a href="/" className="card p-2 fs-6 text-black-50 nounderline fw-normal me-1 mb-1">Cosmetic</a>
              <a href="/" className="card p-2 fs-6 text-black-50 nounderline fw-normal me-1 mb-1">Mask</a>
              <a href="/" className="card p-2 fs-6 text-black-50 nounderline fw-normal me-1 mb-1">Food</a>
              <a href="/" className="card p-2 fs-6 text-black-50 nounderline fw-normal me-1 mb-1">Beverages</a>
            </div>
          </div>
        </section>
        <section id="products" className="mb-3">
          <div className="container">
            <h3 className="mb-3">
              Products
            </h3>
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-1 g-3">
              {
                products.map(product =>
                <ProductCard
                  img={product.media.source}
                  name={product.name}
                    price={product.price.raw}
                  badges={['Free Delivery']}
                />
                )
              }
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}