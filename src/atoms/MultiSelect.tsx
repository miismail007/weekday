import { Box, Button, Chip, FormControl, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Theme, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

function MultiSelect({name, options, setOptions}) {
    const dispatch = useDispatch()
    const [isOptionOpen, setIsOptionOpen] = useState(false)

    const clearOne = (value : string) => {
        const afterChange = structuredClone(options).map(option => {
            if(option.value === value) option.isSelected = false
            return option
        })
        dispatch(setOptions(afterChange));
    }

    const clearAll = () => {
        const afterChange = structuredClone(options).map(option => {
            option.isSelected = false
            return option
        })
        dispatch(setOptions(afterChange));
    }
    const handleChange = (value : string) => {
        const afterChange = structuredClone(options).map(option => {
            if(option.value === value) option.isSelected = true
            return option
        })
        dispatch(setOptions(afterChange));
    };

    const showClose = () => {
        let show = false
        options.map(option => {
            if(option.isSelected) show = true
        })
        return show
    }

    const isAllSelected = () => {
        return options.every(option => option.isSelected === true);
    }
    return (
        <FormControl sx={{mr:2}}>
            <Typography variant='caption'>{name}</Typography>
            <Box sx={{ p:1, border: 1, borderColor: "#cccccc",borderRadius:1, minWidth: 150, height: 30}} onClick={() => setIsOptionOpen(!isOptionOpen)}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {options.map((option) => option.isSelected && (
                        <Chip key={option.value} label={option.value} onDelete={() => clearOne(option.value)} sx={{borderRadius: 1}}/>
                    ))}
                    {showClose() && <CloseIcon sx={{cursor:"pointer", alignSelf: 'center', justifySelf: 'right'}} onClick={() => clearAll()}/>}
                </Box>
            </Box>
            {isOptionOpen && 
                <Box sx={{maxHeight: 250, overflow: "auto", border: 1, borderColor: "#cccccc", mt:0.5, borderRadius:1, zIndex: 999}}>
                    {options.map((option) => !option.isSelected && (
                        <MenuItem
                            key={option.value}
                            value={option.value}
                            onClick={() => handleChange(option.value)}
                        >
                            {option.value}
                        </MenuItem>
                    ))}
                    {isAllSelected() && <Typography variant='body1' align='center'>No options</Typography>}
                </Box>
            }
        </FormControl>
    )
}

export default MultiSelect