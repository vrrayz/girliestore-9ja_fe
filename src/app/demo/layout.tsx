import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Demo Testing",
//   description: "All GS9ja Products",
// };

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-[40px] lg:grid lg:grid-cols-[27.5%_72.5%] items-start">
      <div className="hidden lg:grid gap-[24px]">
        <div>
          <h5 className="font-bold">Products</h5>
          <ul className="ml-4 mt-[16px]">
            <li>
              <a href="#">View Products</a>
            </li>
            <li>
              <a href="#">Create Product</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">Products</h5>
          <ul className="ml-4 mt-[16px]">
            <li>
              <a href="#">View Products</a>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}
