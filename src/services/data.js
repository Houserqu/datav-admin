import { post, get } from '@/utils/http';

export async function getUserDataListI() {
  return get('/api/source/list');
}

export async function getDataDetailI(params) {
  return get('/api/source/some', params);
}

export async function setStatusI(params) {
  return post('/api/app/set-status', params, {
    alertSuccess: true,
    alertError: true,
  });
}

export async function deleteAppI(params) {
  return post('/api/app/delete', params, {
    alertSuccess: true,
    alertError: true,
  });
}

export async function createDataI(params) {
  return post('/api/source/create', params, {
    alertSuccess: true,
    alertError: true,
  });
}

export async function updateAppI(params) {
  return post('/api/app/update', params, {
    alertSuccess: true,
    alertError: true,
  });
}

export async function getCategoryWithComponent(params) {
  return get('/api/app/category/list_com', params);
}
