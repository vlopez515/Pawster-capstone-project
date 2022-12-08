import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(initialFValues) {


    const [values, setValues] = useState(initialFValues);

    const handleInputChange = e => {
        const { name, value } = e.target
        if(value === "true") {
            setValues({ ...values, [name]: true })
        } 
        if(value === "false") {
            setValues({ ...values, [name]: false })
        }
        setValues({ ...values, [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
    }


    return {
        values,
        setValues,
        handleInputChange,
        resetForm

    }
}


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {

    const classes = useStyles();
    const { children, ...other } = props;
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
