import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  .cat {
    heigth: 200px;
    width: 200px;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
`
const Home = () => (
  <Styles>
    <h1>CAT HOME</h1>
    <p>Cat ipsum dolor sit amet, relentlessly pursues moth. Meow chase the pig around the house for purr when give birth but playing with balls of wool. </p>
    <p>Tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad attack dog, run away and pretend to be victim so immediately regret falling into bathtub.</p>
    <p>𝕄𝔼𝕆𝕎 annoy the old grumpy cat, start a fight and then retreat to wash when i lose so milk the cow.</p>
    <img src="https://img.pixers.pics/pho_wat(s3:700/FO/54/97/24/72/700_FO54972472_71e54eacdd482b53c510cf09b515e5f2.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/wall-murals-cat-background.jpg.jpg" alt="cat" className="cat"/>
  </Styles>
)

export default Home
