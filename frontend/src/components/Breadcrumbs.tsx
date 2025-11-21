import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center  space-x-2 text-sm text-gray-500 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index > 0 && <span className="text-gray-300">/</span>}
          {item.path ? (
            <Link 
              to={item.path} 
              className="hover:text-[#6F73EE] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#5D6C7B] cursor-default">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}