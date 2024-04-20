import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Novice',
  1: 'Beginner',
  1.5: 'Intermediate',
  2: 'Advanced Beginner',
  2.5: 'Proficient',
  3: 'Advanced',
  3.5: 'Expert',
  4: 'Master',
};

function getLabelText(value, label) {
  return `${label}: ${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function SkillRatings() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <RatingSet label="Java" initialValue={3.5} />
      <RatingSet label="React" initialValue={3} />
      <RatingSet label="Flutter" initialValue={2.5} />
      <RatingSet label="JMeter" initialValue={2} />
    </div>
  );
}

function RatingSet({ label, initialValue }) {
  const [value] = React.useState(initialValue);

  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box
      sx={{
        width: 200,
        alignItems: 'center', // Center align items horizontally
        marginRight: 20, // Add some margin between sets
        transition: 'transform 0.2s', // Add transition effect
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)', // Move up slightly when hovered
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>{label}</div>
      <Rating
        name={`${label}-rating`}
        value={value}
        precision={0.5}
        getLabelText={(value) => getLabelText(value, label)}
        emptyIcon={<StarIcon style={{ color: 'black' }} fontSize="inherit" />} // Adjust opacity here
        readOnly
      />
      <Box sx={{ mt: 1 }}>{labels[value]}</Box>
    </Box>
  );
}
