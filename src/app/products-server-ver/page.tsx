import Product from "../types/Product";

const Page = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });

  const { products } = await res.json();

  return (
    <div className="m-3">
      <h1 className="m-4 font-extrabold text-2xl">Products</h1>
      <ul>
        {products.map((p: Product) => (
          <li key={p.id} className="m-4 bg-blue-50">
            <h2 className="font-bold">
              {p.id}. {p.title}
            </h2>
            <p className="text-gray-700 ">{p.description}</p>
            <p>Price: {p.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
