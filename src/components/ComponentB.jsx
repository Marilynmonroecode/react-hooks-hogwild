const HogTile = ({ hog, onToggleDetails, showDetails, onHide }) => {
    return (
    <div className="border rounded-lg p-4 shadow-md">
    <h2 className="text-xl font-bold mb-2">{hog.name}</h2>
    <img 
    src={hog.image} 
    alt={hog.name}
    className="w-full h-48 object-cover rounded-md mb-4"
    />
    
    {showDetails && (
    <div className="space-y-2 mb-4">
    <p><strong>Specialty:</strong> {hog.specialty}</p>
    <p><strong>Weight:</strong> {hog.weight} tons</p>
    <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
    <p><strong>Highest Medal:</strong> {hog.highestMedal}</p>
    </div>
    )}
    
    <div className="flex gap-2">
    <button 
    onClick={() => onToggleDetails(hog.name)}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
    {showDetails ? "Hide Details" : "Show Details"}
    </button>
    <button 
    onClick={() => onHide(hog.name)}
    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
    Hide Hog
    </button>
    </div>
    </div>
    );
   };

   export default HogTile;