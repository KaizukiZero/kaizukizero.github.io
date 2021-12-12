import React from 'react';
import OwnerProject from './Project.jsx';
class HomeService extends React.Component {
        render() {
        return (
            <div className="container mt-4">
                <OwnerProject />
                <OwnerProject />
                <OwnerProject />
                <OwnerProject />
                <OwnerProject />
            </div>

        );
    }
}


export default HomeService;