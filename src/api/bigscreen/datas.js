import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/mjmap/datachinacity/page',
    method: 'get',
    params: query
  })
}
