const Footer = ({ links }) => {
    return (
        <footer>
            <ul className="list-group    
            d-flex 
            justify-content-center
            align-items-center
           flex-row">
                {
                    links.map(i => {
                        return (
                            <li className="list-group-item
                            border-0"
                                key={i.id}>
                                {
                                    i.id === 6
                                        ? <a href="mailto:davidopoku30@gmail.com">
                                            <i.iconName size={25} color={i.colorCode} />
                                            <p>
                                                {i.name}
                                            </p>
                                        </a>
                                        :
                                        <a target='_blank' rel="noreferrer" href={i.pathName} >
                                            <i.iconName size={25} color={i.colorCode} />
                                            <p>
                                                {i.name}
                                            </p>
                                        </a>
                                }
                            </li>
                        )
                    })
                }
            </ul>
            copyright David Opoku 2023 ©
        </footer>

    );
}

export default Footer;