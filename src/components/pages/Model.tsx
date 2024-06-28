// @flow
import * as React from 'react';
import {adidasArr, AdidasItem} from "./Adidas";
import {NavLink, Route, Routes, useParams} from "react-router-dom";

type ModelType = {
   /* modelData: AdidasItem[]*/
};
export const Model = ({}: ModelType) => {
    const params = useParams()
    /*const {id}: { id?: string } = useParams()*/
    console.log(params.id)
    return (
        params.id === undefined
            ? <div>Model not found</div>
            :
        <div>
            <div>Model: {adidasArr[Number(params.id)].model}</div>
            <div>Collection: {adidasArr[Number(params.id)].collection}</div>
            <div>Price: {adidasArr[Number(params.id)].price}</div>
            <img src={adidasArr[Number(params.id)].picture} alt={'picture'}/>
        </div>

    );
};