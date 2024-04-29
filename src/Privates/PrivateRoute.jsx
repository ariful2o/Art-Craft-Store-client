import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../provider/AuthProvider';


export default function PrivateRoute({ children }) {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="justify-center flex my-20"><span className="loading loading-spinner text-error"></span></div>
    }
    if (user) {
        return children;
    }
    return (<Navigate state={location?.pathname} to="/login"></Navigate>)
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}