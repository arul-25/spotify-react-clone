import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useDataLayerValue();
	console.log(discover_weekly);
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img src={discover_weekly?.images[0].url} alt="Discover Weekly" />
				<div className="body__infoText">
					<strong>PLAYLISTS</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div class="body__songs">
				<div class="body__icons">
					<PlayCircleFilled className="body__shuffle" />
					<Favorite fontSize="large" />
					<MoreHoriz />
				</div>

				{/* List of songs */}
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
