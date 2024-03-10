import { Router } from "express";
import authBusiness from "@app/business/PQAuthBusiness";

const router = Router()

console.log(`[[ AUTH LOADED ]]`)

router.get(`/health`, authBusiness.healthCheck)
router.get(`/`)

export default router