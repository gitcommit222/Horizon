import React from "react";

const HeaderBox = ({
	type = "title",
	title,
	user,
	subtext,
}: HeaderBoxProps) => {
	return (
		<div className="header-box">
			{title}, {user}
			<p>{subtext}</p>
		</div>
	);
};

export default HeaderBox;
