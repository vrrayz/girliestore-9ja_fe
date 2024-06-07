import { Store } from "@/components/Store/Store";


export default function Page({ params }: { params: { id: number } }) {
  // return <LandingPage />;
  // Others coming soon
  return <Store id={params.id} />;
}
