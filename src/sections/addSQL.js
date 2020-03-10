import React, {} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import {useStyles} from '../hooks/useStyles';
import 'firebase/firestore';

const AddSQL = ({inputs, handleSubmit, handleChange}) => {
    const classes = useStyles();

    return (
        <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e)}
            className={classes.margin}>
            {
                inputs && inputs.map((input, index) =>
                    <FormControl
                        key={index}
                        fullWidth
                        error={Boolean(input.alert)}
                        margin="normal">
                        <TextField
                            required
                            label={input.label}
                            variant="outlined"
                            value={input.value}
                            error={Boolean(input.alert)}
                            onChange={(event) => handleChange(input.name, event)}
                        />
                        {Boolean(input.alert) ? (
                            <FormHelperText>{input.alert}</FormHelperText>
                        ) : null}
                    </FormControl>
            )}
            <FormControl className={classes.margin}>
                <Button type="submit" variant="contained" color="primary" size="large">
                    Add SQL
                </Button>
            </FormControl>
        </form>
    );
}

export default AddSQL;
