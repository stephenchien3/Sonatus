// Find detailed information about the userimport React from 'react';
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export function UserDetails({ user }) {
	if (!user) return null;

	// It returns a Card component with the user's details
	// The user's details are displayed in a list format
	// The user's name, email, address, phone, and company are displayed

	return (
		<Card className="mt-4">
			<CardHeader>
				<CardTitle>User Details</CardTitle>
			</CardHeader>
			<CardContent>
				<div>
					<p>
						<strong>Name:</strong> {user.name}
					</p>
					<p>
						<strong>Email:</strong> {user.email}
					</p>
					<p>
						<strong>Address:</strong>{" "}
						{`${user.address.street}, ${user.address.city}`}
					</p>
					<p>
						<strong>Phone:</strong> {user.phone}
					</p>
					<p>
						<strong>Company:</strong> {user.company.name}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
