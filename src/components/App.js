import React, { useState } from 'react';
// index.js or App.js
import 'semantic-ui-css/semantic.min.css';


const initialHogs = [
 {
 name: "Babe",
 specialty: "Being incredibly cute",
 greased: false,
 weight: 2.0,
 "highest medal achieved": "bronze",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
 },
 {
 name: "Porkchop",
 specialty: "Making friends",
 greased: true,
 weight: 1.6,
 "highest medal achieved": "silver",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/porkchop.jpg",
 },
 {
 name: "Cherub",
 specialty: "Flying",
 greased: false,
 weight: 0.7,
 "highest medal achieved": "gold",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/cherub.jpg",
 },
 {
 name: "Piggy smalls",
 specialty: "Rapping",
 greased: true,
 weight: 5.1,
 "highest medal achieved": "platinum",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piggy_smalls.jpg",
 },
 {
 name: "Trouble",
 specialty: "Racing",
 greased: true,
 weight: 1.7,
 "highest medal achieved": "gold",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/trouble.jpg",
 },
 {
 name: "Piglet",
 specialty: "Bravery and friendship",
 greased: false,
 weight: 2.2,
 "highest medal achieved": "silver",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/piglet.jpg",
 },
 {
 name: "Peppa",
 specialty: "Being adventurous",
 greased: false,
 weight: 3.7,
 "highest medal achieved": "wood",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/peppa.jpg",
 },
 {
 name: "Truffle Shuffle",
 specialty: "Peeling oranges",
 greased: true,
 weight: 4.0,
 "highest medal achieved": "gold",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/truffle_shuffle.jpg",
 },
 {
 name: "Bailey",
 specialty: "Finding truffles",
 greased: false,
 weight: 2.3,
 "highest medal achieved": "bronze",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/bailey.jpg",
 },
 {
 name: "Galaxy Note",
 specialty: "Cuddling",
 greased: true,
 weight: 1.9,
 "highest medal achieved": "diamond",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/galaxy_note.jpg",
 },
 {
 name: "Leggo My Eggo",
 specialty: "Babysitting",
 greased: true,
 weight: 3.3,
 "highest medal achieved": "platinum",
 image:
 "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/leggo_my_eggo.jpg",
 },

];

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

const AddHogForm = ({ onAddHog }) => {
 const [formData, setFormData] = useState({
 name: "",
 specialty: "",
 weight: "",
 greased: false,
 highestMedal: "",
 image: "/hog-imgs/default.jpg"
 });

 const handleSubmit = (e) => {
 e.preventDefault();
 onAddHog({
 ...formData,
 weight: parseFloat(formData.weight)
 });
 setFormData({
 name: "",
 specialty: "",
 weight: "",
 greased: false,
 highestMedal: "",
 image: "/hog-imgs/default.jpg"
 });
 };

 return (
 <div className="border rounded-lg p-6 max-w-md mx-auto mt-8">
 <h2 className="text-xl font-bold mb-4">Add New Hog</h2>
 <form onSubmit={handleSubmit} className="space-y-4">
 <div>
 <label className="block mb-1">Name</label>
 <input
 type="text"
 value={formData.name}
 onChange={(e) => setFormData({...formData, name: e.target.value})}
 className="w-full p-2 border rounded"
 required
 />
 </div>
 
 <div>
 <label className="block mb-1">Specialty</label>
 <input
 type="text"
 value={formData.specialty}
 onChange={(e) => setFormData({...formData, specialty: e.target.value})}
 className="w-full p-2 border rounded"
 required
 />
 </div>
 
 <div>
 <label className="block mb-1">Weight (tons)</label>
 <input
 type="number"
 step="0.1"
 value={formData.weight}
 onChange={(e) => setFormData({...formData, weight: e.target.value})}
 className="w-full p-2 border rounded"
 required
 />
 </div>
 
 <div className="flex items-center gap-2">
 <input
 type="checkbox"
 checked={formData.greased}
 onChange={(e) => setFormData({...formData, greased: e.target.checked})}
 className="h-4 w-4"
 />
 <label>Greased</label>
 </div>
 
 <div>
 <label className="block mb-1">Highest Medal</label>
 <select
 value={formData.highestMedal}
 onChange={(e) => setFormData({...formData, highestMedal: e.target.value})}
 className="w-full p-2 border rounded"
 >
 <option value="">Select medal...</option>
 <option value="gold">Gold</option>
 <option value="silver">Silver</option>
 <option value="bronze">Bronze</option>
 </select>
 </div>
 
 <button 
 type="submit" 
 className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
 >
 Add Hog
 </button>
 </form>
 </div>
 );
};

const App = () => {
 const [hogs, setHogs] = useState(initialHogs);
 const [visibleHogs, setVisibleHogs] = useState(initialHogs.map(hog => hog.name));
 const [showDetailsFor, setShowDetailsFor] = useState([]);
 const [greasedOnly, setGreasedOnly] = useState(false);
 const [sortBy, setSortBy] = useState("name");

 const toggleDetails = (hogName) => {
 setShowDetailsFor(prev => 
 prev.includes(hogName) 
 ? prev.filter(name => name !== hogName)
 : [...prev, hogName]
 );
 };

 const hideHog = (hogName) => {
 setVisibleHogs(prev => prev.filter(name => name !== hogName));
 };

 const addHog = (newHog) => {
 setHogs(prev => [...prev, newHog]);
 setVisibleHogs(prev => [...prev, newHog.name]);
 };

 const filteredAndSortedHogs = hogs
 .filter(hog => visibleHogs.includes(hog.name))
 .filter(hog => !greasedOnly || hog.greased)
 .sort((a, b) => {
 if (sortBy === "name") {
 return a.name.localeCompare(b.name);
 }
 return a.weight - b.weight;
 });

 return (
 <div className="container mx-auto p-4">
 <div className="flex justify-between items-center mb-6">
 <div className="flex items-center gap-2">
 <input
 type="checkbox"
 checked={greasedOnly}
 onChange={(e) => setGreasedOnly(e.target.checked)}
 className="h-4 w-4"
 />
 <label>Show Only Greased Hogs</label>
 </div>
 
 <select
 value={sortBy}
 onChange={(e) => setSortBy(e.target.value)}
 className="p-2 border rounded"
 >
 <option value="name">Sort by Name</option>
 <option value="weight">Sort by Weight</option>
 </select>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {filteredAndSortedHogs.map(hog => (
 <HogTile
 key={hog.name}
 hog={hog}
 showDetails={showDetailsFor.includes(hog.name)}
 onToggleDetails={toggleDetails}
 onHide={hideHog}
 />
 ))}
 </div>

 <AddHogForm onAddHog={addHog} />
 </div>
 );
};

export default App;

