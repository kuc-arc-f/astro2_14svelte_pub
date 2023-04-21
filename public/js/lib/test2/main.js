
const prmServer = Common.getServerConfig();
console.log(prmServer);
const useState = React.useState;
const useEffect = React.useEffect;
//
const App = () => {
//    const [state, setState] = useState(0)
    const [items, setItems] = useState([])
    //
    useEffect(async() => {
        const testItems = await Crud.getList(prmServer);
        setItems(testItems);
        console.log(testItems);
    }, []);  
    //
    return (
        <div>
            <hr />
            {items.map((item, index) => {
                return (
                <div key={item.id}>ID: {item.id}, Name: {item.title}
                </div>
                )
            })}             
        </div>
    )
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
