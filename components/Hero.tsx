import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

const Hero = () => {
  return (
    <div className="hero-container py-20 text-center">
      <h1 className="text-4xl font-bold">Lureleaf</h1>
      <p className="mt-4 text-xl">{siteMetadata.description}</p>
    </div>
  )
}

export default Hero
