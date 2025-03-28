function Navigation() {
    try {
        return (
            <nav className="navbar" data-name="navigation">
                <div className="nav-container">
                    <a href="/" className="nav-logo" data-name="nav-logo">
                        <img src="IMG/levantamento-de-peso.png" alt="GoFit Logo" data-name="nav-logo-image" />
                        <span data-name="nav-logo-text">GoFit</span>
                    </a>
                    <ul className="nav-links" data-name="nav-links">
                        <li><a href="../Pags/academia.html" data-name="nav-link-gym">Academia</a></li>
                        <li>
                            <a href="Pags/nutricao.html" class="nav-links">Nutrição</a>
                            <ul class="dropdown">
                                <li><a href="Pags/nutricao.html#macro-micro" class="nav-links">Macro x Micro</a></li>
                                <li><a href="Pags/nutricao.html#caloria" class="nav-links">Caloria</a></li>
                                <li><a href="Pags/nutricao.html#info-nutri" class="nav-links">Info Nutricional</a></li>
                                <li><a href="Pags/nutricao.html#info-dieta" class="nav-links">Dieta</a></li>
                                <li><a href="Pags/nutricao.html#psicologico" class="nav-links">Saude Mental</a></li>
                                <li><a href="Pags/nutricao.html#fato-mito" class="nav-links">Fato x Mito</a></li>
                            </ul>
                        </li>
                        <li><a href="../index_calcu.html" data-name="nav-link-calculators">Calculadoras</a></li>
                        <li><a href="../Pags/quemsomos.html" data-name="nav-link-content">Conteúdos</a></li>
                    </ul>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navigation component error:', error);
        reportError(error);
        return null;
    }
}
