import { List, Calendar, Star, Menu, User, Plus} from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 border-r ">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <p className="ml-4 text-gray-700">Hey, ABCD</p>
      </div>

      <nav className="space-y-2">
        <button className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
          <List className="w-5 h-5 mr-3" />
          All Tasks
        </button>
        <button className="flex items-center w-full p-3 bg-green-50 text-gray-700 rounded-lg">
          <Calendar className="w-5 h-5 mr-3" />
          Today
        </button>
        <button className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Star className="w-5 h-5 mr-3" />
          Important
        </button>
        <button className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Menu className="w-5 h-5 mr-3" />
          Planned
        </button>
        <button className="flex items-center w-full p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
          <User className="w-5 h-5 mr-3" />
          Assigned to me
        </button>
      </nav>

      <button className="flex items-center w-full p-3 mt-6 text-gray-700 hover:bg-gray-100 rounded-lg">
        <Plus className="w-5 h-5 mr-3" />
        Add list
      </button>
    </div>
  );
};
