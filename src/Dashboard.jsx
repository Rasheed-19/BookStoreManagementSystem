import React, { useState } from 'react';
import { LogOut, LayoutDashboard, Book, Package, ShoppingCart, Users, Home } from 'lucide-react';
import Homepage from './Homepage';

const Dashboard = ({ user, onBack }) => {
  const [currentView, setCurrentView] = useState('dashboard');

  const handleHomepageClick = () => {
    setCurrentView('homepage');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  // Render Homepage if selected
  if (currentView === 'homepage') {
    return <Homepage onBackToDashboard={handleBackToDashboard} />;
  }

  // Render Dashboard (default view)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back, {user?.name || 'Admin'}!</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleHomepageClick}
                className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Homepage</span>
              </button>
              <button
                onClick={onBack}
                className="flex items-center space-x-2 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Back to Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Book className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Books</h3>
                <p className="text-gray-600">Manage inventory</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-green-600">1,234</p>
              <p className="text-sm text-gray-500">Total books</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Stock</h3>
                <p className="text-gray-600">Inventory levels</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-blue-600">89%</p>
              <p className="text-sm text-gray-500">Stock level</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Orders</h3>
                <p className="text-gray-600">Shopping carts</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-purple-600">45</p>
              <p className="text-sm text-gray-500">Active orders</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Customers</h3>
                <p className="text-gray-600">User management</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-orange-600">567</p>
              <p className="text-sm text-gray-500">Total customers</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-left">
              <Book className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-gray-900">Add New Book</h3>
              <p className="text-sm text-gray-600">Add books to inventory</p>
            </button>
            <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 text-left">
              <Package className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900">Manage Stock</h3>
              <p className="text-sm text-gray-600">Update inventory levels</p>
            </button>
            <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200 text-left">
              <ShoppingCart className="w-8 h-8 text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-900">View Orders</h3>
              <p className="text-sm text-gray-600">Process customer orders</p>
            </button>
            <button className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-left">
              <Users className="w-8 h-8 text-orange-600 mb-2" />
              <h3 className="font-semibold text-gray-900">Customer List</h3>
              <p className="text-sm text-gray-600">Manage customer data</p>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Book className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">New book added to inventory</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Order #1234 completed</p>
                <p className="text-sm text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">New customer registered</p>
                <p className="text-sm text-gray-500">6 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Stock level updated for 5 items</p>
                <p className="text-sm text-gray-500">8 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;