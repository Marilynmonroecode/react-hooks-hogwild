import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import initialHogs from './ComponentA';
import HogTile from './ComponentB';
import AddHogForm from './ComponentC';

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

