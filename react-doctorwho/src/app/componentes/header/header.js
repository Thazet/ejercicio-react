export default function Header() {
    return (
        <header>
            <div className="menu-color">
                <div className="overlap">
                    <div className="menu">
                        <div className="overlap-group">
                            <div className="menu-right">
                                <Menucolor className="menu-color" />
                                <div className="search-menu">
                                    <img className="material-symbols" alt="Material symbols" src="material-symbols-light-search.svg" />
                                    <div className="text-wrapper">Buscar</div>
                                </div>
                            </div>
                            <div className="menu-left">
                                <div className="conece-a">Conoce a</div>
                                <div className="div">Doctores</div>
                                <div className="text-wrapper-2">Contacto</div>
                            </div>
                        </div>
                    </div>
                    <img className="logo" alt="Logo" src="loo.png" />
                </div>
            </div>
        </header>
    )

}