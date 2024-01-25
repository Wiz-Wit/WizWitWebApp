import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import GameInfo from './../cardData'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  var gameInfo = GameInfo.data;
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = gameInfo.length;
  
    //Switching to next image
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    //Going to previous image
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    //Going to random image
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    
  return (
    //Size of Carousel
    <Box sx={{ maxWidth: 4000, flexGrow: 1 }}>
    {/*Label for Carousel*/}
    <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 50,
        pl: 150,
        marginTop: 20,
      }}
    >
    <Typography>"{gameInfo[activeStep].title}"</Typography>
    </Paper>
    {/*Not really sure yet*/}
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
        {/*Mapping games to Carousel*/}
      {gameInfo.map((step, index) => (
        <div key={step.title}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              component="img"
              sx={{
                height: 500,
                display: 'block',
                maxWidth: 900,
                overflow: 'hidden',
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                opacity: 0.6,
                filter: "grayscale(100%)",
               }}
              src={step.imageUrl}
              alt={step.title}
            />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
        {/*Label and CSS for Game Description*/}
        <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        pl: 135,
      }}
    >
    {/*Gets Description from cardData.js*/}
    <Typography>"{gameInfo[activeStep].description}"</Typography>
    </Paper>
    {/*Some mobile shit it seems*/}
    <MobileStepper
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  </Box>
);
}

export default Carousel;