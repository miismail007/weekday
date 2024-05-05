export type JdItem = {
    jdUid: string,
    jdLink: string,
    jobDetailsFromCompany: string,
    maxJdSalary: number,
    minJdSalary: number,
    salaryCurrencyCode: string,
    location: string,
    minExp: number,
    maxExp: number,
    jobRole: string,
    companyName: string,
    logoUrl: string
}

export type Store = {
    filters: {
        roles : Array<Object>,
        remote: Array<Object>,
        companyName: string
    },
    additional: {
        loader: boolean
    },
    jobList: {
        data: {
            jdList: Array<Object>,
            totalCount: number,
            offset: number
        },
        error: boolean
    }
}