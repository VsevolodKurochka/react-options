import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[50],
        padding: theme.spacing(5)
    },
    margin: {
        marginBottom: theme.spacing(2)
    },
    text: {
        fontFamily: 'Roboto, sans-serif',
        whiteSpace: 'pre-line',
        width: '100%',
        backgroundColor: 'transparent',
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.grey[400]}`,
        marginBottom: theme.spacing(1),
        outline: 'none'
    }
}));

export {
    useStyles
};