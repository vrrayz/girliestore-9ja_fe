import { Store } from "@/components/Store/Store";

export default function Page({ params }: { params: { id: string } }) {
  return <Store id={params.id} />;
}
