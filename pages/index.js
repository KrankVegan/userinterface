import Header from "@/components/Header";
import Featured from "@/components/Featured";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";

export default function HomePage({product}) {
  return (
    <div>
      <Header />

      <Featured product={product} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '66ec25d7c3b2639aa8a233c3';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: {product: JSON.parse(JSON.stringify(product))},
  };
}