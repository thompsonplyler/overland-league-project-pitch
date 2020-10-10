import { Fragment, h } from 'preact';
import style from './style.css';
import styled, { css } from 'styled-components';
import video from '../../assets/msg_video.mp4';
import { Reveal, Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import pudongStadium from '../../assets/images/pudong_stadium.webp'
import staplesCrowd from '../../assets/images/staples_crowd.webp'
import summonersCup from '../../assets/images/summoners_cup.jpg'
import cnbcShot from '../../assets/images/cnbc_shot.png'
import msgCrowd from '../../assets/images/msg_crowd.webp'
import hyBackyardGame from '../../assets/images/hy_backyard_game.jpg'

const PageDiv = styled.section`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
justify-content: center;
align-items: center;
color: white;
height: 100vh;
font-family: 'Archivo Black', sans-serif;
font-size: 5vh;
padding-left: 5vw;
padding-right: 5vw;
order: 4;

${props => props.section1 &&
		css`
	z-index: 0;
	order: 1;
	background-image: url(${pudongStadium});
	background-size: cover;
	text-shadow: black 2px 2px;
	`};

${props => props.section2 &&
		css`
background: blue;
order: 2;
grid-row-start: 2;
background-image: url(${staplesCrowd});
	background-size: cover;
	text-shadow: black 2px 2px;
`}

${props => props.section3 &&
		css`
background: purple;
order: 3;
grid-row-start: 3;
`}

${props => props.section4 &&
		css`
position: relative;
order: 4;
z-index: 2;
grid-row-start: 4;
grid-column-end: 1;
top: 1vh;
`};

${props => props.datelist &&
		css`
order: 4;
z-index: 1;
grid-row-start: 4;
grid-column-end: 1;
position: relative;
top: 1vh;
justify-items: right;

padding-right: -20px;
font-size: 2vh;
opacity: 100%;
color: red;

`};

${props => props.section5 &&
		css`
background-image: url(${summonersCup});
background-size: cover;
order: 5;
grid-row-start: 5;
text-shadow: black 2px 2px;
`}

${props => props.section6 &&
		css`
background: goldenrod;
order: 6;
grid-row-start: 6;
background-image: url(${msgCrowd});
background-size: cover;
text-shadow: black 2px 2px;
`}

${props => props.section7 &&
		css`
background: aquamarine;
order: 7;
grid-row-start: 7;
text-shadow: black 2px 2px;
background-image: url(${hyBackyardGame});
background-size: cover;
`}

${props => props.section8 &&
		css`
background: orange;
order: 8;
grid-row-start: 8;
`}

${props => props.section9 &&
		css`
background: teal;
order: 9;
grid-row-start: 9;
grid-row-end: 10;
`}

`

const ClassToggleStyled = styled.div`
.section {
	height: 30vh;
}

.test {
	transition: width 0.3s ease-out;
	width: 100px;
	height: 100px;
	background-color: red;
	margin: 0 !important
}

&.yellow {
	background-color: yellow
}

.zap {
	width: 100%
}
`

const Home = () => (
	<div class={style.home}>
		<PageDiv section1>
			eSports isn't coming.
			<div class={style.wrapper}>
				<h1 class={style.glitch}></h1>
			</div>
		</PageDiv>

		<PageDiv section2>
			It's here.
		</PageDiv>

		<PageDiv section4>
			<Reveal repeat threshold={0}>
				<Tween from={{ opacity: 0 }} duration={2}>
					<p>From now until the end of October, the biggest e-sports event in the world is happening:
						<Tween
							to={{ color: 'goldenrod' }}
							duration={10}
						>
							<span> the League of Legends World Championship.</span>
						</Tween>
					</p>
				</Tween>
			</Reveal>


		</PageDiv>

		<PageDiv section5>
			While the current tournament lasts throughout the month, the World Final match happens on October 31.
		</PageDiv>

		<PageDiv section6>
			<p>It's not an exaggeration to say that final match is the Super Bowl of e-sports.</p>
			<img style={{
				height: "25vh", "box-shadow": "black 2px 2px 2px"
			}} src={cnbcShot}></img>
			<Reveal repeat threshold={0}><Tween from={{ x: "70vw" }} to={{ opacity: 1, x: 0 }} duration={.5}>
				<p>It's an understatement.</p>
			</Tween></Reveal>
		</PageDiv>

		<PageDiv section7>
			<Reveal repeat>
				<Tween from={{ backgroundImage: `${msgCrowd}` }} to={{ backgroundImage: `${hyBackyardGame}` }} duration={5} >
					<p>League of Legends has a global audience, and there is a hunger for this specific content in a live, entertaining form like the awesome program at Hudson Yards Backyard.</p>
				</Tween>
			</Reveal>
		</PageDiv>

		<PageDiv section8>
			We can the speak the language of the local NYC audience in your marketing. We can find them online, and we can put people in seats. Even in a pandemic.
		</PageDiv>

		<PageDiv section9>
			The tournament officially started October 3rd, 2020. So make no mistake: the clock is ticking.
		</PageDiv>

		<PageDiv datelist>
			<ul>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 3</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 4</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 5</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 6</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 8</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 9</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 10</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 11</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 15</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 16</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 17</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 18</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 24</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li>October 25</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li><br />October 31</li></Tween></Reveal>
			</ul></PageDiv>
	</div >
);

export default Home;