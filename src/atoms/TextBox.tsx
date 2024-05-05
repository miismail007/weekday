import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

function TextBox({ setText }) {
    const dispatch = useDispatch()
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: 250}}>
            <Typography variant='caption'>Company Name</Typography>
            <TextField sx={{ padding: 0 }} onChange={(e) => {
                dispatch(setText(e.target.value))
            }}/>
        </Box>
    )
}

export default TextBox