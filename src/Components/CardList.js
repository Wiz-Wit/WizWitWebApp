import React from 'react'
import NewsCard from './Card'
import card_info from './../cardData'
import Grid from '@mui/material/Grid';
import "../Stylesheets/CardList.scss";

const CardList = () => {
  return (
    <Grid className='card-list' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {card_info.data.map((newsItem) => (
          <Grid item xs={2} sm={4} md={4} key={newsItem.imageUrl}>
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