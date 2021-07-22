import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import commerce from '../../lib/commerce'

function CategoryPage({ products, category }) {
  return (
    <>
      <Navbar />
      <section id="products" className="my-3">
        <div className="container">
          <h3 className="mb-3">
            Showing "{category.name}"
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
                />
              )
            }
          </div>
        </div>
      </section>
      <Footer />

    </>
  );
}
export default CategoryPage;

export async function getStaticProps({ params }) {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products,
    },
  };
}

export async function getStaticPaths() {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}
