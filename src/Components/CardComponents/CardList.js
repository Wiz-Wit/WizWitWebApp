import React from 'react'
import NewsCard from './Card'
import card_info from './cardData'
import Grid from '@mui/material/Grid';
import "../../Stylesheets/CardList.scss";

const CardList = () => {
  return (
    <Grid className='card-list' container spacing={{ md: 3 }}>
        {card_info.data.map((newsItem) => (
          <Grid item md={4} key={newsItem.imageUrl}>
            <NewsCard
                imageUrl={newsItem.imageUrl}
                title = {newsItem.title}
                description = {newsItem.description}
              ></NewsCard>
          </Grid>
        ))}
        
      </Grid>
  )
}

export default CardList