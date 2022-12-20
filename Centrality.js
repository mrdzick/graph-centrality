class Centrality {
    constructor (graph) {
        const { adjacencyList } = graph

        this.adjacencyList = adjacencyList
    }

    calculateDegreeCentrality (node) {
        const numberOfEdge = this.adjacencyList.get(node).length
        const numberOfNode = this.adjacencyList.size

        return numberOfEdge / (numberOfNode - 1)
    }
}

module.exports = Centrality
