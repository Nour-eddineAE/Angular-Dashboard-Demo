import { INavbarData } from '../model/sidenav.model';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fa fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'fa fa-box-open',
    label: 'Products',
    items: [
      {
        routeLink: 'products/level1.1',
        label: 'level1.1',
        items: [
          {
            routeLink: 'products/level2.1',
            label: 'level2.1',
            items: [
              {
                routeLink: 'products/level3.1',
                label: 'level3.1',
              },
              {
                routeLink: 'products/level3.2',
                label: 'level3.2',
              },
            ],
          },
          {
            routeLink: 'products/level2.2',
            label: 'level2.2',
          },
        ],
      },
      {
        routeLink: 'products/level1.2',
        label: 'level1.2',
      },
    ],
  },
  {
    routeLink: 'statistics',
    icon: 'fa fa-chart-bar',
    label: 'Statistics',
  },
  {
    routeLink: 'coupens',
    icon: 'fa fa-tags',
    label: 'Coupens',
    items: [
      {
        routeLink: 'coupens/list',
        label: 'List Coupens',
      },
      {
        routeLink: 'coupens/create',
        label: 'Create Coupens',
      },
    ],
  },
  {
    routeLink: 'pages',
    icon: 'fa fa-file',
    label: 'Pages',
  },
  {
    routeLink: 'media',
    icon: 'fa fa-camera',
    label: 'Media',
  },
  {
    routeLink: 'settings',
    icon: 'fa fa-cog',
    label: 'Settings',
    expanded: true,
    items: [
      {
        routeLink: 'settings/profile',
        label: 'Profile',
      },
      {
        routeLink: 'settings/customize',
        label: 'Customize',
      },
    ],
  },
];
