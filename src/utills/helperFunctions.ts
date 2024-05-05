import { setLoader } from "../redux/slices/additionalSlice";
import { setJdList, setJdListCount, setOffset } from "../redux/slices/jobListslice";
import { store } from "../redux/store/store";
import { JdItem } from "./types";

export function triggerListener(){
    window.addEventListener('scroll', scrollEvent);
}

export function removeListener(){
    window.removeEventListener('scroll', scrollEvent);
}

export function scrollEvent() {
    const { jdList, totalCount } = store.getState().jobList.data
    if ((window.innerHeight + window.scrollY + 10) >= document.body.offsetHeight) {
        if(jdList.length < totalCount){
            getData()
        }
    }
}


export async function getData(){
    try {
        store.dispatch(setLoader(true))
        const { jdList, offset } = store.getState().jobList.data
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "limit": 10,
            "offset": offset
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            store.dispatch(setJdList([...jdList,...result.jdList]))
            store.dispatch(setJdListCount(result.totalCount))
            store.dispatch(setOffset(offset + 10))
            store.dispatch(setLoader(false))
        })
        .catch((error) => console.error(error));
    } catch (error) {
        console.log(error);
    }
}
export const isAllUnSelected = (obj) => { // to check any of the dropdown is not any selected option
    return obj.every(option => option.isSelected === false);
}

export function filterJobs(){
    const jdList = structuredClone(store.getState().jobList.data.jdList)
    let filteredJobs = jdList
    const roles = store.getState().filters.roles
    const remote = store.getState().filters.remote
    const companyName = store.getState().filters.companyName
    let selectedRoles = roles.filter(role => role.isSelected).map(role => role.value.toLowerCase());
    let selectedRemotes = remote.filter(remote => remote.isSelected).map(remote => remote.value.toLowerCase());
    if(!isAllUnSelected(roles)){ // fileter for roles
        filteredJobs = filteredJobs.filter((job : JdItem) =>
            selectedRoles.some((role) => role === job.jobRole)
        );
    }
    if(!isAllUnSelected(remote)){ // filter for remote/hybrid
        filteredJobs = filteredJobs.filter((job: JdItem) =>
            selectedRemotes.some((remote) => remote === job.location)
        );
    }
    if(companyName){ // filter for company name
        filteredJobs = filteredJobs.filter((job: JdItem) => job.companyName.includes(companyName));
    }
    return filteredJobs
}