import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import NewProducts from "@/components/NewProduts";

export default function HomePage({featuredProduct, newProducts}) {
  return (
    <div>
      <Header />

      <Featured product={featuredProduct} />

      <NewProducts products = {newProducts}> </NewProducts>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '66ec25d7c3b2639aa8a233c3';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}