import react from 'react'
import * as BS from 'react-bootstrap'

export default function Navigation() {
    return (
        <BS.Navbar className="mt-4 align-items-center justify-content-between footer">
            <BS.Nav>
                <BS.Nav.Item>
                    <BS.Nav.Link rel="noreferrer" target="_blank" href="https://pluralkit.me/">
                        Pluralkit.me
                    </BS.Nav.Link>
                </BS.Nav.Item>
                <BS.Nav.Item>
                    <BS.Nav.Link rel="noreferrer" target="_blank" href="https://github.com/Spectralitree/pk-webs/">
                        github 
                    </BS.Nav.Link>
                </BS.Nav.Item>
            </BS.Nav>
        </BS.Navbar>
    )
}