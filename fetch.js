'use strict';

export const buscar = async(food)=>{
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${food}&key=aaab7e60-bbd1-4b4e-ab15-e8564b59ed1a`);
    const data = await response.json();
    return data;
}