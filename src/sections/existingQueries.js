import React, {useState, useEffect, useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import {useStyles} from '../hooks/useStyles';

const ExistingQueries = ({list, copyQuery, deleteQuery}) => {
    const classes = useStyles();

    return (
        <>
            <Typography variant="h3" component="h3" gutterBottom>
                Already existing queries
            </Typography>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Current Site</TableCell>
                            <TableCell>New Site</TableCell>
                            <TableCell>Copy</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell component="th" scope="row">
                                    <p className={classes.ellipsis} style={{'width': '75px'}}>
                                        {item.id}
                                    </p>
                                </TableCell>
                                <TableCell scope="row">
                                    <p className={classes.ellipsis} style={{'width': '200px'}}>
                                        {item.currentSite}
                                    </p>
                                </TableCell>
                                <TableCell scope="row">
                                    <p className={classes.ellipsis} style={{'width': '200px'}}>
                                        {item.newSite}
                                    </p>
                                </TableCell>
                                <TableCell scope="row">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => copyQuery(item.id, index)}>
                                        Copy
                                    </Button>
                                </TableCell>
                                <TableCell scope="row">
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        onClick={() => deleteQuery(item.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default ExistingQueries;
