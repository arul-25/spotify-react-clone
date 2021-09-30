import React from "react";
import "./Footer.css";
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<img src="https://image.shutterstock.com/image-vector/lp-record-vinyl-disc-cover-600w-1168701541.jpg" alt="" className="footer__albumLogo" />
				<div className="footer__songInfo">
					<h4>Yeah!</h4>
					<p>Users</p>
				</div>
			</div>

			<div className="footer__center">
				<Shuffle className="footer__green" />
				<SkipPrevious className="footer__icon" />
				<PlayCircleOutline className="footer__icon" fontSize="large" />
				<SkipNext className="footer__icon" />
				<Repeat className="footer__green" />
			</div>

			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
