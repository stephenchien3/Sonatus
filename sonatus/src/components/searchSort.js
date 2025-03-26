// Search and sorting component for the search page

import React from "react";
import { Input } from "./ui/input";
import { ChevronUp, ChevronDown } from "lucide-react";

// SearchBar component
export function SearchBar({ searchTerm, onSearch }) {
	return (
		<Input
			placeholder="Search by name or email"
			value={searchTerm}
			onChange={onSearch}
			className="mt-2"
		/>
	);
}

// When clicked, the SortableHeader component will call the onSort function with the sortKey
// This will sort the data by the sortKey

export function SortableHeader({
	title,
	sortKey,
	currentSortKey,
	sortDirection,
	onSort,
}) {
	return (
		<th
			className="p-2 border text-left cursor-pointer flex items-center"
			onClick={() => onSort(sortKey)}
		>
			{title}
			{currentSortKey === sortKey &&
				(sortDirection === "ascending" ? (
					<ChevronUp className="ml-2 inline" size={16} />
				) : (
					<ChevronDown className="ml-2 inline" size={16} />
				))}
		</th>
	);
}
