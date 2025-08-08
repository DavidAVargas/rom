import React from 'react'
import Container from './Container'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="py-20">
      <Container className='flex'>
        <h1 className="text-[58px] font-bold">Trusted by Althletes</h1>
        {/* <div className="relative w-[583px] h-[822px]"> */}
          <img src="/images/hero-pic.png" alt="Hero" className="max-w-[583px] max-h-[822px]" />
        {/* </div> */}
      </Container>
    </section>
  )
}