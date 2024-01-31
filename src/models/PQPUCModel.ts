export interface IPUC {
    class: string,
    description: string,
    groups: [IPUCGroup]
}

interface IPUCGroup {
    name: string,
    code: string,
    accounts: [IPUCAccount]
}

interface IPUCAccount {
    code: string,
    name: string,
    subAccounts: [ISubAccount]
}

interface ISubAccount {
    name: string, 
    code: string
}