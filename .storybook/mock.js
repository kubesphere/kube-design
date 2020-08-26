import Mock from 'mockjs'

export default function mockData (spec, count) {
  const data = Mock.mock({
    [`data|${count}`]: [spec]
  })
  return data.data
}