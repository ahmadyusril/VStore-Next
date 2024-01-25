"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const Category: React.FC<CategoryProps> = ({ label, icon: Icon, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    if (label === "All") {
      router.push("/");
    } else {
      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        {
          skipNull: true,
        }
      );

      router.push(url);
    }
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-black transition cursor-pointer
    ${
      selected && label === "Nvidia"
        ? "border-b-green-500 text-green-500"
        : selected && label === "AMD"
        ? "border-b-red-500 text-red-500"
        : selected && label === "Intel"
        ? "border-b-blue-600 text-blue-600"
        : selected && label === "All"
        ? "border-b-black text-black"
        : "border-b-transparent text-black"
    }`}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default Category;
