import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import {Ultra_sound} from "../../Ultra_sound";
import {Header} from "../Header";
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import {Arduino_uno} from "../../../api/Collections";

export const Dashboard = () => {
	const Subscribe_in_Arduino_uno = useSubscribe("Arduino_mega")
	const collection_Arduino_uno = useFind(() => {
		return  Arduino_uno.find({})


	})
	console.log(collection_Arduino_uno)

	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="40px">

			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="20px"
			>
				{/* ROW 1 */}





				{/* ROW 2 */}
				<Box
					gridColumn="span 8"
					gridRow="span 3"

					backgroundColor={colors.primary[400]}
				>
					<Box
						mt="25px"
						p="0 30px"
						display="flex "
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography
							variant="h3"
							fontWeight="600"
							color={colors.grey[100]}
						>
							Arduino Ultra sound
						</Typography>
						<Box>

							<Typography
								variant="h5"
								fontWeight="bold"
								color={colors.greenAccent[500]}
							>
								Current Distance in Cm : &nbsp;&nbsp;

									{ collection_Arduino_uno[0].Ulra_sound.Distance }

							</Typography>
							<Typography
								variant="h5"
								fontWeight="bold"
								color={colors.greenAccent[500]}
							>
								Current Duration In ms : &nbsp;&nbsp;

								{ collection_Arduino_uno[0].Ulra_sound.Duration }

							</Typography>
						</Box>
					</Box>

						<Ultra_sound/>



				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					overflow="auto"
				>


				</Box>

				{/* ROW 3 */}
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px"
				>
					<Typography variant="h3" fontWeight="600">
						Temperature
					</Typography>


					<Box
						display="flex"
						flexDirection="row"
						alignItems="center"
						justifyContent="space-between"

						mt="25px"
					>

						<Typography
							variant="h5"
							color={colors.greenAccent[500]}
							sx={{ mt: "15px" }}
						>
							{collection_Arduino_uno[0].Tempurature.Tempurature} in Celsius
						</Typography>

						<Typography
							variant="h5"
							color={colors.greenAccent[500]}
							sx={{ mt: "15px" }}
						>
							% {collection_Arduino_uno[0].Tempurature.Humidity} Humidity
						</Typography>
					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Typography
						variant="h5"
						fontWeight="600"
						sx={{ padding: "30px 30px 0 30px" }}
					>
					</Typography>
					<Box height="250px" mt="-20px">

					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					padding="30px"
				>
					<Typography
						variant="h5"
						fontWeight="600"
						sx={{ marginBottom: "15px" }}
					>
					</Typography>
					<Box height="200px">
						{/*<GeographyChart isDashboard={true} />*/}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

