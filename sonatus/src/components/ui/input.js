import React from "react";

// Simple Input component
export function Input({ className, ...props }) {
	return (
		<input className={`w-full p-2 border rounded-md ${className}`} {...props} />
	);
}
