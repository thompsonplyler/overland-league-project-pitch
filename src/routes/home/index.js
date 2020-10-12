
import style from './style.css';
import styled, { css } from 'styled-components';
import device from '../../device'
import { Reveal, Tween, Timeline, PlayState } from 'react-gsap';
import pudongStadium from '../../assets/images/pudong_stadium.webp'
import staplesCrowd from '../../assets/images/staples_crowd.webp'
import summonersCup from '../../assets/images/summoners_cup.jpg'
import cnbcShot from '../../assets/images/cnbc_shot.png'
import msgCrowd from '../../assets/images/msg_crowd.webp'
import hyBackyardGame from '../../assets/images/hy_backyard_game.jpg'
import hyBackyardChairs from '../../assets/images/hy_backyard_chairs.jpg'
import hyBackyardGeneric from '../../assets/images/hy_backyard_generic.jpg'
import hyBackyardWide from '../../assets/images/hy_backyard_wide.png'


console.log(device.mobileS)

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

	@media(${device.mobileS}){
		background-position: 50% 50%;
	}
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
background-color: rgba(0, 0,139, .6);
order: 5;
grid-row-start: 5;
text-shadow: black 2px 2px;

@media(${device.mobileS}){
	background-position: 50% 50%;
	background-blend-mode: multiply;
}
`}

${props => props.section6 &&
		css`
background: goldenrod;
order: 6;
grid-row-start: 6;
background-image: url(${staplesCrowd});
background-size: cover;
text-shadow: black 2px 2px;
background-color: rgba(0, 0,139, .8);
background-blend-mode: multiply;

`}

${props => props.section7 &&
		css`
		order: 7;
		grid-row-start: 7;
		background-color: rgba(0, 0,139, .8);
		text-shadow: black 2px 2px;
		background-image: url(${msgCrowd});
		background-blend-mode: multiply;
		background-size: cover;
		@media(${device.mobileS}){
			background-position: 50% 50%;
			
		}
}

`}

${props => props.section8 &&
		css`
order: 8;
grid-row-start: 8;
background-color: rgba(0, 0,139, .6);
background-image: url(${hyBackyardWide});
background-blend-mode: multiply;
background-size: cover;
text-shadow: black 2px 2px;
@media(${device.mobileS}){
	background-position: 50% 50%;
	background-blend-mode: multiply;}

`}

${props => props.section9 &&
		css`
		background-color: rgba(0, 0,139, .8);
order: 9;
grid-row-start: 9;
grid-row-end: 10;
background-image: url(${hyBackyardChairs});
background-size: cover;
background-blend-mode: darken;
@media(${device.mobileS}){
	background-position: 50% 50%;
	background-blend-mode: multiply;}

`}

${props => props.section10 &&
		css`
	background-color: rgba(0, 0,139, .8);
order: 10;
grid-row-start: 10;
grid-row-end: 11;
background-image: url(${hyBackyardGeneric});
background-size: cover;
background-blend-mode: darken;
@media(${device.mobileS}){
background-position: 50% 50%;
background-blend-mode: multiply;}

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

			<div class={style.landscapeicontext}>
				This site is best viewed in landscape mode.
				<br />
				<Timeline target={
					<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-phone-landscape" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M1 4.5v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm-1 6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v6z" />
						<path fill-rule="evenodd" d="M14 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
					</svg>}>
					<Tween from={{ rotation: -90 }} to={{ rotation: 0 }} duration={2} repeat={-1} />
				</Timeline>

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
			<p>While the current tournament lasts throughout the month, the <span style={{ color: "goldenrod", "font-size": "6vh" }}>World Final match</span> happens on <span style={{ color: "goldenrod", "font-size": "6vh" }}>October 31 @ 6am EST</span></p>
		</PageDiv>

		<PageDiv section6>
			<p>It's not an exaggeration to say that final match is the Super Bowl of e-sports.</p>
			<img class={style.headlineimage} src={cnbcShot}></img>

			<p>It's an understatement.</p>

		</PageDiv>

		<PageDiv section7>
			<Reveal repeat>
				<Tween from={{ backgroundImage: `${msgCrowd}` }} to={{ backgroundImage: `${hyBackyardGame}` }} duration={5} >
					<p>League of Legends has a global audience, and there is a hunger for this specific content in a live, entertaining form like the awesome program at Hudson Yards Backyard.</p>
				</Tween>
			</Reveal>
		</PageDiv>

		<PageDiv section8>
			<p>We can the speak the language of the local NYC audience in your marketing. We can find them online, and we can put people in seats. <span style={{ color: "goldenrod", "font-size": "6vh" }}>Even in a pandemic.</span></p>
		</PageDiv>

		<PageDiv section9>
			<p>The tournament is happening even as you read this. Make no mistake: <span style={{ color: "goldenrod", "font-size": "6vh" }}>the clock is ticking.</span></p>
		</PageDiv>

		<PageDiv section10>
			<h1>The Biggest Names in eSports:</h1>
			<ul>
				<li style={{ color: 'goldenrod' }}>League of Legends
					<ul style={{ 'font-size': '4vh', color: 'white' }}><li>World Championship: 3 October 2020 - 31 October 2020</li></ul>
				</li>
				<li style={{ color: 'goldenrod' }}>Counter-Strike: Global Offensive
					<ul>
						<li style={{ 'font-size': '4vh', color: 'white' }}>Spring Major: 10 May 2021 - 23 May 2021</li>
						<li style={{ 'font-size': '4vh', color: 'white' }}>Fall Major: 1 May 2021 - 14 May 2021</li>
					</ul>
				</li>
				<li style={{ color: 'goldenrod' }}>Dota 2
					<ul><li style={{ 'font-size': '4vh', color: 'white' }}>International: TBA</li></ul>
				</li>
				<li style={{ color: 'goldenrod' }}>Overwatch
					<ul><li style={{ 'font-size': '4vh', color: 'white' }}>Overwatch World Cup: TBA</li></ul>
				</li>
			</ul>
		</PageDiv>

		<PageDiv datelist>
			<ul>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 3</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 4</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 5</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 6</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 8</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 9</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 10</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 11</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 15</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 16</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 17</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={1.5}><li class={style.datelistli}>October 18</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={2}><li class={style.datelistli}>October 24</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={2.5}><li class={style.datelistli}>October 25</li></Tween></Reveal>
				<Reveal repeat><Tween from={{ opacity: .5 }} to={{ opacity: 0 }} duration={7}><li class={style.datelistli}><br />October 31</li></Tween></Reveal>
			</ul></PageDiv>
	</div >
);

export default Home;