
import { render, screen } from '@testing-library/react';
import Async from './Async';
describe("Async component", ()=>{

    test('renders posts if request succeeds', async ()=>{
        //mock data testing request
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async ()=> [
                {
                    id:'p1',
                    title:'first post'
                }
            ]
        })
        render(<Async/>)

        //test instantly and not check data after async request
        /*
        const listItemElements = screen.getAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)*/

        //not ideal, we should not send request because of server congestion
        //it could be a problem to test with auth
        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)
    })

})