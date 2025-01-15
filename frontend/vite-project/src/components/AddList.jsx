import { Plus } from "lucide-react";

export function AddList() {
  return (
    <div
      className="w-64 h-20 bg-white shadow-xl pr-4 flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:bg-[#232323] dark:text-white dark:hover:bg-[#357937] rounded-lg"
    >
      <div className="flex items-center">
        <Plus className="w-5 h-5 mr-2" />
        Add list
      </div>
    </div>
  );
}
