import { AddProduct } from "@/components/Products/AddProduct";
import { Store } from "@/components/Store/Store";

export default function Page({ params }: { params: { id: string } }) {
  return <AddProduct id={params.id} />;
}
