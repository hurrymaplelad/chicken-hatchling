hatch = require '..'

describe 'hatchling', ->
  @timeout 3000
  it 'works', (done) ->
    hatch(1500, done)
