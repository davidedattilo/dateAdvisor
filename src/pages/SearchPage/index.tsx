import React from 'react';


interface Props {
    profileSearch: any;
}

export default class SearchPage extends React.Component<Props> {

    render() {
        if (this.props && this.props.profileSearch) {
            return (
                <>
                    <h2>Search Page</h2>
                </>
            );
        } else { return (<></>)}
    }
};
