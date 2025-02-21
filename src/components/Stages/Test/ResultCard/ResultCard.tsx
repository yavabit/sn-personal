import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type ResultCardProps = {
	card: {label: string;
	description: string;
	img: string;
	code: string;
	winner: boolean;}
}

export const ResultCard = ({ card }: ResultCardProps) => {
	return (
		<Card style={{width: '100%'}}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="340"
					image={card.img}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{card.label}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						{card.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
