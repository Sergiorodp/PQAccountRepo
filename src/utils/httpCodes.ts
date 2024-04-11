export const HTTPCODES: IHTTPCODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500
}

interface IHTTPCODES {
  OK: number
  CREATED: number
  ACCEPTED: number
  BAD_REQUEST: number
  SERVER_ERROR: number
}
