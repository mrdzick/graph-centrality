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

    calculateClosenessCentrality (node) {
        // Initialize a variable to store the sum of the shortest distances to all other nodes
        let distanceSum = 0
        
        // Use breadth-first search to find the shortest distances to all other nodes
        const queue = [node]
        const distances = new Map([[node, 0]])
        while (queue.length > 0) {
            const currentNode = queue.shift()
            const currentDistance = distances.get(currentNode)
            for (const neighbor of this.adjacencyList.get(currentNode)) {
            if (!distances.has(neighbor)) {
                distances.set(neighbor, currentDistance + 1)
                queue.push(neighbor)
                distanceSum += currentDistance + 1
            }
            }
        }
        
        // Calculate the closeness centrality for the node as the reciprocal of the distance sum
        const numberOfNode = this.adjacencyList.size

        return (numberOfNode - 1) / distanceSum    
    }

    calculateBetweennessCentrality (node) {
        // Initialize a variable to store the betweenness centrality of the node
        let betweenness = 0
        
        // Get the total number of nodes in the graph
        const numNodes = this.adjacencyList.size
        
        // Loop over all pairs of nodes in the graph
        for (const [source, neighbors] of this.adjacencyList) {
            for (const target of this.adjacencyList.keys()) {
            // Use breadth-first search to find the shortest path from the source to the target
            const queue = [source]
            const predecessor = new Map()
            const visited = new Set()
            while (queue.length > 0) {
                const currentNode = queue.shift()
                visited.add(currentNode)
                if (currentNode === target) {
                break
                }
                for (const neighbor of this.adjacencyList.get(currentNode)) {
                if (!visited.has(neighbor)) {
                    predecessor.set(neighbor, currentNode)
                    queue.push(neighbor)
                }
                }
            }
        
            // If a path from the source to the target was found, count the number of times the node appears on the path
            if (predecessor.has(target)) {
                let currentNode = target
                while (currentNode !== source) {
                if (currentNode === node) {
                    betweenness++
                }
                currentNode = predecessor.get(currentNode)
                }
            }
            }
        }
        
        // Normalize the betweenness centrality by dividing it by the total number of pairs of nodes in the graph
        return 2 * betweenness / ((numNodes - 1) * (numNodes - 2))          
    }
}

module.exports = Centrality
