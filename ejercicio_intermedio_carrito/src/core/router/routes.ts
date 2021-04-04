import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  login: string;
  gallerys: string;
  submoduleList: string;
  // employees: string;
  // editEmployee: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  login: '/login',
  gallerys: '/listgallerys/:section',
  submoduleList: '/submodule-list',
  // employees: '/listemployees/:section',
  // editEmployee: '/employees/:id',
};

// interface Routes extends Omit<SwitchRoutes, 'editEmployee'|'employees'|'gallerys'> {
interface Routes extends Omit<SwitchRoutes, 'gallerys'> {
  // editEmployee: (id: string) => string;
  // employees: (section: string) => string;
  gallerys: (section: string) => string;

}

export const routes: Routes = {
  ...switchRoutes,
  // editEmployee: id => generatePath(switchRoutes.editEmployee, { id }),
  // employees: section => generatePath(switchRoutes.employees, { section }),
  gallerys: section => generatePath(switchRoutes.gallerys, { section }),
};
