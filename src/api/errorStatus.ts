// 请求错误处理
export const handleErrStatus = (errStatus: number): string => {
  let errorMessage = '未知错误';
  if (errStatus) {
    switch (errStatus) {
      case 400:
        errorMessage = '请求参数错误';
        break;
      case 401:
        errorMessage = '未授权，请重新登录';
        break;
      case 403:
        errorMessage = '拒绝访问';
        break;
      case 404:
        errorMessage = '请求错误,未找到该资源';
        break;
      case 500:
        errorMessage = '服务器端出错';
        break;
    }
  } else {
    errorMessage = '无法连接到服务器';
  }
  return errorMessage;
};