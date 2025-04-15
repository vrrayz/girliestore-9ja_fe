import { Store } from "@/components/Admin/Store";

export default function Page({ params }: { params: { id: string } }) {
  return <Store id={params.id} />;
}
