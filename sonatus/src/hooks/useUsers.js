import { useState, useEffect } from "react";

export function useUsers() {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [sortConfig, setSortConfig] = useState({
		key: "name",
		direction: "ascending",
	});

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			if (!response.ok) throw new Error("Failed to fetch users");
			const data = await response.json();
			setUsers(data);
			setFilteredUsers(sortUsers(data, sortConfig.key, sortConfig.direction));
			setLoading(false);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
	};

	const filterUsers = (searchTerm) => {
		const filtered = users.filter(
			(user) =>
				user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.email.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredUsers(sortUsers(filtered, sortConfig.key, sortConfig.direction));
	};

	const sortUsers = (usersToSort, key, direction) => {
		return [...usersToSort].sort((a, b) => {
			const valueA = String(a[key]).toLowerCase();
			const valueB = String(b[key]).toLowerCase();
			return direction === "ascending"
				? valueA.localeCompare(valueB)
				: valueB.localeCompare(valueA);
		});
	};

	const handleSort = (key) => {
		const direction =
			sortConfig.key === key && sortConfig.direction === "ascending"
				? "descending"
				: "ascending";
		const newConfig = { key, direction };
		setSortConfig(newConfig);
		setFilteredUsers(sortUsers(filteredUsers, key, direction));
	};

	return {
		users: filteredUsers, // Return only filteredUsers to avoid confusion
		loading,
		error,
		filterUsers,
		sortUsers: handleSort, // Expose the sorting handler
		sortConfig,
	};
}
