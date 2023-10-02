import React from 'react';
import Base from './[...base]';
import { getServerSideProps as getBaseSSP } from './[...base]';

export async function getServerSideProps(context) {
    return await getBaseSSP(context);
}

export default function Index(props) {
    return <Base {...props} />;
}