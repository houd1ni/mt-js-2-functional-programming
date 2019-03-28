import test from 'ava'
import slowFunction from './slow'

test('functional unit test', async (t) => {

  t.is(
    await slowFunction(42),
    (42 + 5) * 2
  )

})