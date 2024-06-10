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
    title: paramsToName(params.id),
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <>The product single page id === {params.id}</>;
}
