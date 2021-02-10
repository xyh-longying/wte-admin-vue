import request from '@/utils/request'
import { getToken, getCookie } from '@/utils/auth'

export function getData(data) {
  const req = {
    url: 'order',
    action: 'queryByTime',
    check: true,
    uniIdToken: getToken(),
     
    data: data
  }
  return request({
    url: '',
    method: 'post',
    data: req
  })
}
