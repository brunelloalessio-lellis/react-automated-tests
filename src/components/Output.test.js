import Output from "./Output";
import { render,screen } from '@testing-library/react';

describe("Output component", ()=>{

    test('paragraph created with text', ()=>{

        render(<Output text="test"></Output>)

        const p = screen.getByText("test")
        expect(p).toBeInTheDocument()
    })

})