const ADMIN_PREFIX = "/admin";
export const adminRoutes = {
  home: ADMIN_PREFIX,
  categories: `${ADMIN_PREFIX}/categories`,
  category: `${ADMIN_PREFIX}/categories/:id`,
  stores: `${ADMIN_PREFIX}/stores`,
  createStore: `${ADMIN_PREFIX}/stores/create-store`,
  editStore: `${ADMIN_PREFIX}/stores/edit-store`,
  store: `${ADMIN_PREFIX}/stores/:id`,
  storeProducts: `${ADMIN_PREFIX}/stores/:id/product`,
  orders: `${ADMIN_PREFIX}/orders`,
};
