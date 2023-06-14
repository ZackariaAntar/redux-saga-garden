import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();

    const reduxState = useSelector(store => store.plantList);
  

    useEffect(() => {
        dispatch({type:'FETCH_PLANT'})
        // dispatch an action to request the plantList from the API
    }, []);

    return (
        <div>
            <h3>This is the plant list</h3>
            <ul>
                {reduxState.map((plant)=>(
                    <li key={plant.id}>
                        {plant.name}
                    </li>
                ))}

            </ul>
            <pre>{JSON.stringify(reduxState)}</pre>
        </div>
    );
}

export default PlantList;
