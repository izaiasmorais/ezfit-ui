import { Search } from "lucide-react";
import { forwardRef } from "react";
import { Input, type InputProps } from "./Input";

export type SearchInputProps = Omit<InputProps, "startIcon" | "type">;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
	({ placeholder = "Buscar...", ...props }, ref) => (
		<Input ref={ref} type="search" startIcon={Search} placeholder={placeholder} {...props} />
	),
);

SearchInput.displayName = "SearchInput";
