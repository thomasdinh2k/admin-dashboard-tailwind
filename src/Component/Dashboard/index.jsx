import Grid from "./Grid";
import TopBar from "./TopBar";

export const Dashboard = () => {
	return (
		<div className="bg-white rounded-lg pb-4 shadow h-[200vh]">
			<TopBar />
			<Grid />
		</div>
	);
};
