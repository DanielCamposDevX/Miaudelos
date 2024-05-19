import { Cat } from '@/types/Cat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface CatCardProps extends Cat {
  toast: any;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CatCard({
  name,
  image,
  breed,
  color,
  description,
  username,
  toast,
}: CatCardProps) {
  if (!name) {
    return null;
  }
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 345,
        border: '1px solid #e0e0e0',
      }}
    >
      <CardMedia component="img" height="194" image={image} alt="Gato" />
      <CardHeader title={name} subheader={`${breed} - ${color}`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description} - {username}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            navigator.clipboard.writeText(`${name} - ${breed} - ${color}`);
            toast({
              content: 'Copiado para a área de transferência',
              severity: 'info',
            });
          }}
          aria-label="share"
        >
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
