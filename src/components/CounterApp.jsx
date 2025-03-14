import PropTypes from "prop-types";

export const CounterApp = ({ value, counter }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <h3>{counter}</h3>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired,
};