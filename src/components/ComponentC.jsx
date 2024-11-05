import { useState } from "react";


const AddHogForm = ({ onAddHog }) => {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    highestMedal: "",
    image: "/hog-imgs/default.jpg"
  });
  
  const [setError] = useState("");
  const [preview, setPreview] = useState("/hog-imgs/default.jpg");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
          setFormData({ ...formData, image: reader.result });
        };
        reader.readAsDataURL(file);
        setError("");
      } else {
        setError("Please select an image file");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.specialty || !formData.weight) {
      setError("Please fill in all required fields");
      return;
    }

    onAddHog({
      ...formData,
      weight: parseFloat(formData.weight)
    });
    
    // Reset form
    setFormData({
      name: "",
      specialty: "",
      weight: "",
      greased: false,
      highestMedal: "",
      image: "/hog-imgs/default.jpg"
    });
    setPreview("/hog-imgs/default.jpg");
    setError("");
  };

  return (
    <div className="border rounded-lg p-6 max-w-md mx-auto mt-8 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Hog</h2>
      
      

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Specialty *</label>
          <input
            type="text"
            value={formData.specialty}
            onChange={(e) => setFormData({...formData, specialty: e.target.value})}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Weight (tons) *</label>
          <input
            type="number"
            step="0.1"
            min="0"
            value={formData.weight}
            onChange={(e) => setFormData({...formData, weight: e.target.value})}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.greased}
            onChange={(e) => setFormData({...formData, greased: e.target.checked})}
            className="h-4 w-4 text-green-500 focus:ring-green-500"
          />
          <label className="font-medium text-gray-700">Greased</label>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Highest Medal</label>
          <select
            value={formData.highestMedal}
            onChange={(e) => setFormData({...formData, highestMedal: e.target.value})}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select medal...</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="bronze">Bronze</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Image *</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
          {preview && (
            <div className="mt-2">
              <img 
                src={preview} 
                alt="Hog preview" 
                className="w-32 h-32 object-cover rounded-lg border"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddHogForm;