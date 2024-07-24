"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LandingPrism() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="w-full h-auto"
        >
            <Image src="/rainbow-landing.svg" alt="Picture of me" width={1250} height={200} />
        </motion.div>
    );
}
