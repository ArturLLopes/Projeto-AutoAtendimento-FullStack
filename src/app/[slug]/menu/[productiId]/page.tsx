import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
    params: Promise<{ slug: string; productId: string }>;
  }
const ProductPage =  ({params}: ProductPageProps) => {
    const { slug, productId} =  params;
    const product =  db.product.findUnique({
        where: {id: productId},
    });
    if(!product){
        return notFound();
    }
    

    return ( 
        <>

<ProductHeader product={product} />

       
        <h1>produtos</h1>
        {slug}
        {productId}
        
        </>
     );
}
 
export default ProductPage;