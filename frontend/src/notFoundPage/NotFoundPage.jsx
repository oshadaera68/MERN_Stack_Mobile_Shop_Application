import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    title: {
        fontSize: '4rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: theme.palette.primary.main,
    },
    description: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
        color: theme.palette.text.primary,
    },
    link: {
        fontSize: '1.2rem',
        color: theme.palette.primary.main,
        textDecoration: 'underline',
    },
}));

const NotFoundPage = () => {
    const classes = useStyles();

    return (
        <div className={`${classes.container} bg-gray-200`}>
            <h1 className={`${classes.title} text-4xl font-bold mb-8`}>404</h1>
            <p className={`${classes.description} text-lg mb-8`}>
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link to="/" className={`${classes.link} text-lg underline`}>
                Go back to the homepage
            </Link>
        </div>
    );
};

export default NotFoundPage;