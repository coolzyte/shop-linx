import { Product } from '@/utils/data';
import Link from 'next/link';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <span>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </span>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <span>
            <h2 className="text-lg">{product.name}</h2>
          </span>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
