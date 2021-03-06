import fetch from 'dva/fetch';
import { notification, message } from 'antd';
import router from 'umi/router';
import hash from 'hash.js';
import { stringify } from 'qs';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 403) {
    message.info(result.msg || '请登录');
    window.g_app._store.dispatch({
      type: 'login/logout',
    });
    return;
  }

  const errortext = codeMessage[response.status] || response.statusText;
  notification.info({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });

  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

const checkSuccess = (result, ignoreError = false) => {
  if (!ignoreError) {
    if (result.success) {
      message.success(result.msg || '操作成功');
    } else {
      message.error(result.msg || '未知错误');
    }
  }

  return result;
};

const cachedSave = (response, hashcode) => {
  /**
   * Clone a response data and store it in sessionStorage
   * Does not support data other than json, Cache only json
   */
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.match(/application\/json/i)) {
    // All data is saved as text
    response
      .clone()
      .text()
      .then(content => {
        sessionStorage.setItem(hashcode, content);
        sessionStorage.setItem(`${hashcode}:timestamp`, Date.now());
      });
  }
  return response;
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, option = {}, config = {}) {
  /**
   * Produce fingerprints based on url and parameters
   * Maybe url has the same parameters
   */
  const fingerprint = url + (option.body ? JSON.stringify(option.body) : '');
  const hashcode = hash
    .sha256()
    .update(fingerprint)
    .digest('hex');

  const defaultOptions = {
    credentials: 'include',
    mode: 'cors',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  };

  const newOptions = { ...defaultOptions, ...option };

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }

  return (
    fetch(url, newOptions)
      .then(checkStatus)
      // .then(response => cachedSave(response, hashcode))
      .then(response => response.json())
      .then(result => checkSuccess(result, config.ignoreError))
      .catch(e => {
        notification.info({
          message: `请求错误`,
          description: e.message,
        });
      })
  );
}
