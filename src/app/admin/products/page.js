
import AddProductForm from '../../../Components/AddProductForm'; // relative import
import ProductsList from './ProductsList';   // relative import

export default function ProductsPage() {
  return (
    <div>
      <AddProductForm />
      <ProductsList />
    </div>
  );
}
