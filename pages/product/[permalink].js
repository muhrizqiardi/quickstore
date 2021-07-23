import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// Import commerce.js
import commerce from "../../lib/commerce";

import formatter from '../../utils/priceFormatter'

function Component({ product }) {
  // console.log(product)
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 g-3 my-3">
          <div className="col">
            <div id="carousel" className="carousel slide rounded-3 overflow-hidden">
              <div className="carousel-indicators">
                {
                    [...Array(product.assets.length)].map(i =>
                      <button type="button" data-bs-target="#carousel" data-bs-slide-to={i} className="active" aria-current="true" key={`slide-${i}`} aria-label={`Slide ${i}`} />
                    )
                }
              </div>
              <div className="carousel-inner">
                {product.assets.map(asset =>
                  <div className={`carousel-item ${product.assets.indexOf(asset) === 0 ? 'active' : ''}`} key={`image-${product.assets.indexOf(asset)}`}>
                    <img src={asset.url} style={{ width: "100%", objectFit: 'cover' }} alt={`Image ${product.assets.indexOf(asset) + 1} of ${product.name}`}/>
                  </div>
                )}
              </div>
              {product.assets.length > 1 &&
                <>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </>
              }
            </div>
          </div>
          {/* Product Detail */}
          <div className="col">
            <section id="product-detail" className="card p-3">
              <h3>{product.name}</h3>
              <p className="my-3">
                {product.description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora dicta temporibus quasi voluptas quibusdam sed, quod earum, deleniti labore ipsa ducimus maxime beatae cum at consequuntur aliquam quos distinctio aliquid!'}
              </p>
              <p className="fs-4">{formatter.format(product.price.raw)}</p>

              <p className="">Quantity:</p>
              <form className="d-flex flex-col">
                <div className="input-group mb-3">
                  <input type="number" value={1} className="form-control" name="quantity" style={{ width: "3rem" }} />
                  <button className="btn btn-dark"><i className="bi bi-basket"></i> Add to cart</button>
                </div>

              </form>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Component;

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}
