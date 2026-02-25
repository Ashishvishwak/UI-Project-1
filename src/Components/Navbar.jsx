import React, { useState } from 'react'
import Btn_1 from '../Util/Btn_1'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react'

const menuItems = [
  'Home',
  'About',
  'Services',
  'Project',
  'Testimonial',
  'Core Team',
  'FAQS',

]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
  })

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="lg:sticky lg:top-0 z-50 lg:flex lg:justify-center mt-5 relative">
      <motion.div
        animate={{ width: scrolled ? '90%' : '100%' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="py-4 px-4 flex justify-between items-center rounded-full bg-sec mt-5 relative"
      >
        <div className="logo max-w-full shrink-0">
          <img src="src/assets/Logo.svg" alt="Logo" className="h-6 md:h-6 w-auto object-contain" />
        </div>

        {/* Desktop menu */}
        <div className="menu hidden lg:flex items-center gap-5 list-none text-lg">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-neutral-500 cursor-pointer">
              {item}
            </li>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="CTA hidden lg:flex">
          <Btn_1 />
        </div>

        {/* Mobile: hamburger button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-neutral-100 transition-colors"
        >
          <span
            className={`block h-0.5 w-6 bg-pri rounded-full transition-all duration-300 origin-center ${
              mobileMenuOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-pri rounded-full transition-all duration-300 my-1 ${
              mobileMenuOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-pri rounded-full transition-all duration-300 origin-center ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 top-0"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden absolute left-4 right-4 top-full mt-2 z-50 rounded-2xl bg-sec shadow-xl py-6 px-6 border border-neutral-100"
            >
              <nav className="flex flex-col gap-2 list-none">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={closeMobileMenu}
                    className="py-3 px-4 rounded-xl hover:bg-neutral-100 cursor-pointer text-lg font-medium transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <Btn_1 />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar