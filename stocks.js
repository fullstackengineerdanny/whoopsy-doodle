// fill (and very likely conform structure) with API call
const stockPrices = [[0, 100], [1, 99], [2, 102]].sort((a, b) => a[1] > b[1])
let min = max = minIndex = maxIndex = 0

module.exports = () =>
{
	const needLeastLoss = stockPrices
	// needLeastLoss.sort((a, b) => a[1] < b[1])

	while (stockPrices.length > 1 && stockPrices[0][1] !== stockPrices[stockPrices.length][1])
	{
		for (let i = 0; i < stockPrices.length; i++)
		{
			if (stockPrices[i][0] < stockPrices[stockPrices.length - 1][0])
				return stockPrices[stockPrices.length][1] - stockPrices[i][1]
			if (stockPrices[i][1] === stockPrices[stockPrices.length - 1][1])
				break
		}

		stockPrices.splice(0, 1)
	}

	while (needLeastLoss.length > 1 && needLeastLoss[0][1] !== needLeastLoss[needLeastLoss.length][1])
	{
		for (let i = 0; i < needLeastLoss.length; i++)
		{
			if (needLeastLoss[i][0] < needLeastLoss[needLeastLoss.length - 1][0])
				return needLeastLoss[needLeastLoss.length][1] - needLeastLoss[i][1]
			if (needLeastLoss[i][1] === needLeastLoss[needLeastLoss.length - 1][1])
				break
		}

		needLeastLoss.splice(0, 1)
	}
}

// module.exports = () =>
// {
// 	stockPrices.sort((a, b) => a[1] > b[1])
// 	max = Math.max(...stockPrices.map(a => a[1]))

// 	for (let i = stockPrices.length - 1; i >= 0; i--)
// 		if (stockPrices[i][1] === max)
// 		{
// 			maxIndex = i
// 			break
// 		}

// 	// Iterator is being modified
// 	// Justification:
// 	//	The loop is checking if the current minimum occurs before the maximum.
// 	//	If it does not, then the old minimum is removed and a new one is identified.
// 	while (stockPrices.length > 1)
// 	{
// 		min = Math.min(...stockPrices.map(a => a[1]))

// 		for (let i = 0; i < stockPrices.length - 1; i++)
// 			if (stockPrices[i][1] === min)
// 			{
// 				minIndex = i
// 				break
// 			}
	
// 		for (let i = 0; i < maxIndex; i++)
// 			if (stockPrices[i][1] === min && stockPrices[i][0] < maxIndex)
// 				return max - min
	
// 		stockPrices.splice(minIndex, 1)
// 	}

// 	return false ? -1 : 0
// }
