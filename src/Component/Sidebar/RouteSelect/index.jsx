import React from "react";
import { FiHome } from "react-icons/fi";

const RouteSelect = () => {
	return <div className="space-y-1">
        <Route Icon={FiHome} selected={true} title="Dashboard"/>
        <Route Icon={FiHome} selected={false} title="Dashboard"/>
        <Route Icon={FiHome} selected={false} title="Dashboard"/>
        <Route Icon={FiHome} selected={false} title="Dashboard"/>
        <Route Icon={FiHome} selected={false} title="Dashboard"/>
    </div>;
};

export default RouteSelect;

const Route = ({ selected, Icon, title }) => {
	return (
		<button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
                selected
                ? "bg-white text-stone-950 shadow"
                : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
            }`}
        >
			<Icon className={selected ? "text-black" : ""}/>
			<span>{title}</span>
		</button>
	);
};
