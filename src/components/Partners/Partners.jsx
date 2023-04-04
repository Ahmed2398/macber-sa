import React from 'react'
import partners from '../../assets/images/newsectionpartners.png';
import {motion} from "framer-motion";
import MissionPartners from "../MissionPartners/MissionPartners";
import macberOffice from "../../assets/images/office/office.png";

const Partners = () => {
  return (
    <>
      <motion.section
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, type: 'tween' }}
          className="clients landsape  " id="Partners"
      >
          <div>
              <img src={macberOffice} alt="office" className="rounded-custom w-100" />

          </div>

          <div className="">

    <img src={partners} className="rounded" width="100%"/>
    </div>
  </motion.section>
    </>
  )
}

export default Partners