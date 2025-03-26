import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useUsers } from "../hooks/useUsers";
import { SearchBar, SortableHeader } from "./searchSort";
import { UserDetails } from "./userDetails";

function UserList() {
	const {
		users = [],
		loading,
		error,
		filterUsers,
		sortUsers,
		sortConfig = { key: "name", direction: "ascending" },
	} = useUsers();

	const [selectedUser, setSelectedUser] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		const term = e.target.value;
		setSearchTerm(term);
		filterUsers(term);
	};

	const handleSort = (key) => {
		sortUsers(key); // This now calls the handleSort from useUsers
	};

	const handleUserClick = (user) => {
		setSelectedUser(user);
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen">
				Loading...
			</div>
		);
	}

	if (error) {
		return <div className="text-red-500 text-center p-4">{error}</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<Card className="mb-4">
				<CardHeader>
					<CardTitle>User Directory</CardTitle>
					<SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
				</CardHeader>
				<CardContent>
					<table className="w-full border-collapse">
						<thead>
							<tr>
								<SortableHeader
									title="Name"
									sortKey="name"
									currentSortKey={sortConfig.key}
									sortDirection={sortConfig.direction}
									onSort={handleSort}
								/>
								<SortableHeader
									title="Email"
									sortKey="email"
									currentSortKey={sortConfig.key}
									sortDirection={sortConfig.direction}
									onSort={handleSort}
								/>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr
									key={user.id}
									className="hover:bg-gray-100 cursor-pointer"
									onClick={() => handleUserClick(user)}
								>
									<td className="p-2 border">{user.name}</td>
									<td className="p-2 border">{user.email}</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardContent>
			</Card>
			{selectedUser && <UserDetails user={selectedUser} />}
		</div>
	);
}

export default UserList;
