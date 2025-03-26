import React from "react";

export function Card({ children, className, ...props }) {
	return (
		<div className={`border rounded-lg shadow-md ${className}`} {...props}>
			{children}
		</div>
	);
}

export function CardHeader({ children, className, ...props }) {
	return (
		<div className={`p-4 border-b ${className}`} {...props}>
			{children}
		</div>
	);
}

export function CardTitle({ children, className, ...props }) {
	return (
		<h2 className={`text-xl font-semibold ${className}`} {...props}>
			{children}
		</h2>
	);
}

export function CardContent({ children, className, ...props }) {
	return (
		<div className={`p-4 ${className}`} {...props}>
			{children}
		</div>
	);
}
