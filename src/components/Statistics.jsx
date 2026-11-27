import StatisticLine from './StatisticLine'

function Statistics({ soared, looped, crashed }) {
  const total = soared + looped + crashed

  if (total === 0) {
    return <p>No flights logged yet. Throw a paper airplane!</p>
  }

  const soarRate = ((soared / total) * 100).toFixed(1)

  return (
    <div>
      <h2>Flight Statistics</h2>
      <StatisticLine text="Soared" value={soared} />
      <StatisticLine text="Looped" value={looped} />
      <StatisticLine text="Crashed" value={crashed} />
      <StatisticLine text="Total Flights" value={total} />
      <StatisticLine text="Soar Rate" value={`${soarRate}%`} />
    </div>
  )
}

export default Statistics