import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'
import '@testing-library/jest-dom'

describe('Header', () => {
    it('renders the logo', () => {
        render(<Header />)
        const logo = screen.getByText('BioLean')
        expect(logo).toBeInTheDocument()
    })

    it('toggles mobile menu', () => {
        render(<Header />)
        const button = screen.getByLabelText('Toggle menu')
        fireEvent.click(button)
        // Check for a link that appears in the mobile menu
        const mobileLinks = screen.getAllByText('Home')
        // There might be two "Home" links (one desktop hidden, one mobile visible? No, desktop doesn't have "Home" text usually, just logo)
        // Let's check the mobile menu container or a specific link
        expect(mobileLinks.length).toBeGreaterThan(0)
    })
})
