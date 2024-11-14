import React from 'react';
import * as H from '../../styles/HomeStyle';
import Header from '../../components/Header/HomeHeader'


const Home = ({ }) => {


  return (
    <>
      <H.Home>
          <Header />
          <H.RowBox>
            <H.Content>ProLink</H.Content>
          </H.RowBox>
      </H.Home>
    </>
  )
}

export default Home;