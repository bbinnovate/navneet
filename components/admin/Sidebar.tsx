'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutDashboard,
  Newspaper,
  FileText,
  BookOpen,
  Briefcase,
  Users,
  Settings,
  X,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  PlusCircle,
  List,
  Tags,
} from 'lucide-react';

const navigation = [
  {
    name: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },

  {
    name: 'News',
    icon: Newspaper,
    basePath: '/admin/news',
    subItems: [
      {
        name: 'List News',
        href: '/admin/news',
        icon: List,
      },
      {
        name: 'Add News',
        href: '/admin/news/new',
        icon: PlusCircle,
      },
      {
        name: 'Categories',
        href: '/admin/news?view=categories',
        icon: Tags,
      },
    ],
  },

  {
    name: 'Articles',
    icon: FileText,
    basePath: '/admin/articles',
    subItems: [
      {
        name: 'List Articles',
        href: '/admin/articles',
        icon: List,
      },
      {
        name: 'Add Article',
        href: '/admin/articles/new',
        icon: PlusCircle,
      },
      {
        name: 'Categories',
        href: '/admin/articles?view=categories',
        icon: Tags,
      },
    ],
  },

  {
    name: 'Blogs',
    icon: BookOpen,
    basePath: '/admin/blogs',
    subItems: [
      {
        name: 'List Blogs',
        href: '/admin/blogs',
        icon: List,
      },
      {
        name: 'Add Blog',
        href: '/admin/blogs/new',
        icon: PlusCircle,
      },
      {
        name: 'Categories',
        href: '/admin/blogs?view=categories',
        icon: Tags,
      },
    ],
  },

  {
    name: 'Careers',
    icon: Briefcase,
    basePath: '/admin/careers',
    subItems: [
      {
        name: 'List Careers',
        href: '/admin/careers',
        icon: List,
      },
      {
        name: 'Add Career',
        href: '/admin/careers/new',
        icon: PlusCircle,
      },
    ],
  },

  {
    name: 'Enquiries',
    href: '/admin/enquiries',
    icon: MessageSquare,
  },

  {
    name: 'Users',
    href: '/admin/users',
    icon: Users,
  },

  {
    name: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

export default function Sidebar({
  onClose,
}: {
  onClose?: () => void;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    News: pathname.startsWith('/admin/news'),
    Articles: pathname.startsWith('/admin/articles'),
    Blogs: pathname.startsWith('/admin/blogs'),
    Careers: pathname.startsWith('/admin/careers'),
  });

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="flex h-full min-h-0 w-full flex-col bg-white">

      {/* ================= HEADER ================= */}
      <div className="flex h-[64px] min-h-[64px] items-center justify-between border-b border-gray-200 px-5">
        <Link
          href="/admin"
          className="text-[18px] font-semibold text-gray-900"
        >
          Admin Panel
        </Link>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* ================= MENU ================= */}
      <div className="min-h-0 flex-1 overflow-hidden">
        <nav className="h-full overflow-y-auto px-3 py-3">

          <div className="flex flex-col space-y-1">

            {navigation.map((item) => {

              /* =========================================
                 MENU WITH SUB ITEMS
              ========================================= */

              if (item.subItems) {
                const isActive = pathname.startsWith(
                  item.basePath || ''
                );

                const isOpen = openMenus[item.name];

                return (
                  <div
                    key={item.name}
                    className="w-full"
                  >

                    {/* Parent */}
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.name)}
                      className={`
                        flex
                        h-10
                        w-full
                        items-center
                        justify-between
                        rounded-lg
                        px-3
                        text-sm
                        font-medium
                        transition-colors

                        ${
                          isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }
                      `}
                    >

                      <span className="flex items-center truncate">

                        <item.icon
                          className={`
                            mr-3
                            h-4
                            w-4
                            shrink-0

                            ${
                              isActive
                                ? 'text-blue-600'
                                : 'text-gray-400'
                            }
                          `}
                        />

                        <span className="truncate">{item.name}</span>

                      </span>

                      {isOpen ? (
                        <ChevronDown
                          className={`
                            h-4
                            w-4
                            shrink-0
                            ml-2

                            ${
                              isActive
                                ? 'text-blue-600'
                                : 'text-gray-400'
                            }
                          `}
                        />
                      ) : (
                        <ChevronRight className="h-4 w-4 shrink-0 ml-2 text-gray-400" />
                      )}

                    </button>

                    {/* SUB MENU */}

                    {isOpen && (
                      <div className="ml-4 mt-1 mb-1 border-l border-gray-200 pl-3 flex flex-col space-y-1">

                        {item.subItems.map((subItem) => {

                          const isAddPage =
                            subItem.name.startsWith('Add');

                          const isListPage =
                            subItem.name.startsWith('List');

                          const isCategoryPage =
                            subItem.name === 'Categories';

                          const isExactlyActive =
                            (isAddPage &&
                              pathname.includes('/new')) ||
                            (isListPage &&
                              pathname === item.basePath) ||
                            (isCategoryPage &&
                              searchParams.get('view') === 'categories');

                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`
                                flex
                                h-9
                                w-full
                                items-center
                                rounded-md
                                px-2.5
                                text-sm
                                font-medium
                                transition-colors

                                ${
                                  isExactlyActive
                                    ? 'bg-blue-50 text-blue-700 font-medium'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }
                              `}
                            >

                              <subItem.icon
                                className={`
                                  mr-2.5
                                  h-4
                                  w-4
                                  shrink-0

                                  ${
                                    isExactlyActive
                                      ? 'text-blue-600'
                                      : 'text-gray-400'
                                  }
                                `}
                              />

                              <span className="truncate">{subItem.name}</span>

                            </Link>
                          );
                        })}

                      </div>
                    )}

                  </div>
                );
              }

              /* =========================================
                 NORMAL MENU ITEM
              ========================================= */

              const isActive =
                pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex
                    h-10
                    w-full
                    items-center
                    rounded-lg
                    px-3
                    text-sm
                    font-medium
                    transition-colors

                    ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >

                  <item.icon
                    className={`
                      mr-3
                      h-4
                      w-4
                      shrink-0

                      ${
                        isActive
                          ? 'text-blue-600'
                          : 'text-gray-400'
                      }
                    `}
                  />

                  <span className="truncate">{item.name}</span>

                </Link>
              );
            })}

          </div>
        </nav>
      </div>

    </div>
  );
}