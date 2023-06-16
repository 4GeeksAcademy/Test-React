import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<main>
			<Navbar/>
			<section className = "container">
				<Jumbotron/>
			</section>
			<section className="container text-center">
					<article className="row">
						<div className="col">
						<Card/>
						</div>
						<div className="col">
						<Card/>
						</div>
						<div className="col">
						<Card/>
						</div>
						<div className="col">
						<Card/>
						</div>
					</article>
			</section>
			<Footer/>
		</main>
	);
};

export default Home;
