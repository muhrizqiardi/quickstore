import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Component(props) {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 g-3 my-3">
          <div className="col">
            <div id="carousel" className="carousel slide rounded-3 overflow-hidden">
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
          {/* Product Detail */}
          <div className="col">
            <section id="product-detail" className="card p-3">
              <h3>Product Name</h3>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore asperiores ab iusto quia sed, magni quisquam architecto est unde in quis molestiae voluptates sunt esse. Suscipit accusantium commodi minima minus.
              </p>
              <p>IDR 10.0000</p>
              <form className="d-flex flex-col">
                <div class="input-group mb-3">
                  <input type="number" value={1} class="form-control" name="quantity" style={{width: "3rem"}}/>
                  <button className="btn btn-dark">Buy</button>
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
