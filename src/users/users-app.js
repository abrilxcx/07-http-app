import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';
import { loadUsersByPage } from './use-cases/load-users-by-page';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {

  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();
  element.innerHTML = '';
  
  loadUsersByPage( element );
  renderTable( element );
  renderButtons( element );
  
}