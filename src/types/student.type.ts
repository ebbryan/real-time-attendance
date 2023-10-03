export type Student = {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    birhdate: string;
    contactNumber: string;
    contactPerson: string;
    address: string;
    qrCode: string;
    isActive: boolean;
    gender: {
        id: number;
        name: string;
    }
}