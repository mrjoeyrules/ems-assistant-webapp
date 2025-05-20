import './App.css';
import { useState} from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    description: '',
    caller_phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('incidents')
      .insert([formData])
    
    if (error){
      alert('Error submitting incident');
      console.error(error);
    }else{
      alert('Incident Logged');
      setFormData({ type: '', location: '', description: '', caller_phone: '' });
    }

  };

  return(
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Log Emergency Incident</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="type" value={formData.type} onChange={handleChange} placeholder="Type (e.g., Police, Fire)" required className='w-full p-2 border rounded' />
        <input name="location" value={formData.location} onChange={handleChange} placeholder="Location (e.g., Police, Fire)" required className='w-full p-2 border rounded' />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className='w-full p-2 border rounded'></textarea>
        <input name="caller_phone" value={formData.caller_phone} onChange={handleChange} placeholder="Callers phone (optional)" className='w-full p-2 border rounded' />  
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>Submit Incident</button> 
      </form>
    </div>

  );
}

export default App;
