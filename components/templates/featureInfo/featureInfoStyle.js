export const FeatureInfoStyle = (theme) => {
    return {
        featureInfo: {
            margin: "20px 0px 20px 130px",
            display: "flex",
            justifyContent: "space-between",
            [theme.breakpoints.down("xs")]: {
                flexDirection: "column",
                margin: "20px 24.5px 20px 24.5px",
            },
        },
        featureInfo_image: {
            width: "47.59px",
            height: "48.32px",
            marginBottom: "10px",
            [theme.breakpoints.down("xs")]: {
                marginBottom: "20px",
            },
        },
        featureInfo_heading: {
            marginBottom: "10px",
            [theme.breakpoints.down("xs")]: {
                marginBottom: "20px",
            },
        },
        featureInfo_description: {
            marginBottom: "10px",
            [theme.breakpoints.down("xs")]: {
                marginBottom: "80px",
            },
        },
        ContentWrapper: {
            alignItems: "center",
            textAlign:  "center",
            marginRight: "127px",
            [theme.breakpoints.down("xs")]: {
                marginRight: "0px",
            },
        }
    };
};