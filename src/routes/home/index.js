import { h } from 'preact';
import style from './style.css';
import styled, { css } from 'styled-components'
import moment from 'moment';
import { countdown } from 'moment-countdown';
// import { countdown } from 'moment-countdown'

let halloween = moment().date(31).month(9);
console.log(halloween)
console.log(countdown)
// halloween.countdown().toString();


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
		position: relative;
	z-index: 0;
	top: 1vh;
	order: 1;
	`};

${props => props.section2 &&
		css`
background: blue;
order: 2;
grid-row-start: 2;
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
z-index: 0;
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
background: magenta;
order: 5;
grid-row-start: 5;
`}

${props => props.section6 &&
		css`
background: goldenrod;
order: 6;
grid-row-start: 6;
`}

${props => props.section7 &&
		css`
background: aquamarine;
order: 7;
grid-row-start: 7;
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

const Home = () => (
	<div class={style.home}>
		<PageDiv section1>
			eSports isn't coming.
		</PageDiv>

		<PageDiv section2>
			It's here.
		</PageDiv>

		<PageDiv section3>
			There's a huge opportunity for Overland and its partners right now.
		</PageDiv>

		<PageDiv section4>
			From now until the end of October, the biggest e-sports event in the world is happening: the League of Legends World Championship.
		</PageDiv>

		<PageDiv section5>
			While the current tournament lasts throughout the month, the World Final match happens on October 31.
		</PageDiv>

		<PageDiv section6>
			It's not an exaggeration to say that final match is the Super Bowl of e-sports. It's an understatement.
		</PageDiv>

		<PageDiv section7>
			League of Legends has a global audience, and there is a hunger for this specific content in a live, entertaining form like the awesome program at Hudson Yards Backyard.
		</PageDiv>

		<PageDiv section8>
			Given Overland's resources, I can the speak the language of the local audience in your marketing. I know where they congregate online, and I can put people in the seats, even in the pandemic.
		</PageDiv>

		<PageDiv section9>
			The tournament officially started October 3rd, 2020. So make no mistake: the clock is ticking.
		</PageDiv>

		<PageDiv datelist>
			<ul>
				<li>October 3</li>
				<li>October 4</li>
				<li>October 5</li>
				<li>October 6</li>
				<li>October 8</li>
				<li>October 9</li>
				<li>October 10</li>
				<li>October 11</li>
				<li>October 15</li>
				<li>October 16</li>
				<li>October 17</li>
				<li>October 18</li>
				<li>October 24</li>
				<li>October 25</li>
				<li><br />October 31</li>
			</ul></PageDiv>
	</div>
);

export default Home;

