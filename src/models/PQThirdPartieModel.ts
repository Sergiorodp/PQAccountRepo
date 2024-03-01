import { z } from 'zod'

enum EDocType {
    CC = 'CC',
    TI = 'TI',
    NIT = 'NIT',
    PSPRT = 'Passport',
    O = 'Others'
}

enum EContractType{
    F = 'FIJO',
    I = 'INDEFINIDO'
}

enum EStratum {
    One = '1',
    TWO = '2', 
    THREE = '3',
    FOUR = '4', 
    FIVE = '5',
    SIX = '6',
    SEVEM = '7'
}

enum EIncomeLevel {
    MINIMUN = '1',
    MEDLOW = '2',
    MEDHIGH = '3',
    HIGH = '4'
}

enum civilStatus {
    MARRIED = 'Married',
    DIVORSE = 'separate',
    SINGLE = 'Single',
    UNION_FREE = 'Union free',
}

export const PQThirdPartiePersonShema = z.object({
    idType: z.nativeEnum(EDocType),
    idNum: z.string(),
    firstLastName: z.string().optional(),
    secondLastName: z.string().optional(),
    firstName: z.string(),
    secondName: z.string().optional(),
    entryDate: z.coerce.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
      }),
    phone: z.string(),
    address: z.string(),
    email: z.string().email(),
    economicActivity: z.string().max(20),
    municipalityCode: z.number().max(10000),
    contractType: z.nativeEnum(EContractType),
    educationLevel: z.string(),
    stratum: z.nativeEnum(EStratum),
    incomeLevel: z.nativeEnum(EIncomeLevel),
    birthDate: z.coerce.date().optional(),    
    occupation: z.string().max(20),
    workDay: z.number().max(99).optional(),
    withdrawalDate: z.coerce.date().optional(),
    lastAssemblyAttended: z.boolean().optional()
})

export type PQThirdPartiePerson = z.infer<typeof PQThirdPartiePersonShema>