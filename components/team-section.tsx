"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import FadeInSection from "@/components/fade-in-section"

export default function TeamSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <FadeInSection>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Leadership</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">The visionary team behind Fashion Fusion's success.</p>
          </div>
        </FadeInSection>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">  
  {[  
    {  
      name: "Priyanshu Gupta",  
      role: "Co-Founder & Chief Strategy Officer",  
      image: "https://source.unsplash.com/HCdBpAo1tMU/300x300",  
      bio: "With over 15 years in the fashion industry, Priyanshu co-founded Fashion Fusion with a vision to revolutionize India's clothing wholesale ecosystem.",  
    },  
    {  
      name: "Ankush",  
      role: "Co-Founder & Chief Operating Officer",  
      image: "https://source.unsplash.com/zaXJ3KA4Kg0/300x300",  
      bio: "Ankush, a co-founder, brings extensive operations expertise, having scaled multiple retail businesses across India before joining Fashion Fusion.",  
    },  
    {  
      name: "Shivam Maurya",  
      role: "Co-Founder & Chief Executive Officer",  
      image: "https://images.unsplash.com/photo-1647046536009-4194eac50f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",  
      bio: "A visionary designer and co-founder with a keen eye for emerging trends, Shivam leads our team as CEO, driving innovative collections and growth.",  
    },  
  ].map((member, index) => (  
    <FadeInSection key={index} delay={index * 0.1} direction="up">  
      <motion.div className="flex flex-col items-center text-center" whileHover={{ y: -5 }}>  
        <motion.div  
          className="relative h-48 w-48 overflow-hidden rounded-full mb-4"  
          whileHover={{  
            scale: 1.05,  
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",  
          }}  
        >  
          <Image  
            src={member.image}  
            alt={member.name}  
            width={200}  
            height={200}  
            className="h-full w-full object-cover"  
          />  
        </motion.div>  
        <h3 className="text-xl font-bold">{member.name}</h3>  
        <p className="text-muted-foreground">{member.role}</p>  
      </motion.div>  
    </FadeInSection>  
  ))}  
</div>  
      </div>
    </section>
  )
}
