import { Avatar, Chip, Grid, Paper, Typography } from '@mui/material'
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import React from 'react'
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { getCurrencySymbol, htmlDecode } from '../utills/helperFunctions';
import { JdItem } from '../utills/types';

function JobCard({filteredData}) {
    const jdList = filteredData
    return (
        <Grid container spacing={3} sx={{mt: 5}}>
            {jdList.map((listItem: JdItem) => 
                <Grid item xs={4} key={listItem.jdUid}>
                    <Paper elevation={2} sx={{p : 2,borderRadius: 5, ':hover' : { boxShadow: 4}}}>
                        <Chip 
                            sx={{boxShadow:1, borderColor: "#e6e6e6", height: 23, fontSize: 10}}
                            label={`⏳ Posted ${Math.floor(Math.random()*16)} days ago`}
                            variant="outlined" 
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', p: 1, my: 1}}>
                            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                                <Avatar alt="Remy Sharp" src={listItem.logoUrl} />
                                <Box sx={{ display: 'flex', flexDirection: 'column', mx: 2}}>
                                    <Typography color={"#8b8b8b"}>{`${listItem.companyName}`}</Typography>
                                    <Typography variant="overline">{`${listItem.jobRole}`}</Typography>
                                    <Typography variant="caption">{`${listItem.location}`}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Typography mx={1} variant='body2'>{`Estimated Salary: ${htmlDecode(getCurrencySymbol(listItem.salaryCurrencyCode))}${listItem.minJdSalary} - ${listItem.maxJdSalary} LPA ✅`}</Typography>
                        <Box sx={{ height: 250,overflow: "hidden", display: 'flex', flexDirection: 'column', my: 1, maskImage: 'linear-gradient(to bottom, #fff, #fff, #fff0)'}}>
                            <Typography mx={1} variant='body1'>About Company:</Typography>
                            <Typography mx={1} variant='body1' sx={{fontWeight: 400}}>About Us:</Typography>
                            <Typography mx={1} variant='subtitle1'>{listItem.jobDetailsFromCompany}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                            <Typography mx={1} variant='overline' sx={{cursor: 'pointer', color: '#4943da', textAlign: 'center'}}>View Job</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', p: 1, my: 1}}>
                            <Typography color={"#8b8b8b"}>Minimum Experience</Typography>
                            <Typography variant='overline'>{listItem.minExp} years</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', p: 1, my: 1}}>
                            <Button variant='contained' sx={{ backgroundColor: '#55efc4', color: '#000', ':hover': {backgroundColor: '#55efc4'}}} onClick={() => {
                                window.open(`${listItem.jdLink}`)
                            }}>⚡ Easy Apply</Button>
                        </Box>
                    </Paper>
                </Grid>
            )}
        </Grid>
    )
}

export default JobCard