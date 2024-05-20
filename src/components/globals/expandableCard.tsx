'use client';
import HeartFilled from '@/theme/customIcons/heartFilled.svg';
import HeartOutlined from '@/theme/customIcons/heartOutlined.svg';
import '@/theme/index.css';
import { Cat } from '@/types/Cat';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

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
  const [liked, setLiked] = useState(false);
  const [animation, setAnimation] = useState(false);

  if (!name) {
    return null;
  }

  const handleLikeClick = () => {
    setLiked(!liked);
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 500);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 345,
        border: '2px solid #594444',
        borderRadius: '1.5rem',
      }}
      className="shadow-md "
    >
      <CardMedia component="img" height="194" image={image} alt="Gato" />
      <CardHeader title={name} subheader={`${breed} - ${color}`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="flex items-center gap-2"
          sx={{ marginTop: '1rem' }}
        >
          <Avatar
            alt="Avatar"
            sx={{ width: 38, height: 38, backgroundColor: 'purple' }}
          >
            {username[0]}
          </Avatar>
          {username}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {liked ? (
          <IconButton
            onClick={handleLikeClick}
            sx={{ width: 50 }}
            className={animation ? 'heart-beat' : ''}
          >
            <HeartFilled />
          </IconButton>
        ) : (
          <IconButton
            onClick={handleLikeClick}
            sx={{ width: 50 }}
            className={animation ? 'heart-beat' : ''}
          >
            <HeartOutlined />
          </IconButton>
        )}
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
