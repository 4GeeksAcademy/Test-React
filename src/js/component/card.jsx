import React from "react";


const Card = () => {
	return (
	<div className="card" style={{width: "18rem"}}>
		<img src="https://img.freepik.com/foto-gratis/texturas-pared-gris-fondo_74190-4389.jpg?w=2000" className="card-img-top"/>
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolore voluptas, perferendis accusantium iure doloribus tempore inventore repellendus ab laborum exercitationem assumenda illo sequi maxime, earum autem nesciunt. Quod, voluptas.</p>
			<a href="#" className="btn btn-primary">Find out More!</a>
		</div>
	</div>
	);
};

export default Card;