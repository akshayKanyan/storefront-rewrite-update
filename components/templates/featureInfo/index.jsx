import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { H1, H2, H3, P1, P2, P3, Sh } from "../../typography";
import { Wrapper } from "../wrapper";
import { FeatureInfoStyle } from "./featureInfoStyle.js";

const useStyles = makeStyles(FeatureInfoStyle);

const features = [{
	content_image: { url: `https://3pupscript.globexcorp.net/wp-content/uploads/2020/10/Asset-1@3x-3.png` },
	content_header: "Identify hair loss",
	content_desc: "Many men start to lose hair when they hit 30. It’s normal. If you’ve noticed loose hair falling out, thinning, or a receding hairline, it’s time to do something about it."
}, {
	content_image: { url: `https://3pupscript.globexcorp.net/wp-content/uploads/2020/10/Asset-3@3x-3.png` },
	content_header: "Book an online doc visit",
	content_desc: "Talk to one of our many professionals ready to tell you what’s what in the world of hair loss. They’ll learn just enough about your lifestyle to know which treatment is the right fit."
}, {
	content_image: { url: `https://3pupscript.globexcorp.net/wp-content/uploads/2020/10/Asset-4@3x-2.png` },
	content_header: "Order and get growing",
	content_desc: "Skip the pharmacy trip and get your prescription delivered directly. Start your treatment. Need a refill? No problem, just come on back and re-order with ease."
}];

export default function FeatureInfo(props) {
	const classes = useStyles();
	let { style = {}, classProp = {}, containerProps = {} } =
		props || {};

	return (
		<Wrapper
			style={{ ...style }}
			className={`${classes.featureInfo}`}
			{...containerProps}
		>
			{features.map((feature, i) => {
				return (<FeatureArea key={i} feature={feature} classes={classes} />);
			})}
		</Wrapper>
	);
}

const FeatureArea = ({ classes, feature }) => {
	const { content_desc, content_header, content_image: { url = "" } = {} } = feature;
	return (
		<Wrapper col className={classes.ContentWrapper}>
        	<img className={classes.featureInfo_image} src={url} />
			<H3 className={classes.featureInfo_heading}>{content_header}</H3>
			<P3 className={classes.featureInfo_description}>{content_desc}</P3>
      	</Wrapper>
	);
};
