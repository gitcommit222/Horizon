import Sidebar from "@/components/SideBar";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = { firstName: "Marnel", lastName: "Valentin" };
	return (
		<main className="flex h-screen w-full font-inter">
			<Sidebar user={loggedIn} />
			{children}
		</main>
	);
}
