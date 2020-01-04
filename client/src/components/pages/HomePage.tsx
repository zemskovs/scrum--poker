import React from "react";
import {
	Page,
	Navbar,
	BlockTitle,
	Block,
	Swiper,
	SwiperSlide
} from "framework7-react";
import BottomBar, { Pages } from "../bottomBar/BottomBar";
import { Doughnut } from "react-chartjs-2";
import { Commands } from "../../models/models";
import fetchHook from "../../hooks/fetchHook";

//toDO: разобраться с иконками
export default () => {
	const [commands, setCommands] = React.useState<Commands[]>([{ title: "" }]);

	fetchHook("/api/rooms", res => setCommands(res.rooms));

	console.log(commands)

	return (
		<Page>
			<Navbar title="Room" />
			{commands && commands.map(x => x.title)}
		</Page>
	);
};
