import { Box, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import JobCard from './components/JobCard'
import MultiSelect from './atoms/MultiSelect'
import { setCompanyName, setRemote, setRoles } from './redux/slices/filterSlice'
import { filterJobs, getData, removeListener, triggerListener } from './utills/helperFunctions'
import TextBox from './atoms/TextBox'
import { Store } from './utills/types'

function App() {
    const roles = useSelector((store: Store) => store.filters.roles)
    const remote = useSelector((store: Store) => store.filters.remote)
    const loader = useSelector((store: Store) => store.additional.loader)
    const companyName = useSelector((store: Store) => store.filters.companyName)
    const jdList = useSelector((store: Store) => store.jobList.data.jdList)
    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        getData()
    },[])

    useEffect(() => {
        setFilteredData(filterJobs())
    },[jdList,roles,remote,companyName])

    useEffect(() => {
        triggerListener()
        return () => removeListener()
    },[])
  return (
    <Container maxWidth="xl">
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <MultiSelect name="Roles" options={roles} setOptions={setRoles}/>
            <MultiSelect name="Remote" options={remote} setOptions={setRemote}/>
            <TextBox setText={setCompanyName}/>
        </Box>
        <JobCard filteredData = {filteredData}/>
        {loader && 
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', my: 1}} width="100%">
                <CircularProgress />
            </Box>
        }
    </Container>
  )
}

export default App
