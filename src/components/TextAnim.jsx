import '../css/textAnimations.css';
import {motion} from 'framer-motion';



export default function TextAnim() {
    return (
        <>
            <h1 style={{color: 'purple', font: 'thin'}}>Projects</h1>
            <div className="text-7xl font-thin tracking-tight purple">Projects</div>
            <motion.button
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
/>
        <motion.text 
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl font-thin tracking-tight purple">Projects</motion.text>
           

           <div className="example-container">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />

      <motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    />
    </div>
       </> 
    )
}