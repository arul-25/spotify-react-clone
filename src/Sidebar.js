import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Search, LibraryMusic, Home } from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
	const [{ playlists }, dispatch] = useDataLayerValue();

	return (
		<div className="sidebar">
			<img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify Logo" />

			<SidebarOption title="Home" Icon={Home} />
			<SidebarOption title="Search" Icon={Search} />
			<SidebarOption title="Your Library" Icon={LibraryMusic} />

			<br />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map((playlist, index) => (
				<SidebarOption key={index} title={playlist.name} />
			))}
		</div>
	);
}

export default Sidebar;
