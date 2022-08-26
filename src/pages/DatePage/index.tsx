import React from 'react';


interface Props {
    profileDate: any;
}

export default class DatePage extends React.Component<Props> {

    render() {
        if (this.props && this.props.profileDate) {
            return (
                <>
                    <h2>Date Page</h2>
                </>
            );
        } else { return (<></>)}
    }
};
