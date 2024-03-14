import { z } from 'zod'

enum EDocType {
  CC = 'CC',
  TI = 'TI',
  NIT = 'NIT',
  PSPRT = 'Passport',
  O = 'Others'
}

enum EContractType {
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
  SEVEN = '7'
}

enum EIncomeLevel {
  MINIMUM = '1',
  MEDLOW = '2',
  MEDHIGH = '3',
  HIGH = '4'
}

enum ECivilStatus {
  MARRIED = 'Married',
  DIVORCE = 'separate',
  SINGLE = 'Single',
  UNION_FREE = 'Union free',
}

export const PQThirdPartyPersonSchema = z.object({
  idType: z.nativeEnum(EDocType),
  idNum: z.string(),
  firstLastName: z.string().optional(),
  secondLastName: z.string().optional(),
  firstName: z.string(),
  secondName: z.string().optional(),
  entryDate: z.coerce.date({
    required_error: 'Please select a date and time',
    invalid_type_error: "That's not a date!"
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

export type TPQThirdPartyPerson = z.infer<typeof PQThirdPartyPersonSchema>

export interface IPQThirdPartyPersonRepoResponse {
  idType?: EDocType
  idNum?: string
  firstLastName?: string
  secondLastName?: string
  firstName?: string
  secondName?: string
  entryDate?: Date
  phone?: string
  address?: string
  email?: string
  economicActivity?: string
  municipalityCode?: number
  contractType?: EContractType
  educationLevel?: string
  stratum?: EStratum
  incomeLevel?: EIncomeLevel
  birthDate?: Date
  occupation?: string
  workDay?: number
  withdrawalDate?: Date
  lastAssemblyAttended?: boolean
}
