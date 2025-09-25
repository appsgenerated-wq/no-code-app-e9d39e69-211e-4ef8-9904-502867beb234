import React, { useEffect, useState, useCallback } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const DashboardPage = ({ user, onLogout, manifest }) => {
  const [varieties, setVarieties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingVariety, setEditingVariety] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    origin: '',
    tastingNotes: '',
    harvestDate: ''
  });

  const fetchVarieties = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await manifest.from('appleVarieties').find({
        sort: { createdAt: 'desc' },
        include: ['owner']
      });
      setVarieties(response.data);
    } catch (err) {
      console.error('Failed to fetch varieties:', err);
      setError('Could not load your apple varieties. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [manifest]);

  useEffect(() => {
    fetchVarieties();
  }, [fetchVarieties]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ title: '', description: '', origin: '', tastingNotes: '', harvestDate: '' });
    setEditingVariety(null);
    setShowForm(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingVariety) {
        await manifest.from('appleVarieties').update(editingVariety.id, formData);
      } else {
        await manifest.from('appleVarieties').create(formData);
      }
      resetForm();
      fetchVarieties();
    } catch (err) {
      console.error('Failed to save variety:', err);
      alert('Could not save the variety. Please check the form and try again.');
    }
  };

  const handleEdit = (variety) => {
    setEditingVariety(variety);
    setFormData({
      title: variety.title || '',
      description: variety.description || '',
      origin: variety.origin || '',
      tastingNotes: variety.tastingNotes || '',
      harvestDate: variety.harvestDate ? variety.harvestDate.split('T')[0] : ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this variety?')) {
      try {
        await manifest.from('appleVarieties').delete(id);
        fetchVarieties();
      } catch (err) {
        console.error('Failed to delete variety:', err);
        alert('Could not delete the variety.');
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">🍎 AppleDex</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.name || user.email}!</span>
              <a href="/admin" target="_blank" className="text-sm font-medium text-gray-600 hover:text-blue-600">Admin Panel</a>
              <button 
                onClick={onLogout}
                className="bg-red-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Apple Collection</h1>
          <button 
            onClick={() => { setEditingVariety(null); resetForm(); setShowForm(!showForm); }}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            {showForm ? 'Cancel' : 'Add New Variety'}
          </button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">{editingVariety ? 'Edit' : 'Add'} Apple Variety</h2>
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Origin</label>
                <input type="text" name="origin" value={formData.origin} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Harvest Date</label>
                <input type="date" name="harvestDate" value={formData.harvestDate} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
               <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Tasting Notes</label>
                <textarea name="tastingNotes" value={formData.tastingNotes} onChange={handleInputChange} rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end space-x-3">
                <button type="button" onClick={resetForm} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">{editingVariety ? 'Update' : 'Save'} Variety</button>
              </div>
            </form>
          </div>
        )}

        {isLoading ? (
          <p className="text-center text-gray-500">Loading your collection...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : varieties.length === 0 ? (
          <div className="text-center bg-white p-12 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-medium text-gray-900">No Apple Varieties Found</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding your first apple variety to your collection.</p>
              <button onClick={() => setShowForm(true)} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add First Variety</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {varieties.map(variety => (
              <div key={variety.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {variety.image?.thumbnail?.url && <img src={variety.image.thumbnail.url} alt={variety.title} className="w-full h-48 object-cover"/>}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900">{variety.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">Origin: {variety.origin || 'N/A'}</p>
                  <p className="text-gray-600 text-sm flex-grow">{variety.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end space-x-2">
                     <button onClick={() => handleEdit(variety)} className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors"><PencilIcon className="h-5 w-5"/></button>
                     <button onClick={() => handleDelete(variety.id)} className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-gray-100 transition-colors"><TrashIcon className="h-5 w-5"/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
