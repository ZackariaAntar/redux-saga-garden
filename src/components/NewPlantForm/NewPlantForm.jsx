import React, { useState } from "react";
import { useDispatch } from "react-redux";

const NewPlantForm = () => {
	const dispatch = useDispatch();

	//Initial state is an OBJECT, with keys id and name
	let [newPlant, setPlant] = useState({
		name: "",
		kingdom: "",
		clade: "",
		order: "",
		family: "",
		subfamily: "",
		genus: "",
	});

	const handleNameChange = (event, property) => {
		console.log(event, property);
		//Similar to in redux -- we dont want to get rid of the id field when we update name
		setPlant({ ...newPlant, [property]: event.target.value });
	};

	const addNewPlant = (event) => {
		event.preventDefault();
        console.log(newPlant);
		dispatch({ type: "POST_PLANT", payload: newPlant });
        setPlant({name: "",
		kingdom: "",
		clade: "",
		order: "",
		family: "",
		subfamily: "",
		genus: "",})
		//updates the next plant to have a new id
	};
	return (
		<div>
			<h3>This is the form</h3>
			<pre>{JSON.stringify(newPlant)}</pre>
			<div className="form-container">
				<form className="plant-form" onSubmit={addNewPlant}>
					<label id="name">
						<span>Name: </span>
						<input
							type="text"
							value={newPlant.name}
							onChange={(event) =>
								handleNameChange(event, "name")
							}
						/>
					</label>

					<label>
						<span>Kingdom: </span>
						<input
							type="text"
							value={newPlant.kingdom}
							onChange={(event) =>
								handleNameChange(event, "kingdom")
							}
						/>
					</label>

					<label>
						<span>Clade: </span>
						<input
							type="text"
							value={newPlant.clade}
							onChange={(event) =>
								handleNameChange(event, "clade")
							}
						/>
					</label>
					<label>
						<span>Order: </span>
						<input
							type="text"
							value={newPlant.order}
							onChange={(event) =>
								handleNameChange(event, "order")
							}
						/>
					</label>

					<label>
						<span>Family: </span>
						<input
							type="text"
							value={newPlant.family}
							onChange={(event) =>
								handleNameChange(event, "family")
							}
						/>
					</label>

					<label>
						<span>Subfamily: </span>
						<input
							type="text"
							value={newPlant.subfamily}
							onChange={(event) =>
								handleNameChange(event, "subfamily")
							}
						/>
					</label>

					<label>
						<span>Genus: </span>
						<input
							type="text"
							value={newPlant.genus}
							onChange={(event) =>
								handleNameChange(event, "genus")
							}
						/>
					</label>

					<input type="submit" value="Add New Plant" />
				</form>
			</div>
		</div>
	);
};

export default NewPlantForm;
