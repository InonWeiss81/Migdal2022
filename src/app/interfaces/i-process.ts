export interface ContactPerson {
    id: number;
    deliveryFlag: boolean;
    type: {
        code: number;
        value: string;
    };
    name: string;
    phoneNumber: number;
    email: string;
    address: string;
}

export interface Insured {
    address: {
        cityName: string;
        streetName: string;
    };
    identityType: number;
    age: number;
    lastName: string;
    identity: number;
    firstName: string;
}

export interface SuperClaim {
    superClaimNum: number;
    superClaimStatus: {
        code: number;
        value: string;
    };
}

export interface IProcess {
    superClaim: SuperClaim;
    insured: Insured;
    contactPersons: ContactPerson[];
}