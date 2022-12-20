class Graph {
    constructor () {
        this.adjacencyList = new Map()

        this.addNode = this.addNode.bind(this)
    }

    addNode (node) {
        this.adjacencyList.set(node, [])
    }

    addEdge (origin, destination) {
        this.adjacencyList.get(origin).push(destination)
        this.adjacencyList.get(destination).push(origin)
    }
}

module.exports = Graph