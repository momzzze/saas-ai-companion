"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import qs from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("category");
  const name = searchParams.get("name");
  const [value = "", setValue] = useState(name || "");
  const debouncedValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId,
    };

    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, router, categoryId]);

  return (
    <div className="relative group rounded-lg px-3">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-30 dark:opacity-75 group-hover:opacity-40 dark:group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative card">
        <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
        <Input
          onChange={onChange}
          value={value}
          placeholder="Search..."
          className="pl-10 dark:bg-secondary/90"
        />
      </div>
    </div>
  );
};

export default SearchInput;
