import { Router } from "express";
import pucBusiness from "@app/business/PQStandarsBusiness";

const PREFIX = 'PUC'
const router = Router()

console.log(`[[ ${PREFIX} ]]`); 

router.get(`/${PREFIX}/`)
router.post(`/${PREFIX}/add/`, pucBusiness.addPUCAccount)

export default router