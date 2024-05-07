import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
	const loggedIn = {
		firstName: "Marnel",
		lastName: "Valentin",
		email: "mharnhelvalentin@gmail.com",
	};
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn.firstName || "Guest"}
						subtext="Access and Manage your account transactions efficiently"
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.35}
					/>
				</header>
			</div>
			<RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
		</section>
	);
};

export default Home;
