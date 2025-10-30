import { ProductCard } from "@/components/ProductCard/ProductCard";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(`httms://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <ProductCard product={product} variant="with-back-btn" />
    </div>
  );
}
