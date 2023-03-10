const Graph = require('./Graph')
const Centrality = require('./Centrality')

// Create graph
const graph = new Graph()

const nodes = ['A', 'B', 'C', 'D']
nodes.forEach(graph.addNode)

routes = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['B', 'D'],
    ['C', 'D']
]
routes.forEach(route => graph.addEdge(...route))

// Calculate centrality
const centrality = new Centrality(graph)

console.log('Graph :')
console.log(centrality.adjacencyList)
console.log('========================')
const degreeCentralityForA = centrality.calculateDegreeCentrality('A')
const degreeCentralityForB = centrality.calculateDegreeCentrality('B')
const degreeCentralityForC = centrality.calculateDegreeCentrality('C')
const degreeCentralityForD = centrality.calculateDegreeCentrality('D')

console.log(`degree centrality for node A: ${degreeCentralityForA}`)
console.log(`degree centrality for node B: ${degreeCentralityForB}`)
console.log(`degree centrality for node C: ${degreeCentralityForC}`)
console.log(`degree centrality for node D: ${degreeCentralityForD}`)

console.log('========================')

const closenessCentralityForA = centrality.calculateClosenessCentrality('A')
const closenessCentralityForB = centrality.calculateClosenessCentrality('B')
const closenessCentralityForC = centrality.calculateClosenessCentrality('C')
const closenessCentralityForD = centrality.calculateClosenessCentrality('D')

console.log(`closeness centrality for node A: ${closenessCentralityForA}`)
console.log(`closeness centrality for node B: ${closenessCentralityForB}`)
console.log(`closeness centrality for node C: ${closenessCentralityForC}`)
console.log(`closeness centrality for node D: ${closenessCentralityForD}`)

console.log('========================')

const betweennessCentralityForA = centrality.calculateBetweennessCentrality('A')
const betweennessCentralityForB = centrality.calculateBetweennessCentrality('B')
const betweennessCentralityForC = centrality.calculateBetweennessCentrality('C')
const betweennessCentralityForD = centrality.calculateBetweennessCentrality('D')


console.log(`betweenness centrality for node A: ${betweennessCentralityForA}`)
console.log(`betweenness centrality for node B: ${betweennessCentralityForB}`)
console.log(`betweenness centrality for node C: ${betweennessCentralityForC}`)
console.log(`betweenness centrality for node D: ${betweennessCentralityForD}`)

