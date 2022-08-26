import Head from "next/head";
import React from "react";


export default class StaticHead extends React.Component {
    
    shouldComponentUpdate() {
        return false;
    }

    render() {
       return <Head>
       </Head>
    }
}
