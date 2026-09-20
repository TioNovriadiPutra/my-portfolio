import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion.create(Link);
const MotionImage = motion.create(Image);

export { MotionLink, MotionImage };
