import { Store } from "@/components/Admin/Store";
import { paramsToName } from "@/helpers";
import { Metadata, ResolvingMetadata } from "next";
interface Props {
  params: { id: string };
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  return {
    title: "Admin | " + paramsToName(params.id),
  };
}
export default function Page({ params }: { params: { id: string } }) {
  return <Store id={params.id} />;
}
