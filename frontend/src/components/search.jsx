const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden" style={{fontFamily: 'tisa_sans_probold', textAlign:'start', fontSize:'18px'}}>Pesquisar relatório por número</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Digite o número do relatório"
            name="s" 
            style={{fontFamily: 'tisa_sans_probold', width: '100%',  padding: '10px', border: 'none', marginBottom: '10px', borderRadius: '5px'}}
        />
        <button type="submit"
                 style={{fontFamily: 'tisa_sans_probold', borderRadius: '5px'}}
                >Procurar
        </button>
    </form>
);

export default SearchBar;