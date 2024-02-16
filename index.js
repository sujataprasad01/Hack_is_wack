import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
    return (
        <div className="container">
            <h1>Capacity Building Project</h1>
            <p>This project focuses on capacity building, performance assessment, and motivation for faculty upgradation.</p>
            <a href="#" className="button">Explore More</a>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
