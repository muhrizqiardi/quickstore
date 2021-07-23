import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

// Import commerce.js
import commerce from "../lib/commerce";

export default function Home({ merchant, categories, products }) {
  // console.log(products)
  // console.log(categories)
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />
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
                  <img src="/assets/carousel-img/pandemic.jpg" style={{ filter: "brightness(80%)" }} alt="Pandemic" />
                  <div className="carousel-caption">
                    <h5>Protect your Loved One</h5>
                    <p>Let&quot;s end this pandemic soon by wearing mask, wash hands regularly, and social distancing.</p>
                    <button className="btn btn-dark">COVID-19 Products</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/assets/carousel-img/91-1200x300.jpg" style={{ filter: "brightness(80%)" }} alt />
                  <div className="carousel-caption">
                    <h5>Hungry?</h5>
                    <p>Food and Beverages are available at Quickstore. Check it out!</p>
                    <button className="btn btn-dark">Learn More</button>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/assets/carousel-img/241-1200x300.jpg" style={{ filter: "brightness(80%)" }} alt />
                  <div className="carousel-caption">
                    <h5>Gadgets</h5>
                    <p>Gadgets are available at Quickstore. </p>
                    <button className="btn btn-dark">Learn More</button>
                  </div>

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

        {/* Categories */}
        <section id="categories" className="mt-3 mb-3">
          <div className="container">
            <div className=" p-1 d-flex flex-row align-items-center overflow-auto flex-wrap">
              <span className="me-3">Categories: </span>
              {
                categories.map(category => <a href={`/categories/${category.slug}`} key={slug} className="card p-2 fs-6 text-black-50 nounderline fw-normal me-1 mb-1">{category.name}</a>)
              }
            </div>
          </div>
        </section>

        {/* Product List */}
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
                    badges={[...product.categories.map(category => category.name)]}
                    permalink={product.permalink}
                    key={product.permalink}
                  />
                )
              }
            </div>
          </div>
        </section>
      </div>
      <Footer />
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