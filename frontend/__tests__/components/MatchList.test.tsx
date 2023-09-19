import {render,screen} from '@testing-library/react'
import MatchList from "@/components/MatchList";
import {beforeEach} from "@jest/globals";

describe('MatchList', () => {
    it('renders the TasteMate h1', () => {
        render(<MatchList/>)
        const myElem = screen.getByText('TasteMate')

        expect(myElem).toBeInTheDocument()
    })
})
