import './style.css'

const SquaresGrid = () => {
    const componentCount = 25;

    const components1 = [];
    for (let i = 0; i < componentCount; i++) {
        components1.push(<div className="gridSquare"></div>);
    }
    
    return (
        <>
            <div className="squaresGrid">
               {components1} 
            </div>
        </>
    )
}

export default SquaresGrid